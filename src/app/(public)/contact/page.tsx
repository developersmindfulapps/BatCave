import type { Metadata } from "next";
import {
  ContactHero,
  LocationSection,
  ContactDetails,
  ContactQuickLinks,
  ContactFinalCTA,
} from "@/components/public/contact";

export const metadata: Metadata = {
  title: "Contact & Location | The Bat Cave",
  description:
    "Find and contact The Bat Cave in Kanispura, Baramulla: directions, phone inquiries, WhatsApp support, and quick access to booking.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <ContactHero />
      <LocationSection />
      <ContactDetails />
      <ContactQuickLinks />
      <ContactFinalCTA />
    </main>
  );
}
