"use client";

import { useState } from "react";
import {
  Check,
  Clock,
  Sparkles,
  Target,
  Users,
  Ticket,
  AlertCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingConfig } from "@/config/pricing";
import { promotionsConfig, calculateDiscountedPrice } from "@/config/offers";
import { BookingCategory, SelectedSession } from "@/types/booking-flow";

interface SessionSelectorProps {
  selectedSession: SelectedSession | null;
  onSelectSession: (session: SelectedSession) => void;
  onContinue: () => void;
}

export function SessionSelector({
  selectedSession,
  onSelectSession,
  onContinue,
}: SessionSelectorProps) {
  const [activeTab, setActiveTab] = useState<BookingCategory>(
    selectedSession ? selectedSession.category : "TIME_BASED"
  );

  // Time based sessions with dynamic promotion
  const [thirtyMin, oneHour] = pricingConfig.singleSessions;
  const inaugural1Hr = promotionsConfig.inaugural1HourOffer;
  const { effectivePrice: oneHourPrice } = calculateDiscountedPrice(
    oneHour.regularPrice,
    inaugural1Hr
  );

  const timeBasedSessions: SelectedSession[] = [
    {
      id: thirtyMin.id,
      category: "TIME_BASED",
      title: thirtyMin.title,
      subtext: "Quick Practice Slot",
      durationMinutes: thirtyMin.durationMinutes,
      durationLabel: thirtyMin.durationLabel,
      regularPrice: thirtyMin.regularPrice,
      effectivePrice: thirtyMin.regularPrice,
      isOfferActive: false,
    },
    {
      id: oneHour.id,
      category: "TIME_BASED",
      title: oneHour.title,
      subtext: "Standard Net Practice",
      durationMinutes: oneHour.durationMinutes,
      durationLabel: oneHour.durationLabel,
      regularPrice: oneHour.regularPrice,
      effectivePrice: oneHourPrice,
      isOfferActive: inaugural1Hr.isActive,
      offerBadge: inaugural1Hr.isActive
        ? "20% OFF • Inauguration Offer"
        : undefined,
    },
  ];

  // Overs packages with split rules
  const oversSessions: SelectedSession[] = pricingConfig.oversPackages.map(
    (pkg) => {
      let durationMins = 20;
      if (pkg.overs === 20) durationMins = 30;
      if (pkg.overs >= 30) durationMins = 30;

      let ruleNote = "Must be completed in one session.";
      if (pkg.overs >= 30) {
        ruleNote = "Can be split across two sessions.";
      }

      return {
        id: pkg.id,
        category: "OVERS_PACKAGE",
        title: pkg.title,
        subtext: `${pkg.ballsCount} Deliveries (${pkg.durationLabel})`,
        durationMinutes: durationMins,
        durationLabel: `${pkg.ballsCount} Balls • ${pkg.durationLabel}`,
        regularPrice: pkg.regularPrice,
        effectivePrice: pkg.regularPrice,
        ruleNote,
      };
    }
  );

  // Monthly overs passes
  const monthlyPasses: SelectedSession[] = pricingConfig.monthlyOversPasses.map(
    (pass) => ({
      id: pass.id,
      category: "MONTHLY_PLAN",
      title: pass.title,
      subtext: `${pass.oversPerDay * 6 + " balls"} daily allocation`,
      durationMinutes: 30,
      durationLabel: "30 Days Validity",
      regularPrice: pass.regularPrice,
      effectivePrice: pass.regularPrice,
      ruleNote:
        "Pass gives daily overs balance; slot booking required per visit.",
    })
  );

  // Coaching programs
  const groupOffer = promotionsConfig.inauguralGroupCoachingOffer;
  const { effectivePrice: groupCoachingPrice } = calculateDiscountedPrice(
    pricingConfig.coaching.group.regularPrice,
    groupOffer
  );

  const coachingSessions: SelectedSession[] = [
    {
      id: pricingConfig.coaching.group.id,
      category: "COACHING",
      title: pricingConfig.coaching.group.title,
      subtext: "Squad training & batting fundamentals",
      durationMinutes: 0, // batch timings coordinated with coaching staff
      durationLabel: "Monthly Batch Program",
      regularPrice: pricingConfig.coaching.group.regularPrice,
      effectivePrice: groupCoachingPrice,
      isOfferActive: groupOffer.isActive,
      offerBadge: groupOffer.isActive
        ? "First 20 Registrations • 20% OFF"
        : undefined,
      ruleNote:
        "Batch timings coordinated with BCCI Certified Coach upon registration.",
    },
    {
      id: pricingConfig.coaching.personal.id,
      category: "COACHING",
      title: pricingConfig.coaching.personal.title,
      subtext: "Dedicated 1-on-1 coach masterclass",
      durationMinutes: 0,
      durationLabel: "Monthly 1-on-1 Program",
      regularPrice: pricingConfig.coaching.personal.regularPrice,
      effectivePrice: pricingConfig.coaching.personal.regularPrice,
      ruleNote:
        "Individual time slots scheduled directly with BCCI Certified Coach.",
    },
  ];

  let currentItems: SelectedSession[] = timeBasedSessions;
  if (activeTab === "OVERS_PACKAGE") currentItems = oversSessions;
  if (activeTab === "MONTHLY_PLAN") currentItems = monthlyPasses;
  if (activeTab === "COACHING") currentItems = coachingSessions;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
          Step 01
        </span>
        <h2 className="text-foreground text-2xl font-black uppercase sm:text-3xl">
          Choose Your <span className="punch-out-text">Session</span>
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Select the practice format you wish to book at The Bat Cave.
        </p>
      </div>

      {/* Category Pills Tab Bar */}
      <div className="bg-cave-surface border-cave-line grid grid-cols-2 gap-2 rounded-2xl border p-1.5 sm:grid-cols-4">
        <button
          type="button"
          onClick={() => setActiveTab("TIME_BASED")}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-black tracking-wider uppercase transition-all ${
            activeTab === "TIME_BASED"
              ? "bg-cave-gold text-cave-black shadow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Clock className="h-3.5 w-3.5" />
          Time Based
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("OVERS_PACKAGE")}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-black tracking-wider uppercase transition-all ${
            activeTab === "OVERS_PACKAGE"
              ? "bg-cave-gold text-cave-black shadow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Target className="h-3.5 w-3.5" />
          Overs
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("MONTHLY_PLAN")}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-black tracking-wider uppercase transition-all ${
            activeTab === "MONTHLY_PLAN"
              ? "bg-cave-gold text-cave-black shadow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Ticket className="h-3.5 w-3.5" />
          Monthly Pass
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("COACHING")}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-black tracking-wider uppercase transition-all ${
            activeTab === "COACHING"
              ? "bg-cave-gold text-cave-black shadow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Users className="h-3.5 w-3.5" />
          Coaching
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {currentItems.map((item) => {
          const isSelected = selectedSession?.id === item.id;

          return (
            <Card
              key={item.id}
              onClick={() => onSelectSession(item)}
              className={`relative flex cursor-pointer flex-col justify-between rounded-2xl p-6 transition-all ${
                isSelected
                  ? "bg-cave-surface border-cave-gold shadow-cave-gold/10 border-2 shadow-xl"
                  : "bg-cave-surface border-cave-line hover:border-cave-gold/40 border"
              }`}
            >
              {/* Optional Offer Badge */}
              {item.isOfferActive && item.offerBadge && (
                <div className="absolute -top-3 left-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-red-600 to-amber-600 px-3 py-0.5 text-[10px] font-black tracking-wider text-white uppercase shadow">
                  <Sparkles className="h-3 w-3" />
                  {item.offerBadge}
                </div>
              )}

              <div className="space-y-4 pt-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-foreground text-lg font-black uppercase">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-0.5 text-xs">
                      {item.subtext}
                    </p>
                  </div>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      isSelected
                        ? "bg-cave-gold text-cave-black border-cave-gold"
                        : "border-cave-line text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-foreground text-3xl font-black">
                    ₹{item.effectivePrice.toLocaleString("en-IN")}
                  </span>
                  {item.effectivePrice < item.regularPrice && (
                    <span className="text-muted-foreground text-sm font-bold line-through decoration-red-500">
                      ₹{item.regularPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold uppercase">
                    {item.category === "MONTHLY_PLAN" ||
                    item.category === "COACHING"
                      ? "/ month"
                      : "/ session"}
                  </span>
                </div>

                {item.ruleNote && (
                  <p className="bg-cave-elevated/80 border-cave-line/60 rounded-xl border p-2.5 text-[11px] text-gray-300">
                    💡 {item.ruleNote}
                  </p>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Advance Policy Callout */}
      <div className="bg-cave-surface border-cave-line text-muted-foreground flex items-center gap-2.5 rounded-xl border p-3.5 text-xs">
        <AlertCircle className="text-cave-gold h-4 w-4 shrink-0" />
        <span>30% online advance is required to confirm your booking.</span>
      </div>

      {/* Continue Action */}
      <div className="pt-2">
        <Button
          onClick={onContinue}
          disabled={!selectedSession}
          size="lg"
          className="bg-cave-gold text-cave-black w-full rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white disabled:opacity-40"
        >
          {selectedSession
            ? `Continue with ${selectedSession.title} →`
            : "Select A Session To Continue"}
        </Button>
      </div>
    </div>
  );
}
