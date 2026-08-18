import { Award, Video, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const coachingFeatures = [
  {
    title: "BCCI Certified Coach",
    description:
      "Learn from professionally qualified coaches with structured training methodology.",
    icon: Award,
  },
  {
    title: "Batting Analysis",
    description:
      "Video review of batting technique, stance, and head position.",
    icon: Video,
  },
  {
    title: "Technique Development",
    description:
      "Focused training to build solid fundamentals and shot execution.",
    icon: TrendingUp,
  },
  {
    title: "Coaching For All Age Groups",
    description:
      "Structured practice programs for juniors, beginners, and senior players.",
    icon: Users,
  },
];

export function WhatCoachingIncludes() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-y px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Core Curriculum
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Build Your <span className="punch-out-text">Game</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Key training pillars included across our group clinics and 1-on-1
            coaching sessions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="bg-cave-elevated/80 border-cave-line hover:border-cave-gold/40 space-y-4 rounded-3xl p-6 transition-colors sm:p-8"
              >
                <div className="bg-cave-black border-cave-line text-cave-gold flex h-12 w-12 items-center justify-center rounded-full border">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground text-lg font-extrabold uppercase">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {item.description}
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
