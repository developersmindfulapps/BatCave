import type { Metadata } from "next";
import { BookingHero, BookingFlow } from "@/components/public/booking";

export const metadata: Metadata = {
  title: "Book A Cricket Net Slot | The Bat Cave",
  description:
    "Reserve indoor cricket practice nets, bowling machine sessions, overs packages, and coaching clinics at The Bat Cave, Kanispura, Baramulla.",
};

export default function BookPage() {
  return (
    <main className="flex flex-col">
      <BookingHero />
      <BookingFlow />
    </main>
  );
}
