import "@styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@components/Header";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Metabase Embedding",
  description: "Metabase Embedding SDK Example",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="bg-primary dark:[color-scheme:dark]">
          <TRPCReactProvider>
            <Header />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
