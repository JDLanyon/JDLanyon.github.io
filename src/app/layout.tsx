import { Overpass, Overpass_Mono, Doto } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';

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
  title: "JDLanyon - Portfolio",
  description: "made with nextjs and love :>",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${overpass.variable} ${overpass_mono.variable} ${doto.variable}`} suppressHydrationWarning>
      <body className="min-h-screen">

        
        {/* Content */}
        <div className="relative z-10">
          <ThemeProvider defaultTheme="dark" enableSystem={false}>
          {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
