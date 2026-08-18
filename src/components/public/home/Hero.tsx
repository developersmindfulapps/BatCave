import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { businessConfig } from "@/config/business";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:min-h-[920px]">
      {/* Background Graphic & Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.svg"
          alt="The Bat Cave Indoor Cricket Facility"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="from-cave-black via-cave-black/60 to-cave-black/40 absolute inset-0 bg-gradient-to-t" />
        <div className="from-cave-gold/10 absolute inset-0 bg-radial via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 mx-auto mt-4 max-w-5xl space-y-8 text-center sm:mt-8">
        {/* Location Badge */}
        <div className="flex items-center justify-center gap-3">
          <span className="bg-cave-gold/60 h-[1px] w-8 sm:w-12" />
          <Badge
            variant="goldOutline"
            className="px-3.5 py-1 text-xs font-bold tracking-[0.25em] uppercase"
          >
            {businessConfig.location.city}, {businessConfig.location.state}
          </Badge>
          <span className="bg-cave-gold/60 h-[1px] w-8 sm:w-12" />
        </div>

        {/* Main Display Headline */}
        <h1 className="text-foreground text-4xl leading-[0.95] font-black tracking-tighter uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          The Bat Cave:
          <br />
          Your Place To <span className="punch-out-text italic">Grind.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed font-normal text-gray-300 sm:text-lg md:text-xl">
          {businessConfig.tagline} in Baramulla.
          <br className="hidden sm:inline" />
          <span className="text-cave-gold font-semibold">
            {" "}
            2 Independent Nets
          </span>{" "}
          •{" "}
          <span className="text-cave-gold font-semibold">
            2 Bowling Machines
          </span>{" "}
          • <span className="text-gray-200">Indoor Turf Practice</span>
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-cave-gold text-cave-black shadow-cave-gold/10 w-full rounded-full px-10 py-6 text-base font-black tracking-wider uppercase shadow-xl transition-all hover:scale-105 hover:bg-white sm:w-auto"
          >
            <Link href="/book">Book A Slot</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cave-line hover:border-cave-gold hover:bg-cave-elevated hover:text-cave-gold w-full rounded-full px-10 py-6 text-base font-black tracking-wider uppercase transition-all sm:w-auto"
          >
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>

        {/* Facility Highlights Quick Strip */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 pt-8 text-left sm:grid-cols-4 sm:gap-4 sm:pt-12">
          <div className="bg-cave-surface/80 border-cave-line/80 rounded-xl border p-3.5 backdrop-blur-xs sm:p-4">
            <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Facility
            </p>
            <p className="text-foreground mt-0.5 text-sm font-extrabold sm:text-base">
              2 Nets
            </p>
          </div>
          <div className="bg-cave-surface/80 border-cave-line/80 rounded-xl border p-3.5 backdrop-blur-xs sm:p-4">
            <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Machines
            </p>
            <p className="text-foreground mt-0.5 text-sm font-extrabold sm:text-base">
              1 Per Net
            </p>
          </div>
          <div className="bg-cave-surface/80 border-cave-line/80 rounded-xl border p-3.5 backdrop-blur-xs sm:p-4">
            <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Booking
            </p>
            <p className="text-foreground mt-0.5 text-sm font-extrabold sm:text-base">
              Time &amp; Overs
            </p>
          </div>
          <div className="bg-cave-surface/80 border-cave-line/80 rounded-xl border p-3.5 backdrop-blur-xs sm:p-4">
            <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Training
            </p>
            <p className="text-foreground mt-0.5 text-sm font-extrabold sm:text-base">
              Coaching
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
