import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KhaderX - Engineering Tomorrow",
  description: "Welcome to KhaderX - Where aerospace engineering meets innovative software development. Discover cutting-edge solutions in aeroelasticity, Python development, and engineering consulting.",
  openGraph: {
    title: "KhaderX - Engineering Tomorrow",
    description: "Welcome to KhaderX - Where aerospace engineering meets innovative software development. Discover cutting-edge solutions in aeroelasticity, Python development, and engineering consulting.",
    url: "https://khaderx.com",
  },
  twitter: {
    title: "KhaderX - Engineering Tomorrow",
    description: "Welcome to KhaderX - Where aerospace engineering meets innovative software development. Discover cutting-edge solutions in aeroelasticity, Python development, and engineering consulting.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
