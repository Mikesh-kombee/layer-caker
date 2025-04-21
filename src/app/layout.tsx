import "@/app/globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body>{children}</body>
    </html>
  );
}
