import { Badge } from "@/components/ui/badge";

export function BookingHero() {
  return (
    <section className="bg-cave-black border-cave-line/60 relative overflow-hidden border-b px-4 pt-28 pb-8 text-center sm:px-6 sm:pb-10">
      {/* Subtle radial background glow */}
      <div className="from-cave-gold/10 pointer-events-none absolute inset-0 bg-radial via-transparent to-transparent opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-3">
        <div className="flex justify-center">
          <Badge
            variant="goldOutline"
            className="px-3 py-0.5 text-[11px] font-bold tracking-[0.25em] uppercase"
          >
            Online Net Reservation
          </Badge>
        </div>

        <h1 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
          Book Your <span className="punch-out-text italic">Slot.</span>
        </h1>

        <p className="text-muted-foreground mx-auto max-w-lg text-xs sm:text-sm">
          Choose your session, date, time, and available net at The Bat Cave.
        </p>
      </div>
    </section>
  );
}
