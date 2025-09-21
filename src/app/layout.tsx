import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KhaderX - Engineering Tomorrow",
    template: "%s | KhaderX"
  },
  description: "Aerospace Engineer & Python Developer specializing in engineering solutions, aeroelasticity tools, and innovative software development. Engineering Tomorrow with cutting-edge technology.",
  keywords: ["aerospace engineering", "python development", "aeroelasticity", "engineering consulting", "software development", "technical solutions"],
  authors: [{ name: "Khader Abueltayef", url: "https://khaderx.com" }],
  creator: "KhaderX",
  publisher: "KhaderX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khaderx.com",
    siteName: "KhaderX",
    title: "KhaderX - Engineering Tomorrow",
    description: "Aerospace Engineer & Python Developer specializing in engineering solutions, aeroelasticity tools, and innovative software development.",
    images: [
      {
        url: "/images/hero/hero-airplane-cyan-high-quality-4.png",
        width: 1200,
        height: 630,
        alt: "KhaderX - Aerospace Engineering and Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KhaderX - Engineering Tomorrow",
    description: "Aerospace Engineer & Python Developer specializing in engineering solutions, aeroelasticity tools, and innovative software development.",
    images: ["/images/hero/hero-airplane-cyan-high-quality-4.png"],
    creator: "@KhaderX",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://khaderx.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
