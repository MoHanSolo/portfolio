import "./globals.css";
import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Brendan Mohan - Full Stack Developer",
  description: "My personal portfolio built with Next.js, Tailwind & Typescript.",
  keywords: ['portfolio', 'next.js', 'react', 'tailwind', 'full-stack'],
  authors: [{ name: 'Brendan Mohan', url: 'https://brendanmohan.tech' }],
  openGraph: {
    title: 'Brendan Mohan - Full Stack Developer',
    description: 'Check out my projects and blog built with the latest web tech!',
    url: 'https://brendanmohan.tech',
    siteName: 'BrendanMohan.tech',
    images: [
      {
        url: 'https://brendanmohan.tech/og-image.JPG',
        width: 1200,
        height: 630,
        alt: 'Brendan Mohan Portfolio OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
