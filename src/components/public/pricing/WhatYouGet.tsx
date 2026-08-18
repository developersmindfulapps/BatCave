import {
  Award,
  ShieldCheck,
  Zap,
  TrendingUp,
  Video,
  Lock,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "BCCI Certified Coach",
    description:
      "Learn from professionally qualified coaches with proven coaching pedigrees.",
    icon: Award,
  },
  {
    title: "Premium Indoor Turf",
    description:
      "High-density synthetic turf replicates real pitch bounce and true roll.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Bowling Machines",
    description:
      "Precision speed, line, length, and swing automated delivery controls.",
    icon: Zap,
  },
  {
    title: "Technique Development",
    description:
      "Tailored drills to refine backfoot defense, drives, cuts, and pulls.",
    icon: TrendingUp,
  },
  {
    title: "Batting Analysis",
    description:
      "Video review of bat speed, head position, and trigger movement.",
    icon: Video,
  },
  {
    title: "Safe Indoor Practice",
    description:
      "Heavy-duty netting and controlled, climate-protected indoor facility.",
    icon: Lock,
  },
  {
    title: "All Age Groups",
    description:
      "Beginner juniors, club players, and seasoned cricketers welcome.",
    icon: Users,
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-t px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Rate Card Standards
          </span>
          <h2 className="text-foreground text-3xl leading-tight font-black tracking-tight uppercase sm:text-5xl">
            What You Get At <span className="punch-out-text">The Bat Cave</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Everything included in your training experience at our Kanispura,
            Baramulla facility.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Card
                key={i}
                className="bg-cave-elevated/80 border-cave-line hover:border-cave-gold/40 space-y-4 rounded-2xl p-6 transition-colors"
              >
                <div className="bg-cave-black border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-foreground text-base font-extrabold uppercase">
                    {feat.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {feat.description}
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
