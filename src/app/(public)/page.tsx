import {
  Hero,
  MarqueeBanner,
  FacilityHighlights,
  HowItWorks,
  PricingPreview,
  WhyBatCave,
  FacilityGallery,
  CoachingPreview,
  BookingCTA,
  LocationSection,
} from "@/components/public/home";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <MarqueeBanner />
      <FacilityHighlights />
      <HowItWorks />
      <PricingPreview />
      <WhyBatCave />
      <FacilityGallery />
      <CoachingPreview />
      <BookingCTA />
      <LocationSection />
    </main>
  );
}
