import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health Club",
  description: "Created to promote the health of people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
