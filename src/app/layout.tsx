import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrackDots — All-in-One Employee Monitoring & Productivity Platform",
  description:
    "TrackDots helps modern teams boost productivity, improve accountability, and achieve more — all with complete transparency and trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0b0f19]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
