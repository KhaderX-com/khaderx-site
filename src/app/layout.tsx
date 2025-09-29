import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TransitionProvider from "@/components/TransitionProvider";

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
  description: "Engineering Tomorrow, Today - Aerospace | Aeronautical | Mechanical Engineer & Python Developer delivering cutting-edge solutions in aeroelasticity, innovative software development, and engineering consulting.",
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
    description: "Engineering Tomorrow, Today - Aerospace | Aeronautical | Mechanical Engineer & Python Developer delivering cutting-edge solutions in aeroelasticity, innovative software development, and engineering consulting.",
    images: [
      {
        url: "/images/New-Logo/main-hero-horizontal-1920-1280.jpg",
        width: 2000,
        height: 1333,
        alt: "KhaderX - Aerospace Engineering and Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KhaderX - Engineering Tomorrow",
    description: "Engineering Tomorrow, Today - Aerospace | Aeronautical | Mechanical Engineer & Python Developer delivering cutting-edge solutions in aeroelasticity, innovative software development, and engineering consulting.",
    images: ["/images/New-Logo/main-hero-horizontal-1920-1280.jpg"],
    creator: "@KhaderX",
  },
  icons: {
    icon: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png",
    shortcut: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png",
    apple: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png",
  },
  metadataBase: new URL("https://khaderx.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <TransitionProvider>
          {children}
        </TransitionProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
