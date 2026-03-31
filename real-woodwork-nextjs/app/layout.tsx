import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "REAL WOODWORK PTY LTD - Expert Carpentry & Woodwork Services",
  description: "Professional carpentry services in Ballito, KwaZulu-Natal. Specializing in decking, pergolas, custom kitchens, staircases, and quality woodwork.",
  keywords: "carpentry, woodwork, decking, pergolas, custom kitchens, Ballito, KwaZulu-Natal, South Africa",
  authors: [{ name: "REAL WOODWORK PTY LTD" }],
  openGraph: {
    title: "REAL WOODWORK PTY LTD - Expert Carpentry Services",
    description: "Professional carpentry services in Ballito, KwaZulu-Natal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
