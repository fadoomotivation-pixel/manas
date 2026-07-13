import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-noto",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Manas Property | Premium Plots Near Jewar Airport",
  description: "Premium residential plots near Jewar Airport starting at ₹7.5 Lakh. Book your dream plot today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className={`${noto.variable} ${outfit.variable} antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
