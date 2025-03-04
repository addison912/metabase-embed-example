"use server";
import { redirect } from "next/navigation";
import { db } from "@/server/db";
import {
  currentUser,
  auth,
  type User as ClerkUser,
} from "@clerk/nextjs/server";

import jwt from "jsonwebtoken";

if (!process.env.METABASE_JWT_SHARED_SECRET) {
  throw new Error("Missing METABASE_JWT_SHARED_SECRET");
}
if (!process.env.NEXT_PUBLIC_METABASE_INSTANCE_URL) {
  throw new Error("Missing NEXT_PUBLIC_METABASE_INSTANCE_URL");
}

const METABASE_JWT_SHARED_SECRET = process.env.METABASE_JWT_SHARED_SECRET;
const NEXT_PUBLIC_METABASE_INSTANCE_URL =
  process.env.NEXT_PUBLIC_METABASE_INSTANCE_URL;

export async function GET() {
  const clerkUser: ClerkUser | null = await currentUser();
  if (!clerkUser?.emailAddresses[0]?.emailAddress) {
    redirect("/");
  }
  const user = await db.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  });
  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  // const user = {
  //   email: "john@example.com",
  //   firstName: "John",
  //   lastName: "Doe",
  //   group: "admin",
  //   accountId: 16,
  // };

  console.log("user:", user.email);

  const token = jwt.sign(
    {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      groups: [user.group || "default"],
      account_id: user.accountId,
      exp: Math.round(Date.now() / 1000) + 60 * 10,
    },
    METABASE_JWT_SHARED_SECRET,
  );

  const ssoUrl = `${NEXT_PUBLIC_METABASE_INSTANCE_URL}/auth/sso?token=true&jwt=${token}`;

  try {
    const response = await fetch(ssoUrl);
    const session = await response.text();
    return new Response(session);
  } catch (error) {
    console.error("error", error);
    const message = error instanceof Error ? error.message : "unknown error";
    return new Response(message, { status: 500 });
  }
  // return new Response("Hello, world!");
}
