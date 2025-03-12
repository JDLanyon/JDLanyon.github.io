import type { Metadata } from "next";
import { Overpass, Overpass_Mono, Doto } from "next/font/google";

import "./globals.css";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  display: 'swap',
})

const overpass_mono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
  display: 'swap',
})

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "JDLanyon Portfolio",
  description: "I made this with nextjs btw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${overpass.variable} ${overpass_mono.variable} ${doto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
