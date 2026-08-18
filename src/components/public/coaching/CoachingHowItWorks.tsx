import { LayoutGrid, PhoneCall, Dumbbell, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Choose Your Program",
    description:
      "Select between group training batches or dedicated 1-on-1 personal coaching.",
    icon: LayoutGrid,
  },
  {
    step: "02",
    title: "Contact / Book",
    description: "Submit your inquiry or reserve your coaching slot online.",
    icon: PhoneCall,
  },
  {
    step: "03",
    title: "Train",
    description:
      "Attend structured net sessions with coach instruction and bowling machine practice.",
    icon: Dumbbell,
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Refine your batting technique and consistency through regular practice.",
    icon: TrendingUp,
  },
];

export function CoachingHowItWorks() {
  return (
    <section className="bg-cave-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Step-by-Step
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            How It <span className="punch-out-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Four simple steps to enroll in coaching programs at The Bat Cave.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.step}
                className="bg-cave-surface border-cave-line hover:border-cave-gold/40 relative space-y-6 rounded-2xl p-6 transition-colors"
              >
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className="text-cave-gold/40 text-3xl font-black tracking-tight sm:text-4xl">
                    {item.step}
                  </span>
                  <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <h3 className="text-foreground text-lg font-bold tracking-tight uppercase">
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
