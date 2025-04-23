// src/app/layout.tsx
import "@/app/globals.css";
import Script from "next/script";
import { partytownSnippet } from '@qwik.dev/partytown/integration';
import { partytownConfig } from "../partytown";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Partytown } from "@qwik.dev/partytown/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Partytown forward={["dataLayer.push"]} />
        <GoogleTagManager />
        <Script
          id="partytown"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: partytownSnippet(partytownConfig),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}