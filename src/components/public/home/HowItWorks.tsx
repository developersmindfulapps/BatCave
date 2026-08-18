import { Calendar, Clock, CreditCard, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Choose Your Session",
    description:
      "Select from time-based practice slots or flexible overs packages tailored to your training goal.",
    icon: Clock,
  },
  {
    step: "02",
    title: "Pick A Date & Slot",
    description:
      "Choose your preferred practice date and available time slot in Net 1 or Net 2.",
    icon: Calendar,
  },
  {
    step: "03",
    title: "Book Online",
    description:
      "Secure your reservation instantly with a minimum 30% online advance deposit.",
    icon: CreditCard,
  },
  {
    step: "04",
    title: "Show Up & Bat",
    description:
      "Arrive at The Bat Cave in Kanispura, step into your reserved net, and start grinding.",
    icon: Play,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-y px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Simple &amp; Seamless
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            How It <span className="punch-out-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Four easy steps from booking your slot to stepping onto the pitch.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.step}
                className="bg-cave-elevated/70 border-cave-line hover:border-cave-gold/40 relative space-y-6 rounded-2xl p-6 transition-colors"
              >
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className="text-cave-gold/40 text-3xl font-black tracking-tight sm:text-4xl">
                    {item.step}
                  </span>
                  <div className="bg-cave-black border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
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
