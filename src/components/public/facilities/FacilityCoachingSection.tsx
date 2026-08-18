import Link from "next/link";
import { Award, Video, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const coachingFeatures = [
  {
    title: "BCCI Certified Coach",
    description: "Guidance from professionally qualified coaching mentors.",
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
    title: "All Age Groups",
    description:
      "Structured coaching for juniors, beginners, and senior players.",
    icon: Users,
  },
];

export function FacilityCoachingSection() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-y px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
              Expert Mentorship
            </span>
            <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
              Coaching At <span className="punch-out-text">The Bat Cave</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
              In addition to independent practice nets, The Bat Cave offers
              structured Group Coaching and 1-on-1 Personal Coaching clinics.
            </p>
          </div>

          <Button
            asChild
            className="bg-cave-gold text-cave-black rounded-full px-8 py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
          >
            <Link href="/coaching">Explore Coaching Programs →</Link>
          </Button>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingFeatures.map((feat, i) => {
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

        {/* Programs Preview Pill Strip */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-cave-black border-cave-line flex items-center justify-between rounded-2xl border p-5">
            <div>
              <p className="text-muted-foreground text-xs font-bold uppercase">
                Group Program
              </p>
              <h3 className="text-foreground text-lg font-black uppercase">
                Group Coaching
              </h3>
            </div>
            <span className="text-cave-gold text-sm font-black">
              ₹5,000 / month
            </span>
          </div>

          <div className="bg-cave-black border-cave-line flex items-center justify-between rounded-2xl border p-5">
            <div>
              <p className="text-muted-foreground text-xs font-bold uppercase">
                Dedicated 1-on-1
              </p>
              <h3 className="text-foreground text-lg font-black uppercase">
                Personal Coaching
              </h3>
            </div>
            <span className="text-cave-gold text-sm font-black">
              ₹10,000 / month
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
