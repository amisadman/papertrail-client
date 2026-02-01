import type { Metadata } from "next";
import { Caveat, Inter, Playwrite_NZ } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/providers/themeProvider";

const playwrite = Playwrite_NZ({
  variable: "--font-playwrite",
  weight: "400",
});
const caveat = Caveat({
  variable: "--caveat",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${caveat.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
