import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aung Myo Aye's Portfolio",
  description: "Make with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth 	snap-mandatory">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
