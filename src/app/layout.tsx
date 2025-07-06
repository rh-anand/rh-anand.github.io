import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohan Anand",
  description: "Personal website of Rohan Anand",
  authors: [{ name: "Rohan Anand" }],
  creator: "Rohan Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
