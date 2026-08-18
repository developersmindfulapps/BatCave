import { Target, Sparkles, Trophy, Crosshair } from "lucide-react";
import { Card } from "@/components/ui/card";

const audienceGroups = [
  {
    title: "Beginners",
    description:
      "Players learning foundational batting basics, grip, stance, and balance.",
    icon: Sparkles,
  },
  {
    title: "Young Players",
    description:
      "Age-appropriate coaching drills to build confidence and love for the game.",
    icon: Trophy,
  },
  {
    title: "Developing Players",
    description: "Structured net coaching sessions for emerging cricketers.",
    icon: Target,
  },
  {
    title: "Technique Refinement",
    description:
      "Cricketers looking to correct specific technical flaws and improve consistency.",
    icon: Crosshair,
  },
];

export function WhoIsItFor() {
  return (
    <section className="bg-cave-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Player Levels
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Who Is It <span className="punch-out-text">For?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Our coaching programs accommodate players of varying age groups and
            experience levels.
          </p>
        </div>

        {/* 4 Group Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Card
                key={idx}
                className="bg-cave-surface border-cave-line hover:border-cave-gold/40 space-y-4 rounded-3xl p-6 transition-colors sm:p-8"
              >
                <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-foreground text-lg font-extrabold uppercase">
                    {group.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {group.description}
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
