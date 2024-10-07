import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "./Providers";

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
      <body>
        <Providers>
          <div className="max-w-6xl mx-auto">
            <NavBar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
