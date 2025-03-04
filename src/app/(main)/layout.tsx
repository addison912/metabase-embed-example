import { isRegistered } from "@/actions/user";
import {
  defineMetabaseAuthConfig,
  MetabaseProvider,
} from "@metabase/embedding-sdk-react/nextjs";
import { type PropsWithChildren } from "react";
import LeftNav from "../components/LeftNav/LeftNav";

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
      <LeftNav />
      <main
        className={`relative min-h-screen pt-[var(--header-height)] sm:ml-[var(--aside-width)]`}
      >
        <MetabaseProvider authConfig={authConfig}>{children}</MetabaseProvider>
        {/* {children} */}
      </main>
    </div>
  );
};

export default MainLayout;
