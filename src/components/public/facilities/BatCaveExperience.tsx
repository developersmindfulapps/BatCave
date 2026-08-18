import { Zap, Shield, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    title: "Dedicated Indoor Lanes",
    description:
      "Two independent practice lanes allowing focused, uninterrupted batting drills.",
    icon: Shield,
  },
  {
    title: "Automated Bowling Machines",
    description:
      "Each net is equipped with its own dedicated machine for repeatable ball delivery sequences.",
    icon: Zap,
  },
  {
    title: "Structured Cricket Training",
    description:
      "Expert coaching guidance and structured practice routines for all age groups.",
    icon: Target,
  },
];

export function BatCaveExperience() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-b px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Facility Vision
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            More Than <span className="punch-out-text">Just A Net.</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            The Bat Cave provides a dedicated indoor environment in Kanispura,
            Baramulla for batting practice, bowling-machine sessions, and
            cricket coaching.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                className="bg-cave-elevated border-cave-line hover:border-cave-gold/40 space-y-4 rounded-3xl p-6 transition-colors sm:p-8"
              >
                <div className="bg-cave-black border-cave-line text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground text-lg font-extrabold uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
