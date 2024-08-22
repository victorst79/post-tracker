import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import PopoverFeedback from "@/components/PopoverFeedback";

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
        <header>
          <Navbar />
        </header>
        <main className={`px-24 ${roboto.className}`}>{children}</main>
        <PopoverFeedback />
        {/*         <div className="bg-indigo-100 text-center py-4 lg:px-4 absolute bottom-0 w-full z-10">
          <div className="p-2 bg-indigo-800 opacity-100 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex z-11" role="alert">
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">BETA</span>
            <span className="font-semibold mr-2 text-left flex-auto">This is a very early beta version of the product. Some features may not work 100% as expected.</span>
            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
          </div>
        </div> */}
      </body>
    </html>
  );
}