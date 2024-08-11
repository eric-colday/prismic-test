import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: '400',
  preload: false,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise",
    description:
      settings.data.meta_description || "Flowrise is the relaxing app for you.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(poppins.variable, inter.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
