import { isRegistered } from "@/actions/user";
import {
  defineMetabaseAuthConfig,
  MetabaseProvider,
} from "@metabase/embedding-sdk-react/nextjs";
import { type PropsWithChildren } from "react";

if (!process.env.NEXT_PUBLIC_METABASE_INSTANCE_URL) {
  throw new Error("Missing NEXT_PUBLIC_METABASE_INSTANCE_URL");
}

const authConfig = defineMetabaseAuthConfig({
  metabaseInstanceUrl: process.env.NEXT_PUBLIC_METABASE_INSTANCE_URL,
  authProviderUri: `/api/metabase`,
});

const MainLayout = async ({ children }: PropsWithChildren) => {
  await isRegistered();
  return (
    <div className="min-h-main">
      <main className={`relative min-h-screen pt-[var(--header-height)]`}>
        <MetabaseProvider authConfig={authConfig}>{children}</MetabaseProvider>
        {/* {children} */}
      </main>
    </div>
  );
};

export default MainLayout;
