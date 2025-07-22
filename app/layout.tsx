import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from '@/components/Header';
import Footer from '@/components/Footer';


const bitcount = localFont({
  src: [
    {
      path: "../public/fonts/bitcount/Bitcount-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/bitcount/Bitcount-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bitcount",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bitcount.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8">
        {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}
