import type { Metadata } from "next";
import {
  PricingHero,
  SingleSessions,
  OversPackages,
  MonthlyTimePlans,
  MonthlyOversPasses,
  CoachingPricing,
  WhatYouGet,
  GoodToKnow,
  PricingBookingCTA,
} from "@/components/public/pricing";

export const metadata: Metadata = {
  title: "Pricing & Rate Card | The Bat Cave",
  description:
    "Official rate card for The Bat Cave: single bowling machine sessions, overs claim packages, monthly time plans, overs passes, and cricket coaching in Kanispura, Baramulla.",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col">
      <PricingHero />
      <SingleSessions />
      <OversPackages />
      <MonthlyTimePlans />
      <MonthlyOversPasses />
      <CoachingPricing />
      <WhatYouGet />
      <GoodToKnow />
      <PricingBookingCTA />
    </main>
  );
}
