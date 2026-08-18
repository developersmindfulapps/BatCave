import Link from "next/link";
import { Check, Users, UserCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";
import { promotionsConfig, calculateDiscountedPrice } from "@/config/offers";

export function CoachingPricing() {
  const { group, personal } = pricingConfig.coaching;
  const groupOffer = promotionsConfig.inauguralGroupCoachingOffer;
  const isGroupOfferActive = groupOffer.isActive;

  const { effectivePrice: discountedGroupPrice } = calculateDiscountedPrice(
    group.regularPrice,
    groupOffer
  );

  return (
    <section
      id="coaching-plans"
      className="bg-cave-black px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Expert Guidance
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Coaching <span className="punch-out-text">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Structured development programs with BCCI-certified coaching and
            video batting analysis.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Group Coaching Card */}
          <Card
            className={`bg-cave-surface relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
              isGroupOfferActive
                ? "border-2 border-red-500/80 shadow-2xl shadow-red-950/20"
                : "border-cave-line hover:border-cave-gold/40 border"
            }`}
          >
            {/* Promo Tag when Active */}
            {isGroupOfferActive && (
              <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 px-4 py-1 text-[11px] font-black tracking-wider whitespace-nowrap text-white uppercase shadow-lg">
                <Sparkles className="h-3 w-3" />
                {groupOffer.badgeText}
              </div>
            )}

            <div className={`space-y-6 ${isGroupOfferActive ? "pt-2" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  {group.label}
                </span>
                <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                  <Users className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  {group.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  {isGroupOfferActive ? (
                    <>
                      <span className="text-cave-gold text-4xl font-black sm:text-5xl">
                        ₹{discountedGroupPrice}
                      </span>
                      <span className="text-muted-foreground text-lg font-bold line-through decoration-red-500">
                        ₹{group.regularPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-foreground text-4xl font-black sm:text-5xl">
                      ₹{group.regularPrice}
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold uppercase">
                    {group.periodLabel}
                  </span>
                </div>
                {isGroupOfferActive && (
                  <p className="mt-1 text-xs font-semibold text-red-400">
                    {groupOffer.subtext}
                  </p>
                )}
              </div>

              <ul className="space-y-3 pt-2 text-xs text-gray-200 sm:text-sm">
                {group.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="text-cave-gold h-4 w-4 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Button
                asChild
                className="bg-cave-gold text-cave-black w-full rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
              >
                <Link href="/coaching">Explore Group Coaching</Link>
              </Button>
            </div>
          </Card>

          {/* Personal Coaching Card (1-on-1) */}
          <Card className="bg-cave-surface border-cave-gold shadow-cave-gold/10 flex flex-col justify-between rounded-3xl border-2 p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-cave-gold text-xs font-bold tracking-widest uppercase">
                  {personal.label}
                </span>
                <div className="bg-cave-gold/10 border-cave-gold/30 text-cave-gold flex h-10 w-10 items-center justify-center rounded-full border">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  {personal.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-foreground text-4xl font-black sm:text-5xl">
                    ₹{personal.regularPrice}
                  </span>
                  <span className="text-muted-foreground text-xs font-bold uppercase">
                    {personal.periodLabel}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Intensive personalized 1-on-1 technical masterclasses
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-gray-200 sm:text-sm">
                {personal.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="text-cave-gold h-4 w-4 shrink-0" />
                    <span
                      className={idx === 0 ? "font-semibold text-white" : ""}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Button
                asChild
                className="bg-cave-gold text-cave-black w-full rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
              >
                <Link href="/coaching">Explore Personal Coaching</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
