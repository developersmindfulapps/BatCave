import Link from "next/link";
import { businessConfig } from "@/config/business";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-cave-black border-cave-line/80 border-t px-4 pt-24 pb-16 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Brand Banner */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-foreground text-5xl font-black tracking-tighter uppercase sm:text-7xl md:text-8xl">
            THE <span className="text-cave-gold">BAT CAVE</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">
            {businessConfig.tagline} — Professional indoor cricket nets and
            bowling machines in {businessConfig.location.city},{" "}
            {businessConfig.location.state}.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Explore */}
          <div className="space-y-4">
            <h3 className="text-cave-gold text-xs font-bold tracking-[0.3em] uppercase">
              Explore
            </h3>
            <ul className="text-muted-foreground space-y-3 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing &amp; Passes
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="hover:text-foreground transition-colors"
                >
                  Coaching Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="hover:text-foreground transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="hover:text-cave-gold text-cave-gold font-bold transition-colors"
                >
                  Book A Slot →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Account */}
          <div className="space-y-4">
            <h3 className="text-cave-gold text-xs font-bold tracking-[0.3em] uppercase">
              Account
            </h3>
            <ul className="text-muted-foreground space-y-3 text-sm font-medium">
              <li>
                <Link
                  href="/account"
                  className="hover:text-foreground transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/account/bookings"
                  className="hover:text-foreground transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/account/passes"
                  className="hover:text-foreground transition-colors"
                >
                  My Passes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit */}
          <div className="space-y-4">
            <h3 className="text-cave-gold text-xs font-bold tracking-[0.3em] uppercase">
              Visit Facility
            </h3>
            <address className="text-muted-foreground space-y-1 text-sm leading-relaxed not-italic">
              <p className="text-foreground font-semibold">
                {businessConfig.name}
              </p>
              <p>{businessConfig.location.street}</p>
              <p>
                {businessConfig.location.city}, {businessConfig.location.state}
              </p>
              <p>PIN: {businessConfig.location.postalCode}</p>
            </address>
          </div>

          {/* Column 4: Facility Specs */}
          <div className="space-y-4">
            <h3 className="text-cave-gold text-xs font-bold tracking-[0.3em] uppercase">
              Equipment
            </h3>
            <ul className="text-muted-foreground space-y-2 text-xs">
              <li>• 2 Independent High-Performance Nets</li>
              <li>• 2 Automated Dedicated Bowling Machines</li>
              <li>• Time-Based &amp; Overs-Based Practice</li>
              <li>• Group &amp; Personal Coaching Clinics</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-cave-line/60 text-muted-foreground flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row">
          <p>&copy; 2026 The Bat Cave Indoor Cricket. All rights reserved.</p>
          <p className="text-cave-gold font-semibold tracking-wider uppercase">
            Kanispura, Baramulla, Jammu &amp; Kashmir
          </p>
        </div>
      </div>
    </footer>
  );
}
