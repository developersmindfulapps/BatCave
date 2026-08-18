import { MapPin, Navigation, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { businessConfig } from "@/config/business";

export function LocationSection() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessConfig.name} ${businessConfig.location.fullAddress}`
  )}`;

  return (
    <section
      id="contact"
      className="bg-cave-surface border-cave-line/80 border-t px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Find Us
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            Location &amp; <span className="punch-out-text">Contact</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Conveniently situated in Kanispura on the main Baramulla highway
            corridor.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Address Card */}
          <Card className="bg-cave-elevated border-cave-line flex flex-col justify-between space-y-6 rounded-3xl p-8">
            <div className="space-y-4">
              <div className="bg-cave-gold/10 border-cave-gold/30 text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                <MapPin className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  The Bat Cave
                </h3>
                <address className="mt-2 space-y-1 text-sm leading-relaxed text-gray-300 not-italic">
                  <p className="font-semibold text-white">
                    {businessConfig.location.street}
                  </p>
                  <p>
                    {businessConfig.location.city},{" "}
                    {businessConfig.location.state}
                  </p>
                  <p>PIN: {businessConfig.location.postalCode}, India</p>
                </address>
              </div>

              <div className="text-muted-foreground pt-2 text-xs">
                <p>• 2 Independent High-Performance Cricket Nets</p>
                <p>• Automated Bowling Machines equipped in both nets</p>
              </div>
            </div>

            <Button
              asChild
              className="bg-cave-gold text-cave-black w-full rounded-full py-5 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
            >
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </Card>

          {/* Contact Card */}
          <Card className="bg-cave-elevated border-cave-line flex flex-col justify-between space-y-6 rounded-3xl p-8">
            <div className="space-y-4">
              <div className="bg-cave-gold/10 border-cave-gold/30 text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                <Phone className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Have questions about coaching batches, monthly passes, or net
                  availability? Reach out directly.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <p>
                  <span className="text-muted-foreground font-bold">
                    Email:
                  </span>{" "}
                  {businessConfig.contact.supportEmail}
                </p>
                <p>
                  <span className="text-muted-foreground font-bold">
                    Location:
                  </span>{" "}
                  Kanispura, Baramulla
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-cave-line hover:border-cave-gold hover:text-cave-gold flex w-full items-center justify-center gap-2 rounded-full py-5 text-xs font-black tracking-wider uppercase"
            >
              <a
                href={`https://wa.me/919999999999`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="text-cave-gold h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
