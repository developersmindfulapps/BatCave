import { CheckCircle2 } from "lucide-react";
import { businessConfig } from "@/config/business";

const benefits = [
  "2 Independent Cricket Nets with safety netting",
  "Dedicated Automated Bowling Machine per net",
  "All-weather indoor practice facility in Baramulla",
  "Premium high-density synthetic cricket turf",
  "Customizable pace, bounce, and spin variations",
  "Flexible time-based and overs-based practice packages",
  "Certified group coaching clinics for all skill levels",
  "Dedicated 1-on-1 personal batting masterclasses",
];

export function WhyBatCave() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-t px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Heading & Pitch */}
        <div className="space-y-6">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Why Train Here
          </span>
          <h2 className="text-foreground text-3xl leading-[1.05] font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            More Than <br />
            Just A <span className="punch-out-text italic">Net.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
            {businessConfig.name} is engineered to give cricketers in{" "}
            {businessConfig.location.city} a focused, professional training
            atmosphere where technique, consistency, and confidence come first.
          </p>
          <div className="bg-cave-elevated/80 border-cave-line/80 rounded-xl border p-4">
            <p className="text-cave-gold text-xs font-semibold tracking-wider uppercase">
              Located on {businessConfig.location.street},{" "}
              {businessConfig.location.city}
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              Easy access for local cricketers, school players, and weekend
              clubs across the valley.
            </p>
          </div>
        </div>

        {/* Right Column: Key Benefits Checklist */}
        <div className="bg-cave-elevated/60 border-cave-line space-y-5 rounded-3xl border p-6 sm:p-10">
          <h3 className="text-foreground text-base font-extrabold tracking-wider uppercase">
            The Bat Cave Advantages
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs text-gray-200 sm:text-sm"
              >
                <CheckCircle2 className="text-cave-gold mt-0.5 h-5 w-5 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
