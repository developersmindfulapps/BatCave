import type { Metadata } from "next";
import {
  CoachingHero,
  CoachingPrograms,
  WhatCoachingIncludes,
  WhoIsItFor,
  CoachingExperience,
  CoachingHowItWorks,
  CoachingFinalCTA,
} from "@/components/public/coaching";

export const metadata: Metadata = {
  title: "Cricket Coaching Programs | The Bat Cave",
  description:
    "Professional cricket coaching in Kanispura, Baramulla: BCCI-certified coaching, batting video analysis, technique development, group batches and 1-on-1 personal training.",
};

export default function CoachingPage() {
  return (
    <main className="flex flex-col">
      <CoachingHero />
      <CoachingPrograms />
      <WhatCoachingIncludes />
      <WhoIsItFor />
      <CoachingExperience />
      <CoachingHowItWorks />
      <CoachingFinalCTA />
    </main>
  );
}
