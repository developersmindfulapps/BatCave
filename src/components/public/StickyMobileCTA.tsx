import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <aside
      aria-label="Quick Booking Bar"
      className="pointer-events-none fixed right-0 bottom-5 left-0 z-40 flex justify-center px-4 md:hidden"
    >
      <Link
        href="/book"
        className="bg-cave-gold text-cave-black border-cave-gold/40 pointer-events-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-center text-sm font-black tracking-wider uppercase shadow-2xl shadow-black/80 transition-all hover:bg-white active:scale-95"
      >
        <span>🏏</span>
        <span>BOOK A SLOT</span>
      </Link>
    </aside>
  );
}
