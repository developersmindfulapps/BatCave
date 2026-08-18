import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  DollarSign,
  Trophy,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const quickLinks = [
  {
    title: "Book A Slot",
    description: "Reserve your net lane or bowling machine session online.",
    href: "/book",
    icon: Calendar,
    highlight: true,
  },
  {
    title: "View Pricing",
    description:
      "Browse rates for single sessions, overs packages, and monthly passes.",
    href: "/pricing",
    icon: DollarSign,
  },
  {
    title: "Explore Coaching",
    description:
      "Learn about group coaching batches and 1-on-1 personal clinics.",
    href: "/coaching",
    icon: Trophy,
  },
  {
    title: "View Facilities",
    description: "Take a visual tour of our 2 independent nets and equipment.",
    href: "/facilities",
    icon: Shield,
  },
];

export function ContactQuickLinks() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-b px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Navigation
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Quick <span className="punch-out-text">Links</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Explore key sections across The Bat Cave platform.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link key={idx} href={item.href} className="group">
                <Card
                  className={`flex h-full flex-col justify-between space-y-6 rounded-3xl p-6 transition-all ${
                    item.highlight
                      ? "bg-cave-elevated border-cave-gold/60 group-hover:border-cave-gold border-2"
                      : "bg-cave-elevated border-cave-line group-hover:border-cave-gold/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="bg-cave-black border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-cave-gold h-5 w-5 transition-colors" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-foreground group-hover:text-cave-gold text-base font-extrabold uppercase transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
