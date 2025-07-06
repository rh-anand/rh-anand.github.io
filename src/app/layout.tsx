import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../../Geist/webfonts/Geist[wght].woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../GeistMono/webfonts/GeistMono[wght].woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rohan Anand - Software Engineer & Creative Developer",
  description: "Personal website of Rohan Anand, a software engineer passionate about building beautiful, functional, and user-centered digital experiences.",
  keywords: ["software engineer", "web developer", "full-stack developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Rohan Anand" }],
  creator: "Rohan Anand",
  openGraph: {
    title: "Rohan Anand - Software Engineer & Creative Developer",
    description: "Personal website of Rohan Anand, a software engineer passionate about building beautiful, functional, and user-centered digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Anand - Software Engineer & Creative Developer",
    description: "Personal website of Rohan Anand, a software engineer passionate about building beautiful, functional, and user-centered digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
