import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "austin :)",
  description: "Austin Cox - Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <div className="background"></div>
      </body>
    </html>
  );
}
