import "@/app/globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";
import { partytownSnippet } from "@builder.io/partytown/integration";
import { partytownConfig } from "../partytown";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              ${partytownSnippet(partytownConfig)}
              console.log('Partytown initialized:', window.partytown);
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
