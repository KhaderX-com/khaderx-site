import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Orbitron } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TransitionProvider from "@/components/TransitionProvider";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import RoutePreloader from "@/components/RoutePreloader";
import Chatbot from "@/components/chatbot/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Menlo", "Monaco", "Courier New", "monospace"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  preload: true,
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["Impact", "Arial Black", "sans-serif"],
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
    icon: [
      { url: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png", sizes: "32x32", type: "image/png" },
      { url: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png",
    apple: [
      { url: "/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png", sizes: "180x180", type: "image/png" }
    ],
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
        {/* Preload critical hero images for better LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/New-Logo/main-hero-horizontal-1920-1280.jpg"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/New-Logo/main-hero-vertical-1333-2000.jpg"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        {/* Preload favicon for immediate loading */}
        <link
          rel="preload"
          as="image"
          href="/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png"
          fetchPriority="low"
        />
        {/* DNS prefetch for any external resources */}
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${orbitron.variable} antialiased bg-black text-white min-h-screen`}
      >
        <PerformanceMonitor />
        <ServiceWorkerRegister />
        <RoutePreloader />
        <TransitionProvider>
          {children}
        </TransitionProvider>
        <ScrollToTopButton />
        <Chatbot />
      </body>
    </html>
  );
}
