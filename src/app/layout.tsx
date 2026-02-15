import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeRojas.ai — AI-Driven Innovation in Ophthalmology",
  description:
    "Dr. Joaquin De Rojas builds AI tools for ophthalmology and healthcare. Explore AI Calc, SightFlow, and meet Iris — his AI assistant.",
  openGraph: {
    title: "DeRojas.ai — AI-Driven Innovation in Ophthalmology",
    description:
      "Dr. Joaquin De Rojas builds AI tools for ophthalmology and healthcare.",
    url: "https://derojas.ai",
    siteName: "DeRojas.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
