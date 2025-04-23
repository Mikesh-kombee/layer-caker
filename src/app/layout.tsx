// src/app/layout.tsx
import "@/app/globals.css";
import Script from "next/script";
import { partytownSnippet } from '@qwik.dev/partytown/integration';
import { partytownConfig } from "../partytown";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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