import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { businessConfig } from "@/config/business";

export function LocationSection() {
  const { location } = businessConfig;

  // Placeholder maps search query using verified address
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.street}, ${location.city}, ${location.state} ${location.postalCode}`
  )}`;

  return (
    <section className="bg-cave-surface border-cave-line/80 border-b px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Facility Address
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Visit <span className="punch-out-text">Us</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Located conveniently on the main corridor in Kanispura, Baramulla.
          </p>
        </div>

        {/* Location Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Address Details Card */}
          <Card className="bg-cave-elevated border-cave-line flex flex-col justify-between space-y-8 rounded-3xl p-8 sm:p-10">
            <div className="space-y-6">
              <div className="bg-cave-black border-cave-line text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                <MapPin className="h-6 w-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-foreground text-2xl font-black uppercase">
                  The Bat Cave
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {location.street}
                  <br />
                  {location.city}, {location.state}
                  <br />
                  India — PIN: {location.postalCode}
                </p>
              </div>

              <p className="text-muted-foreground border-cave-line/60 border-t pt-2 text-xs leading-relaxed">
                Independent indoor cricket nets and bowling machine facility
                with on-site parking and player lounge.
              </p>
            </div>

            <div>
              <Button
                asChild
                size="lg"
                className="bg-cave-gold text-cave-black w-full rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
              >
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </Card>

          {/* Map Visual / Stylized Location Graphic */}
          <div className="bg-cave-black border-cave-line relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border p-8 sm:p-10">
            {/* Stylized dark grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E2D27_1px,transparent_1px),linear-gradient(to_bottom,#2E2D27_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
            <div className="from-cave-gold/10 via-cave-black/80 to-cave-black absolute inset-0 bg-radial" />

            <div className="relative z-10 space-y-2">
              <span className="text-cave-gold text-[11px] font-black tracking-widest uppercase">
                Interactive Map Visual
              </span>
              <h3 className="text-foreground text-xl font-bold uppercase">
                Baramulla, Jammu &amp; Kashmir
              </h3>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center space-y-3 py-8 text-center">
              <div className="bg-cave-gold text-cave-black shadow-cave-gold/20 flex h-14 w-14 animate-pulse items-center justify-center rounded-full shadow-xl">
                <MapPin className="h-7 w-7" />
              </div>
              <p className="text-xs font-bold tracking-wider text-gray-200 uppercase">
                The Bat Cave Facility Pin
              </p>
              <p className="text-muted-foreground text-[11px]">
                Kanispura • Baramulla Highway
              </p>
            </div>

            <div className="text-muted-foreground relative z-10 text-center text-[11px]">
              Click &quot;Get Directions&quot; to open exact navigation in
              Google Maps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
