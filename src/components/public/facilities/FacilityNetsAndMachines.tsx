import Image from "next/image";
import { Check, ShieldCheck, Zap, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FacilityNetsAndMachines() {
  return (
    <section className="bg-cave-black mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-24">
      {/* 1. Two Independent Nets */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-cave-surface border-cave-line text-cave-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="h-4 w-4" />
            Net 1 &amp; Net 2
          </div>

          <h2 className="text-foreground text-3xl leading-[1.05] font-black tracking-tight uppercase sm:text-5xl">
            2 Independent <span className="punch-out-text">Nets</span>
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            The Bat Cave features two completely separate, independent practice
            lanes. Both nets are fully operational simultaneously, allowing
            individual batters, pairs, or coaching groups to practice with
            complete focus and zero interference.
          </p>

          <ul className="space-y-3 pt-2 text-xs text-gray-200 sm:text-sm">
            <li className="flex items-center gap-2.5">
              <Check className="text-cave-gold h-4 w-4 shrink-0" />
              <span>Two full-length independent practice lanes</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="text-cave-gold h-4 w-4 shrink-0" />
              <span>
                Simultaneous booking availability for Net 1 &amp; Net 2
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="text-cave-gold h-4 w-4 shrink-0" />
              <span>
                Dedicated space for individual, pair, or coaching sessions
              </span>
            </li>
          </ul>
        </div>

        <div className="border-cave-line/80 bg-cave-surface relative aspect-[4/3] overflow-hidden rounded-3xl border">
          <Image
            src="/images/facilities/indoor-nets.svg"
            alt="2 Independent Cricket Nets at The Bat Cave"
            fill
            className="object-cover"
          />
          <div className="from-cave-black/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="bg-cave-black/80 border-cave-line/80 absolute right-4 bottom-4 left-4 rounded-2xl border p-4 backdrop-blur-xs">
            <p className="text-cave-gold text-xs font-bold tracking-wider uppercase">
              Independent Practice Lanes
            </p>
            <p className="text-[11px] text-gray-300">
              Uninterrupted practice slots across Net 1 and Net 2
            </p>
          </div>
        </div>
      </div>

      {/* 2. Dedicated Bowling Machines (Visually Prominent!) */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="border-cave-gold/60 bg-cave-surface shadow-cave-gold/10 relative order-2 aspect-[4/3] overflow-hidden rounded-3xl border-2 shadow-2xl lg:order-1">
          <Image
            src="/images/facilities/bowling-machine.svg"
            alt="2 Dedicated Automated Bowling Machines"
            fill
            className="object-cover"
          />
          <div className="from-cave-black/70 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="bg-cave-gold text-cave-black absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-black uppercase shadow">
            1 Machine Per Net
          </div>
          <div className="bg-cave-black/90 border-cave-gold/40 absolute right-4 bottom-4 left-4 rounded-2xl border p-4 backdrop-blur-xs">
            <p className="text-cave-gold text-xs font-bold tracking-wider uppercase">
              Automated Precision Machines
            </p>
            <p className="text-[11px] text-gray-300">
              Dedicated bowling machine technology in both nets
            </p>
          </div>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <div className="bg-cave-surface border-cave-line text-cave-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase">
            <Zap className="h-4 w-4" />
            Key Facility Differentiator
          </div>

          <h2 className="text-foreground text-3xl leading-[1.05] font-black tracking-tight uppercase sm:text-5xl">
            2 Dedicated <span className="punch-out-text">Bowling Machines</span>
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            Every net at The Bat Cave is equipped with its own dedicated
            automated bowling machine. You never have to wait or share delivery
            equipment between lanes — allowing high-repetition stroke practice
            and controlled drilling.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            <Card className="bg-cave-surface border-cave-line space-y-1 rounded-2xl p-4">
              <h3 className="text-foreground text-sm font-extrabold uppercase">
                Speed &amp; Pace Control
              </h3>
              <p className="text-muted-foreground text-xs">
                Adjustable delivery speeds suited for beginners to experienced
                batters.
              </p>
            </Card>
            <Card className="bg-cave-surface border-cave-line space-y-1 rounded-2xl p-4">
              <h3 className="text-foreground text-sm font-extrabold uppercase">
                Line &amp; Length Variety
              </h3>
              <p className="text-muted-foreground text-xs">
                Dial in specific deliveries to target driving, cutting, or
                defending.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* 3. Indoor Practice Environment */}
      <Card className="bg-cave-surface border-cave-line space-y-6 rounded-3xl p-8 sm:p-12">
        <div className="border-cave-line/60 flex flex-col justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <span className="text-cave-gold block text-xs font-bold tracking-widest uppercase">
                Indoor Practice
              </span>
              <h3 className="text-foreground text-2xl font-black uppercase sm:text-3xl">
                Indoor Cricket Practice
              </h3>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          The Bat Cave provides a dedicated indoor cricket training facility in
          Kanispura, Baramulla. Designed exclusively for cricket net practice
          and skill coaching, the indoor setting allows players to focus
          entirely on technique, ball tracking, and stroke execution.
        </p>

        <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
          <div className="bg-cave-elevated border-cave-line/60 space-y-1 rounded-2xl border p-4">
            <p className="text-cave-gold text-xs font-bold uppercase">
              Time-Based Practice
            </p>
            <p className="text-muted-foreground text-xs">
              Book 30-minute or 1-hour practice slots.
            </p>
          </div>
          <div className="bg-cave-elevated border-cave-line/60 space-y-1 rounded-2xl border p-4">
            <p className="text-cave-gold text-xs font-bold uppercase">
              Overs-Based Packages
            </p>
            <p className="text-muted-foreground text-xs">
              Practice by exact ball delivery counts.
            </p>
          </div>
          <div className="bg-cave-elevated border-cave-line/60 space-y-1 rounded-2xl border p-4">
            <p className="text-cave-gold text-xs font-bold uppercase">
              Monthly Plans
            </p>
            <p className="text-muted-foreground text-xs">
              Structured daily training allocations.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
