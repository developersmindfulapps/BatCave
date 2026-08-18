/**
 * Central rate card data for The Bat Cave.
 * Source of truth for single sessions, overs, monthly plans, and coaching.
 */

export interface SingleSessionItem {
  id: string;
  title: string;
  category: string;
  durationMinutes: number;
  durationLabel: string;
  regularPrice: number;
  features: string[];
}

export interface OversPackageItem {
  id: string;
  title: string;
  overs: number;
  ballsCount: number;
  regularPrice: number;
  durationLabel: string;
  sessionSplitLabel: string;
  features: string[];
}

export interface MonthlyTimePlanItem {
  id: string;
  title: string;
  subtext: string;
  regularPrice: number;
  periodLabel: string;
  isShared: boolean;
  popular?: boolean;
  features: string[];
}

export interface MonthlyOversPassItem {
  id: string;
  title: string;
  subtext: string;
  oversPerDay: number;
  regularPrice: number;
  periodLabel: string;
  features: string[];
}

export interface CoachingProgramItem {
  id: string;
  title: string;
  label: string;
  regularPrice: number;
  periodLabel: string;
  features: string[];
}

export const pricingConfig = {
  singleSessions: [
    {
      id: "30-min-session",
      title: "30 Minutes",
      category: "Quick Practice",
      durationMinutes: 30,
      durationLabel: "Approximate duration: 30 minutes",
      regularPrice: 250,
      features: [
        "Dedicated lane & bowling machine",
        "Custom speed & line variations",
        "30% online advance required to confirm booking",
      ],
    },
    {
      id: "1-hour-session",
      title: "1 Hour",
      category: "Standard Session",
      durationMinutes: 60,
      durationLabel: "Approximate duration: 1 hour (60 minutes)",
      regularPrice: 500,
      features: [
        "Full 60-minute net reservation",
        "Dedicated automated bowling machine",
        "Pace, swing, and spin drill sequences",
        "30% online advance required to confirm booking",
      ],
    },
  ] as SingleSessionItem[],

  oversPackages: [
    {
      id: "10-overs",
      title: "10 Overs",
      overs: 10,
      ballsCount: 60,
      regularPrice: 120,
      durationLabel: "~20 minutes",
      sessionSplitLabel: "1 Session",
      features: [
        "60 bowling machine deliveries",
        "Must be completed in 1 session",
        "Pace / length customization",
      ],
    },
    {
      id: "20-overs",
      title: "20 Overs",
      overs: 20,
      ballsCount: 120,
      regularPrice: 220,
      durationLabel: "~30 minutes",
      sessionSplitLabel: "1 Session",
      features: [
        "120 bowling machine deliveries",
        "Must be completed in 1 session",
        "Speed & swing drill sequences",
      ],
    },
    {
      id: "30-overs",
      title: "30 Overs",
      overs: 30,
      ballsCount: 180,
      regularPrice: 330,
      durationLabel: "Flexible",
      sessionSplitLabel: "Split across 2 sessions",
      features: [
        "180 bowling machine deliveries",
        "Can be split across 2 sessions",
        "Great for technical shot building",
      ],
    },
    {
      id: "40-overs",
      title: "40 Overs",
      overs: 40,
      ballsCount: 240,
      regularPrice: 400,
      durationLabel: "Flexible",
      sessionSplitLabel: "Split across 2 sessions",
      features: [
        "240 bowling machine deliveries",
        "Can be split across 2 sessions",
        "Match-intensity stamina practice",
      ],
    },
  ] as OversPackageItem[],

  monthlyTimePlans: [
    {
      id: "30-min-daily",
      title: "30 Mins Daily",
      subtext: "Individual Practice",
      regularPrice: 4000,
      periodLabel: "/ month",
      isShared: false,
      popular: false,
      features: [
        "Daily 30-minute practice allocation",
        "Dedicated bowling machine per session",
        "Slot booking required for each session",
        "Valid for 30 calendar days",
      ],
    },
    {
      id: "1-hour-daily",
      title: "1 Hour Daily",
      subtext: "Dedicated Cricketer",
      regularPrice: 6500,
      periodLabel: "/ month",
      isShared: false,
      popular: true,
      features: [
        "Daily 60-minute practice allocation",
        "Full net & machine reservation",
        "Slot booking required for each session",
        "Valid for 30 calendar days",
      ],
    },
    {
      id: "1-hour-shared",
      title: "1 Hour Daily (Shared)",
      subtext: "Shared by 2 Players",
      regularPrice: 7000,
      periodLabel: "/ month",
      isShared: true,
      popular: false,
      features: [
        "Daily 60-minute net reservation",
        "Share lane & machine between 2 players",
        "Slot booking required for each session",
        "Best value for batting pairs & partners",
      ],
    },
  ] as MonthlyTimePlanItem[],

  monthlyOversPasses: [
    {
      id: "10-overs-monthly",
      title: "10 Overs Daily",
      subtext: "Monthly Pass",
      oversPerDay: 10,
      regularPrice: 2000,
      periodLabel: "/ month",
      features: [
        "10 overs (60 balls) daily allocation",
        "Automated bowling machine delivery",
        "Slot booked against monthly pass",
        "Valid for 30 calendar days",
      ],
    },
    {
      id: "20-overs-monthly",
      title: "20 Overs Daily",
      subtext: "Monthly Pass",
      oversPerDay: 20,
      regularPrice: 3500,
      periodLabel: "/ month",
      features: [
        "20 overs (120 balls) daily allocation",
        "Full speed & spin variation control",
        "Slot booked against monthly pass",
        "Valid for 30 calendar days",
      ],
    },
    {
      id: "30-overs-monthly",
      title: "30 Overs Daily",
      subtext: "Monthly Pass",
      oversPerDay: 30,
      regularPrice: 5500,
      periodLabel: "/ month",
      features: [
        "30 overs (180 balls) daily allocation",
        "Intensive match simulation volume",
        "Slot booked against monthly pass",
        "Valid for 30 calendar days",
      ],
    },
  ] as MonthlyOversPassItem[],

  coaching: {
    group: {
      id: "group-coaching",
      title: "Group Coaching",
      label: "Group Batches",
      regularPrice: 5000,
      periodLabel: "/ month",
      features: [
        "Small batch squad drills & net sessions",
        "BCCI certified coach guidance",
        "Batting fundamentals, stance & footwork",
        "Match scenario batting simulations",
      ],
    } as CoachingProgramItem,
    personal: {
      id: "personal-coaching",
      title: "Personal Coaching",
      label: "One-On-One Coaching",
      regularPrice: 10000,
      periodLabel: "/ month",
      features: [
        "Dedicated 1-on-1 coach attention",
        "High-speed video batting analysis",
        "Custom speed, bounce & swing machine presets",
        "Tournament readiness & mental preparation",
      ],
    } as CoachingProgramItem,
  },
};
