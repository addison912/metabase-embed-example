"use server";
import { redirect } from "next/navigation";
import { db } from "@/server/db";
import {
  currentUser,
  auth,
  type User as ClerkUser,
} from "@clerk/nextjs/server";

export const getUser = async () => {
  const clerkUser: ClerkUser | null = await currentUser();
  if (!clerkUser?.emailAddresses[0]?.emailAddress) {
    redirect("/");
  }
  const match = await db.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  });
  return match;
};

export const getUserByClerkID = async (select = { id: true }) => {
  const { userId } = await auth();
  const user = await db.user.findUniqueOrThrow({
    where: {
      clerkId: userId!,
    },
    select,
  });
  return user;
};

export const isRegistered = async () => {
  const clerkUser: ClerkUser | null = await currentUser();
  if (!clerkUser?.emailAddresses[0]?.emailAddress) {
    redirect("/");
  }
  const user = await db.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  });
  if (!user || !user.accountId) {
    redirect(`/register`);
  }
};

export const createUser = async (accountId: string) => {
  const clerkUser: ClerkUser | null = await currentUser();
  if (!clerkUser?.emailAddresses[0]?.emailAddress) {
    redirect("/");
  }
  const userExists = await db.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  });
  if (!!userExists) {
    redirect(`/analytics`);
  }
  await db.user.create({
    data: {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      accountId,
    },
  });
  redirect(`/register`);
};
