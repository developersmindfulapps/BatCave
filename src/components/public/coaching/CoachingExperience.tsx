import Image from "next/image";

const experienceItems = [
  {
    title: "Coach Guidance",
    category: "1-on-1 Training",
    description:
      "Hands-on instruction focused on grip, stance, balance, and trigger movements.",
    src: "/images/facilities/coaching.svg",
  },
  {
    title: "Indoor Net Practice",
    category: "Dedicated Lanes",
    description:
      "Spacious independent net lanes with high-tension netting and true-bounce turf.",
    src: "/images/facilities/indoor-nets.svg",
  },
  {
    title: "Bowling Machine Drills",
    category: "Machine Precision",
    description:
      "Automated deliveries with adjustable pace and line for repeatable stroke practice.",
    src: "/images/facilities/bowling-machine.svg",
  },
  {
    title: "Batting Technique",
    category: "Shot Execution",
    description:
      "Systematic drills to build solid defensive fundamentals and attacking shots.",
    src: "/images/gallery/gallery-1.svg",
  },
];

export function CoachingExperience() {
  return (
    <section className="bg-cave-surface border-cave-line/80 border-y px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
              Training Environment
            </span>
            <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
              The Coaching <span className="punch-out-text">Experience</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-xs sm:text-sm">
            Purpose-built indoor facilities designed for focused cricket
            training and skill development.
          </p>
        </div>

        {/* 4 Cards Experience Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experienceItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-cave-elevated border-cave-line/80 hover:border-cave-gold/50 relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all"
            >
              {/* Graphic Banner */}
              <div className="bg-cave-black relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="from-cave-elevated via-cave-elevated/40 absolute inset-0 bg-gradient-to-t to-transparent" />
                <span className="bg-cave-black/80 text-cave-gold border-cave-gold/30 absolute top-3 right-3 rounded-full border px-3 py-1 text-[10px] font-black tracking-wider uppercase backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Text Description */}
              <div className="space-y-2 p-6">
                <h3 className="text-foreground text-lg font-extrabold uppercase">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
