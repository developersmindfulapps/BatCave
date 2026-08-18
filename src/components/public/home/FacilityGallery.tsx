import Image from "next/image";

const galleryItems = [
  {
    id: "g1",
    title: "Bat Strike Action",
    category: "Batting Practice",
    src: "/images/gallery/gallery-1.svg",
  },
  {
    id: "g2",
    title: "Turf & Net Lanes",
    category: "Indoor Pitches",
    src: "/images/gallery/gallery-2.svg",
  },
  {
    id: "g3",
    title: "Gear & Equipment",
    category: "Training Accessories",
    src: "/images/gallery/gallery-3.svg",
  },
  {
    id: "g4",
    title: "Bowling Machine Precision",
    category: "Automated Drills",
    src: "/images/gallery/gallery-4.svg",
  },
  {
    id: "g5",
    title: "Team Clinics",
    category: "Group Coaching",
    src: "/images/gallery/gallery-5.svg",
  },
];

export function FacilityGallery() {
  return (
    <section
      id="gallery"
      className="bg-cave-black overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-4">
            <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
              Inside The Cave
            </span>
            <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
              Life In The <span className="punch-out-text">Nets</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-xs sm:text-sm">
            Swipe through the grind. Dedicated lanes built for serious cricket
            development.
          </p>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Large Screens */}
        <div className="scrollbar-hide -mx-4 flex space-x-5 overflow-x-auto px-4 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-x-0 sm:px-0 lg:grid-cols-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-cave-surface border-cave-line/80 hover:border-cave-gold/50 relative aspect-square w-64 flex-none overflow-hidden rounded-2xl border shadow-xl shadow-black/40 transition-all duration-300 sm:w-auto sm:rounded-3xl"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="from-cave-black/90 via-cave-black/30 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 space-y-0.5 p-4">
                <span className="text-cave-gold text-[10px] font-bold tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 className="text-foreground text-sm font-extrabold uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
