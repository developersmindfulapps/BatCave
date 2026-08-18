import Link from "next/link";
import { Check, Users, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CoachingPreview() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-y px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Structured Training
          </span>
          <h2 className="text-foreground text-3xl leading-tight font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            Take Your Game To The{" "}
            <span className="punch-out-text">Next Level</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Professional guidance, technique correction, and intensive bowling
            machine drills.
          </p>
        </div>

        {/* 2 Coaching Packages Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Group Coaching Card */}
          <Card className="bg-cave-elevated border-cave-line hover:border-cave-gold/40 flex flex-col justify-between space-y-6 rounded-3xl p-8 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  Monthly Program
                </span>
                <div className="bg-cave-black border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                  <Users className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  Group Coaching
                </h3>
                <div className="mt-3">
                  <span className="text-foreground text-4xl font-black sm:text-5xl">
                    ₹5,000
                  </span>
                  <span className="text-muted-foreground ml-2 text-xs font-bold uppercase">
                    / Month
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 sm:text-sm">
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Small batch group practice sessions</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Batting fundamentals &amp; footwork drills</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Scheduled weekly net training</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Match scenario simulations</span>
                </li>
              </ul>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
            >
              <Link href="/coaching">Learn About Group Coaching</Link>
            </Button>
          </Card>

          {/* Personal Coaching Card */}
          <Card className="bg-cave-elevated border-cave-gold shadow-cave-gold/10 flex flex-col justify-between space-y-6 rounded-3xl border-2 p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-cave-gold text-xs font-bold tracking-widest uppercase">
                  1-on-1 Dedicated
                </span>
                <div className="bg-cave-gold/10 border-cave-gold/40 text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  Personal Coaching
                </h3>
                <div className="mt-3">
                  <span className="text-foreground text-4xl font-black sm:text-5xl">
                    ₹10,000
                  </span>
                  <span className="text-muted-foreground ml-2 text-xs font-bold uppercase">
                    / Month
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 sm:text-sm">
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Dedicated 1-on-1 personal coach attention</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Personalized video technique breakdown</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Custom bowling machine drill sequences</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="text-cave-gold h-4 w-4 shrink-0" />
                  <span>Tournament and match readiness prep</span>
                </li>
              </ul>
            </div>

            <Button
              asChild
              className="bg-cave-gold text-cave-black w-full rounded-full py-5 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
            >
              <Link href="/coaching">Explore Personal Coaching</Link>
            </Button>
          </Card>
        </div>

        {/* Direct Link */}
        <div className="pt-2 text-center">
          <Button
            asChild
            variant="outline"
            className="border-cave-line hover:border-cave-gold rounded-full px-8 py-5 text-xs font-bold tracking-wider uppercase"
          >
            <Link href="/coaching">View All Coaching Details →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
