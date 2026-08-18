"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Coaching", href: "/coaching" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 p-4 transition-all duration-300 sm:p-6">
      <nav
        className={cn(
          "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 sm:px-8 sm:py-3.5",
          isScrolled
            ? "bg-cave-surface/95 border-cave-line py-2.5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:py-3"
            : "bg-cave-elevated/85 border-cave-line/60 shadow-xl shadow-black/40 backdrop-blur-md"
        )}
      >
        {/* Brand Logo */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-foreground hover:text-cave-gold flex items-center gap-2 text-lg font-black tracking-tighter uppercase transition-colors sm:text-xl"
          >
            <span className="text-cave-gold">THE</span> BAT CAVE
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 text-xs font-bold tracking-widest uppercase lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "nav-link-underline relative py-1 transition-colors",
                  pathname === link.href
                    ? "text-cave-gold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button
            asChild
            size="sm"
            className="bg-cave-gold text-cave-black rounded-full px-5 text-xs font-black tracking-wider uppercase shadow-md transition-all hover:scale-105 hover:bg-white"
          >
            <Link href="/book">Book A Slot</Link>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-foreground hover:text-cave-gold p-2 transition-colors focus:outline-none lg:hidden"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "bg-cave-black/98 pointer-events-auto fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-6 p-6 backdrop-blur-2xl transition-all duration-300",
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        )}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-muted-foreground hover:text-foreground absolute top-6 right-6 p-3 transition-colors focus:outline-none"
          aria-label="Close Navigation Menu"
        >
          <X className="h-8 w-8" />
        </button>

        <div className="text-cave-gold mb-2 text-xs font-bold tracking-[0.4em] uppercase">
          The Bat Cave • Kanispura
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-cave-gold text-2xl font-black tracking-tight uppercase transition-colors sm:text-3xl"
          >
            {link.label}
          </Link>
        ))}

        {/* Secondary Account Link */}
        <Link
          href="/account"
          onClick={() => setMobileMenuOpen(false)}
          className="text-muted-foreground hover:text-cave-gold flex items-center gap-2 pt-2 text-lg font-bold uppercase transition-colors"
        >
          <User className="text-cave-gold h-5 w-5" />
          My Account
        </Link>

        <div className="w-full max-w-xs pt-4">
          <Button
            asChild
            size="lg"
            className="bg-cave-gold text-cave-black w-full rounded-full py-6 text-base font-black tracking-wider uppercase shadow-xl transition-all hover:bg-white"
          >
            <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
              🏏 Book A Slot
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
