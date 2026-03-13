import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AAVORide – Coming Soon | Smart Car Rentals",
  description: "Smart car rentals for city and outstation travel. Coming soon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
