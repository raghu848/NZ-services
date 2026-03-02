"use client";

import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import ReviewsSlider from "@/components/home/ReviewsSlider";
import LocationsPreview from "@/components/home/LocationsPreview";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col bg-dark overflow-x-hidden">
      <HeroSection />
      <TrustStrip />
      <ServicesPreview />

      <CtaBanner
        title="ENGINEERED FOR PERFORMANCE"
        subtitle="Experience Auckland's most advanced mechanical diagnostics and precision repairs."
        variant="red"
      />

      <ReviewsSlider />
      <LocationsPreview />

      <CtaBanner
        title="READY TO OPTIMIZE YOUR MACHINE?"
        subtitle="Our elite technicians are standing by. Secure your performance slot in under 60 seconds."
        variant="dark"
      />
    </div>
  );
}
