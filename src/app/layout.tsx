import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://derojas.ai"),
  title: "derojas.ai | AI-Driven Innovation in Ophthalmology",
  description:
    "Dr. Joaquin De Rojas builds AI tools for ophthalmology and healthcare. Explore AI Calc, SightFlow, and meet Iris, his AI assistant.",
  openGraph: {
    title: "derojas.ai | AI-Driven Innovation in Ophthalmology",
    description:
      "Dr. Joaquin De Rojas builds AI tools for ophthalmology and healthcare.",
    url: "https://derojas.ai",
    siteName: "derojas.ai",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1363,
        height: 1363,
        alt: "derojas.ai logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "derojas.ai | AI-Driven Innovation in Ophthalmology",
    description:
      "Dr. Joaquin De Rojas builds AI tools for ophthalmology and healthcare.",
    images: ["/logo.png"],
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
