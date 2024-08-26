import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import PopoverFeedback from "@/components/PopoverFeedback";
import { AuthProvider } from "@/hooks/useAuth";

const roboto = Roboto({ weight: "400", subsets: ['latin'] });

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
    <html lang="en">
      <body className={'min-h-screen bg-blue-50'}>
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          <main className={`px-24 ${roboto.className}`}>{children}</main>
          <PopoverFeedback />
        </AuthProvider>
      </body>
    </html>
  );
}