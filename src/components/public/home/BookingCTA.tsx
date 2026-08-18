import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BookingCTA() {
  return (
    <section className="bg-cave-black relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      {/* Background Glow */}
      <div className="from-cave-gold/15 pointer-events-none absolute inset-0 bg-radial via-transparent to-transparent opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
          Step Into The Nets
        </span>

        <h2 className="text-foreground text-4xl leading-[0.95] font-black tracking-tighter uppercase sm:text-6xl md:text-7xl">
          Ready To <span className="punch-out-text italic">Grind?</span>
        </h2>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 sm:text-xl">
          Book your net, dial in your bowling machine drills, and sharpen your
          game.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-cave-gold text-cave-black shadow-cave-gold/20 w-full rounded-full px-12 py-6 text-base font-black tracking-wider uppercase shadow-2xl transition-all hover:scale-105 hover:bg-white sm:w-auto"
          >
            <Link href="/book">🏏 Book A Slot</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full px-8 py-6 text-base font-black tracking-wider uppercase sm:w-auto"
          >
            <Link href="/pricing">View All Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
