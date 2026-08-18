export const siteConfig = {
  name: "The Bat Cave",
  shortName: "Bat Cave",
  description:
    "The Bat Cave is a premium indoor cricket facility in Kanispura, Baramulla with professional cricket nets, bowling machines and coaching.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://thebatcave.in",
  ogImage: "/images/branding/og-image.jpg",
  links: {
    instagram: "https://instagram.com/thebatcave_cricket",
    facebook: "https://facebook.com/thebatcavecricket",
    whatsapp: "https://wa.me/919999999999",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Coaching", href: "/coaching" },
    { label: "Facilities", href: "/facilities" },
    { label: "Contact", href: "/contact" },
  ],
  customerNavItems: [
    { label: "My Account", href: "/account" },
    { label: "My Bookings", href: "/account/bookings" },
    { label: "My Passes", href: "/account/passes" },
  ],
  adminNavItems: [
    { label: "Dashboard", href: "/admin" },
    { label: "Bookings", href: "/admin/bookings" },
    { label: "Customers", href: "/admin/customers" },
    { label: "Passes", href: "/admin/passes" },
    { label: "Coaching", href: "/admin/coaching" },
    { label: "Availability", href: "/admin/availability" },
    { label: "Payments", href: "/admin/payments" },
    { label: "Settings", href: "/admin/settings" },
  ],
};
