import { CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const rules = [
  "Every practice session requires an individual slot booking.",
  "Availability depends on the selected date, time slot, and lane capacity.",
  "30% online advance required to confirm booking.",
  "Monthly plans & passes require a slot reservation prior to each session.",
  "10 overs package must be completed within one single session.",
  "20 overs package must be completed within one single session.",
  "30 overs package can be split across two separate practice sessions.",
  "40 overs package can be split across two separate practice sessions.",
  "Facility operating hours are subject to owner scheduling adjustments.",
];

export function GoodToKnow() {
  return (
    <section className="bg-cave-black border-cave-line/80 border-t px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Section Header */}
        <div className="space-y-2 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Important Information
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Good To <span className="punch-out-text">Know</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Essential booking and session guidelines to ensure smooth training
            sessions.
          </p>
        </div>

        {/* Rules Card Grid */}
        <Card className="bg-cave-surface border-cave-line space-y-6 rounded-3xl p-6 sm:p-10">
          <div className="border-cave-line/60 flex items-center gap-2.5 border-b pb-4">
            <AlertCircle className="text-cave-gold h-5 w-5 shrink-0" />
            <h3 className="text-foreground text-sm font-extrabold tracking-wider uppercase sm:text-base">
              Booking &amp; Facility Policies
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-xs text-gray-300 sm:text-sm"
              >
                <CheckCircle className="text-cave-gold mt-0.5 h-4 w-4 shrink-0" />
                <span className="leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
