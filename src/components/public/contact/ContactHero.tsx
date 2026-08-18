import { Badge } from "@/components/ui/badge";

export function ContactHero() {
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
            Kanispura, Baramulla
          </Badge>
        </div>

        <h1 className="text-foreground text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
          Find The <span className="punch-out-text italic">Bat Cave.</span>
        </h1>

        <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed sm:text-lg">
          Have questions, need directions, or want to get in touch? We are here
          to help.
        </p>
      </div>
    </section>
  );
}
