import Image from "next/image";

const galleryImages = [
  {
    id: "nets",
    src: "/images/facilities/indoor-nets.svg",
    title: "Independent Nets",
    category: "Net 1 & Net 2",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: "machine",
    src: "/images/facilities/bowling-machine.svg",
    title: "Bowling Machine",
    category: "Automated Precision",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "coaching",
    src: "/images/facilities/coaching.svg",
    title: "Coaching Drills",
    category: "Expert Guidance",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "batting",
    src: "/images/gallery/gallery-1.svg",
    title: "Batting Practice",
    category: "Stroke Execution",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "turf",
    src: "/images/gallery/gallery-2.svg",
    title: "Indoor Turf",
    category: "High Density Turf",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
];

export function FacilityDetailedGallery() {
  return (
    <section className="bg-cave-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
              Visual Tour
            </span>
            <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
              Facility <span className="punch-out-text">Gallery</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-xs sm:text-sm">
            Take a visual tour through our indoor nets, dedicated bowling
            machines, and training space.
          </p>
        </div>

        {/* Gallery Grid (with mobile horizontal swipe support) */}
        <div className="flex snap-x scrollbar-none gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`group bg-cave-surface border-cave-line hover:border-cave-gold/50 relative min-w-[280px] snap-center overflow-hidden rounded-3xl border transition-all duration-300 sm:min-w-[340px] md:min-w-0 ${img.span} aspect-[4/3] min-h-[260px] sm:min-h-[300px] md:aspect-auto`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
              />

              {/* Overlay Gradient */}
              <div className="from-cave-black/90 via-cave-black/30 absolute inset-0 bg-gradient-to-t to-transparent" />

              {/* Text Badge */}
              <div className="bg-cave-black/70 border-cave-line/80 absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-2xl border p-3 backdrop-blur-xs">
                <div>
                  <span className="text-cave-gold block text-[10px] font-bold tracking-widest uppercase">
                    {img.category}
                  </span>
                  <h3 className="text-foreground text-sm font-extrabold uppercase sm:text-base">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
