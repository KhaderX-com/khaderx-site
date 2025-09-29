import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfessionalCards from '@/components/ProfessionalCards';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KhaderX - Engineering Tomorrow",
  description: "Engineering Tomorrow, Today - Welcome to KhaderX where aerospace | aeronautical | mechanical engineering meets innovative software development. Discover cutting-edge solutions that shape the future.",
  openGraph: {
    title: "KhaderX - Engineering Tomorrow",
    description: "Engineering Tomorrow, Today - Welcome to KhaderX where aerospace | aeronautical | mechanical engineering meets innovative software development. Discover cutting-edge solutions that shape the future.",
    url: "https://khaderx.com",
  },
  twitter: {
    title: "KhaderX - Engineering Tomorrow",
    description: "Engineering Tomorrow, Today - Welcome to KhaderX where aerospace | aeronautical | mechanical engineering meets innovative software development. Discover cutting-edge solutions that shape the future.",
  },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ProfessionalCards />
        <Footer />
      </div>
    </PageTransition>
  );
}
