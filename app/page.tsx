import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import VideoSection from "@/components/VideoSection";
import BeforeAfter from "@/components/BeforeAfter";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import MidwifeSection from "@/components/MidwifeSection";
import JourneySection from "@/components/JourneySection";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sprout-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureStrip />
        <VideoSection />
        <BeforeAfter />
        <FeaturesSection />
        <AISection />
        <MidwifeSection />
        <JourneySection />
        <ScreenshotGallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
