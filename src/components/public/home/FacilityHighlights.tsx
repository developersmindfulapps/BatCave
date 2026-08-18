import Image from "next/image";
import { Zap, Shield, Target, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    id: "nets",
    title: "2 Independent Nets",
    description:
      "Practice independently with dedicated high-tension safety netting and premium turf lanes.",
    icon: Shield,
    image: "/images/facilities/indoor-nets.svg",
    badge: "Spacious Lanes",
  },
  {
    id: "machines",
    title: "2 Bowling Machines",
    description:
      "Each net is equipped with its own automated bowling machine for consistent pace, swing, and spin drills.",
    icon: Zap,
    image: "/images/facilities/bowling-machine.svg",
    badge: "1 Per Net",
  },
  {
    id: "indoor",
    title: "Indoor Cricket Practice",
    description:
      "All-weather indoor practice facility designed for uninterrupted batting and technical training.",
    icon: Target,
    image: "/images/facilities/indoor-nets.svg",
    badge: "All-Weather",
  },
  {
    id: "coaching",
    title: "Expert Coaching",
    description:
      "Certified coaches available for structured group clinics and focused 1-on-1 batting masterclasses.",
    icon: GraduationCap,
    image: "/images/facilities/coaching.svg",
    badge: "Group & Personal",
  },
];

export function FacilityHighlights() {
  return (
    <section
      id="highlights"
      className="bg-cave-black px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-4">
            <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
              Engineered For Performance
            </span>
            <h2 className="text-foreground text-3xl leading-tight font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
              Built For The <span className="punch-out-text">Serious</span>{" "}
              Grind
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base">
            Our indoor facility is built with professional-grade turf,
            independent lanes, and dedicated bowling machines to elevate your
            cricket skills.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="group bg-cave-surface border-cave-line/80 hover:border-cave-gold/50 relative flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 sm:rounded-3xl"
              >
                {/* Image Container with Dark Gradient Overlay */}
                <div className="bg-cave-elevated relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="from-cave-surface via-cave-surface/40 absolute inset-0 bg-gradient-to-t to-transparent" />
                  <span className="bg-cave-black/80 text-cave-gold border-cave-gold/30 absolute top-3 right-3 rounded-full border px-3 py-1 text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between space-y-3 p-6">
                  <div className="space-y-3">
                    <div className="bg-cave-gold/10 border-cave-gold/30 text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-foreground text-xl font-extrabold tracking-tight uppercase">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
