import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FacilitiesHero() {
  return (
    <section className="bg-cave-black border-cave-line/60 relative overflow-hidden border-b px-4 pt-32 pb-12 text-center sm:px-6 sm:pb-16">
      {/* Subtle background glow */}
      <div className="from-cave-gold/10 pointer-events-none absolute inset-0 bg-radial via-transparent to-transparent opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-6">
        <div className="flex justify-center">
          <Badge
            variant="goldOutline"
            className="px-3.5 py-1 text-xs font-bold tracking-[0.25em] uppercase"
          >
            The Bat Cave • Kanispura, Baramulla
          </Badge>
        </div>

        <h1 className="text-foreground text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
          Built For The <span className="punch-out-text italic">Grind.</span>
        </h1>

        <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed sm:text-lg">
          A premium indoor cricket practice facility in Kanispura, Baramulla.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            asChild
            size="lg"
            className="bg-cave-gold text-cave-black shadow-cave-gold/10 rounded-full px-8 py-6 text-sm font-black tracking-wider uppercase shadow-xl transition-all hover:scale-105 hover:bg-white"
          >
            <Link href="/book">🏏 Book A Slot</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cave-line hover:border-cave-gold hover:text-cave-gold rounded-full px-8 py-6 text-sm font-black tracking-wider uppercase"
          >
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
