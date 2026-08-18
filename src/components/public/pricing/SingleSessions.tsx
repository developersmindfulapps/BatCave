import Link from "next/link";
import { Check, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";
import { promotionsConfig, calculateDiscountedPrice } from "@/config/offers";

export function SingleSessions() {
  const [thirtyMin, oneHour] = pricingConfig.singleSessions;
  const inauguralOffer = promotionsConfig.inaugural1HourOffer;
  const isOfferActive = inauguralOffer.isActive;

  const { effectivePrice: discounted1HrPrice } = calculateDiscountedPrice(
    oneHour.regularPrice,
    inauguralOffer
  );

  return (
    <section
      id="single-sessions"
      className="bg-cave-black px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Bowling Machine Use
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Single <span className="punch-out-text">Sessions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Individual practice slots with dedicated automated bowling machines
            in Net 1 or Net 2.
          </p>
        </div>

        {/* Dynamic Grid: 3 cards when offer active, 2 cards when inactive */}
        <div
          className={`grid items-stretch gap-6 sm:gap-8 ${
            isOfferActive
              ? "grid-cols-1 md:grid-cols-3"
              : "mx-auto max-w-4xl grid-cols-1 md:mx-0 md:grid-cols-2"
          }`}
        >
          {/* Card 1: 30 Minutes */}
          <Card className="bg-cave-surface border-cave-line hover:border-cave-gold/40 flex flex-col justify-between rounded-3xl p-6 transition-all sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  {thirtyMin.category}
                </span>
                <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-8 w-8 items-center justify-center rounded-full border">
                  <Clock className="h-4 w-4" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  {thirtyMin.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-foreground text-4xl font-black sm:text-5xl">
                    ₹{thirtyMin.regularPrice}
                  </span>
                  <span className="text-muted-foreground text-xs font-bold uppercase">
                    / session
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  {thirtyMin.durationLabel}
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-gray-300 sm:text-sm">
                {thirtyMin.features.map((feat, idx) => (
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
                variant="outline"
                className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
              >
                <Link href="/book">Book 30 Mins</Link>
              </Button>
            </div>
          </Card>

          {/* Card 2: 1 Hour Regular */}
          <Card
            className={`bg-cave-surface flex flex-col justify-between rounded-3xl p-6 transition-all sm:p-8 ${
              !isOfferActive
                ? "border-cave-gold shadow-cave-gold/10 border-2 shadow-xl"
                : "border-cave-line hover:border-cave-gold/40 border"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  {oneHour.category}
                </span>
                <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-8 w-8 items-center justify-center rounded-full border">
                  <Clock className="h-4 w-4" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl font-black uppercase">
                  {oneHour.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-foreground text-4xl font-black sm:text-5xl">
                    ₹{oneHour.regularPrice}
                  </span>
                  <span className="text-muted-foreground text-xs font-bold uppercase">
                    / session
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  {oneHour.durationLabel}
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-gray-300 sm:text-sm">
                {oneHour.features.map((feat, idx) => (
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
                variant={!isOfferActive ? "default" : "outline"}
                className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
              >
                <Link href="/book">Book 1 Hour</Link>
              </Button>
            </div>
          </Card>

          {/* Card 3: Inauguration Offer (Rendered when isOfferActive === true) */}
          {isOfferActive && (
            <Card className="bg-cave-surface relative flex transform flex-col justify-between rounded-3xl border-2 border-red-500/80 p-6 shadow-2xl shadow-red-950/20 sm:p-8 md:-translate-y-2">
              {/* Promotional Badge */}
              <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 px-4 py-1 text-[11px] font-black tracking-wider whitespace-nowrap text-white uppercase shadow-lg">
                <Sparkles className="h-3 w-3" />
                {inauguralOffer.badgeText}
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-red-400 uppercase">
                    Special Offer
                  </span>
                  <span className="rounded-full border border-red-500/40 bg-red-500/20 px-2.5 py-0.5 text-xs font-black text-red-300 uppercase">
                    Save ₹{oneHour.regularPrice - discounted1HrPrice}
                  </span>
                </div>

                <div>
                  <h3 className="text-foreground text-2xl font-black uppercase">
                    1 Hour (Inaugural)
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-cave-gold text-4xl font-black sm:text-5xl">
                      ₹{discounted1HrPrice}
                    </span>
                    <span className="text-muted-foreground text-lg font-bold line-through decoration-red-500">
                      ₹{oneHour.regularPrice}
                    </span>
                    <span className="text-muted-foreground text-xs font-bold uppercase">
                      / session
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-red-400/90">
                    {inauguralOffer.subtext}
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-xs text-gray-200 sm:text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="text-cave-gold h-4 w-4 shrink-0" />
                    <span className="font-semibold text-white">
                      Full 60-minute net reservation
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-cave-gold h-4 w-4 shrink-0" />
                    <span>Dedicated automated bowling machine</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-cave-gold h-4 w-4 shrink-0" />
                    <span>Inauguration month promotional rate</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-cave-gold h-4 w-4 shrink-0" />
                    <span>30% online advance required to confirm booking</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Button
                  asChild
                  className="bg-cave-gold text-cave-black shadow-cave-gold/10 w-full rounded-full py-5 text-xs font-black tracking-wider uppercase shadow-lg transition-all hover:scale-105 hover:bg-white"
                >
                  <Link href="/book">Claim Offer &amp; Book</Link>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
