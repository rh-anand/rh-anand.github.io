import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
