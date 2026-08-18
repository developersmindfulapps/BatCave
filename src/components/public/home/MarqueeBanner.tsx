export function MarqueeBanner() {
  const marqueeItems = [
    "THE BAT CAVE",
    "2 INDEPENDENT NETS",
    "DEDICATED BOWLING MACHINES",
    "TIME & OVERS PACKAGES",
    "GROUP & PERSONAL COACHING",
    "KANISPURA, BARAMULLA",
  ];

  return (
    <div className="bg-cave-elevated/70 border-cave-line overflow-hidden border-y py-4 select-none sm:py-6">
      <div className="animate-marquee">
        {/* First Loop */}
        <div className="flex shrink-0 items-center space-x-8">
          {marqueeItems.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center space-x-8">
              <span className="punch-out-text-subtle text-2xl font-black tracking-wider text-transparent uppercase sm:text-4xl md:text-5xl">
                {item}
              </span>
              <span className="bg-cave-gold h-2 w-2 shrink-0 rounded-full" />
            </div>
          ))}
        </div>

        {/* Second Loop for seamless continuous scroll */}
        <div className="flex shrink-0 items-center space-x-8">
          {marqueeItems.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center space-x-8">
              <span className="punch-out-text-subtle text-2xl font-black tracking-wider text-transparent uppercase sm:text-4xl md:text-5xl">
                {item}
              </span>
              <span className="bg-cave-gold h-2 w-2 shrink-0 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
