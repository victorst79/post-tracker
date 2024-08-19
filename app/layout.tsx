import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import PopoverFeedback from "@/components/PopoverFeedback";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PostTrack",
  description: "Track your posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body className={'min-h-screen bg-blue-50'}>
        <header>
          <Navbar />
        </header>
        <main className="px-24">{children}</main>
        <PopoverFeedback />
      </body>
    </html>
  );
}