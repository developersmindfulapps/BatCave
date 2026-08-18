import { Phone, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { businessConfig } from "@/config/business";

export function ContactDetails() {
  const { contact } = businessConfig;

  return (
    <section className="bg-cave-black border-cave-line/80 border-b px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Direct Support
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Have <span className="punch-out-text">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Reach out directly for slot queries, coaching registrations, or
            facility information.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Call Us */}
          <Card className="bg-cave-surface border-cave-line hover:border-cave-gold/40 flex flex-col justify-between space-y-6 rounded-3xl p-6 transition-colors sm:p-8">
            <div className="space-y-4">
              <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground text-lg font-black uppercase">
                  Call Us
                </h3>
                <p className="text-muted-foreground text-xs">
                  Direct phone inquiry for slots and bookings.
                </p>
                <p className="text-foreground pt-1 text-sm font-bold">
                  {contact.phone}
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
            >
              <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>Call Now</a>
            </Button>
          </Card>

          {/* Card 2: WhatsApp Us (Visual CTA) */}
          <Card className="bg-cave-surface border-cave-gold/60 shadow-cave-gold/10 flex flex-col justify-between space-y-6 rounded-3xl border-2 p-6 shadow-xl sm:p-8">
            <div className="space-y-4">
              <div className="bg-cave-gold/10 border-cave-gold/30 text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground text-lg font-black uppercase">
                  WhatsApp Us
                </h3>
                <p className="text-muted-foreground text-xs">
                  Quick chat for questions, slots, and updates.
                </p>
                <p className="text-cave-gold pt-1 text-sm font-bold">
                  {contact.whatsapp}
                </p>
              </div>
            </div>

            <Button
              asChild
              className="bg-cave-gold text-cave-black w-full rounded-full py-5 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
            >
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </Card>

          {/* Card 3: Email Support */}
          <Card className="bg-cave-surface border-cave-line hover:border-cave-gold/40 flex flex-col justify-between space-y-6 rounded-3xl p-6 transition-colors sm:p-8">
            <div className="space-y-4">
              <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground text-lg font-black uppercase">
                  Email
                </h3>
                <p className="text-muted-foreground text-xs">
                  Inquiries regarding tournaments, groups, and coaching.
                </p>
                <p className="text-foreground pt-1 text-sm font-bold">
                  {contact.supportEmail}
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
            >
              <a href={`mailto:${contact.supportEmail}`}>Send Email</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
