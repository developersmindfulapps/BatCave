import type { Metadata } from "next";
import {
  FacilitiesHero,
  BatCaveExperience,
  FacilityNetsAndMachines,
  FacilityCoachingSection,
  FacilityDetailedGallery,
  FacilitiesFinalCTA,
} from "@/components/public/facilities";

export const metadata: Metadata = {
  title: "Indoor Cricket Facility & Nets | The Bat Cave",
  description:
    "Explore The Bat Cave facility in Kanispura, Baramulla: 2 independent cricket practice nets, 2 dedicated automated bowling machines, indoor turf and coaching.",
};

export default function FacilitiesPage() {
  return (
    <main className="flex flex-col">
      <FacilitiesHero />
      <BatCaveExperience />
      <FacilityNetsAndMachines />
      <FacilityCoachingSection />
      <FacilityDetailedGallery />
      <FacilitiesFinalCTA />
    </main>
  );
}
