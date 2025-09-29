import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PageTransition from '@/components/PageTransition';
import type { Metadata } from "next";
import { lazy, Suspense } from 'react';

// Lazy load non-critical components
const ProfessionalCards = lazy(() => import('@/components/ProfessionalCards'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading components for better UX
const ComponentLoader = () => (
  <div className="w-full h-32 bg-gradient-to-r from-gray-900 to-black animate-pulse rounded-lg" />
);

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
        <Suspense fallback={<ComponentLoader />}>
          <ProfessionalCards />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Footer />
        </Suspense>
      </div>
    </PageTransition>
  );
}
