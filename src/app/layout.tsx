import type { Metadata } from "next";
import { Inter, Playwrite_NZ } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const playwrite = Playwrite_NZ({
  variable: "--font-playwrite",
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Papertrail",
  description:
    "Papertrail is a modern blogging platform for publishing articles, sharing ideas, and exploring thoughtful stories on technology, learning, and personal growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playwrite.variable}  antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
