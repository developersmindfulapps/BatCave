/**
 * Central business configuration for The Bat Cave.
 *
 * NOTE: Operating hours, rates, and availability rules will eventually
 * be managed dynamically through the database and admin dashboard.
 * This configuration holds base metadata and architectural constants.
 */

export const businessConfig = {
  name: "The Bat Cave",
  tagline: "Premium Indoor Cricket Nets & Coaching",
  location: {
    street: "Main Highway, Kanispura",
    city: "Baramulla",
    state: "Jammu & Kashmir",
    postalCode: "193101",
    country: "India",
    fullAddress: "Kanispura, Baramulla, Jammu & Kashmir 193101",
    coordinates: {
      latitude: 34.2091,
      longitude: 74.3436,
    },
  },
  contact: {
    phone: "+91 99999 99999",
    supportEmail: "support@thebatcave.in",
    bookingEmail: "bookings@thebatcave.in",
    whatsapp: "+91 99999 99999",
  },
  facility: {
    totalNets: 2,
    nets: [
      {
        id: "net-1",
        name: "Net 1 (Speed & Pace)",
        hasBowlingMachine: true,
        description:
          "Equipped with professional bowling machine and premium turf.",
      },
      {
        id: "net-2",
        name: "Net 2 (Spin & Technique)",
        hasBowlingMachine: true,
        description:
          "Equipped with professional bowling machine and match-quality lighting.",
      },
    ],
    features: [
      "2 Independent High-Performance Nets",
      "Professional Automated Bowling Machines",
      "Match-grade LED Floodlighting",
      "Premium High-Density Synthetic Turf",
      "Certified Coaching Staff",
      "Spectator & Player Lounge",
    ],
  },
  bookingRules: {
    minAdvancePaymentPercent: 30,
    slotHoldDurationMinutes: 10,
    allowOversBasedBooking: true,
    allowTimeBasedBooking: true,
  },
};
