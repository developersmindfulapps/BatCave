import Link from "next/link";
import { Check, CalendarDays, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";

export function MonthlyTimePlans() {
  const plans = pricingConfig.monthlyTimePlans;

  return (
    <section
      id="monthly-plans"
      className="bg-cave-black px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Time-Based Membership
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Monthly <span className="punch-out-text">Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Committed daily practice routines to build consistent muscle memory
            and technique over the month.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`bg-cave-surface flex flex-col justify-between rounded-3xl p-6 transition-all sm:p-8 ${
                plan.popular
                  ? "border-cave-gold shadow-cave-gold/10 relative border-2 shadow-xl md:-translate-y-2"
                  : "border-cave-line hover:border-cave-gold/40 border"
              }`}
            >
              {plan.popular && (
                <div className="bg-cave-gold text-cave-black absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-4 py-1 text-[11px] font-black tracking-wider uppercase shadow">
                  <Flame className="h-3.5 w-3.5" />
                  Most Popular Plan
                </div>
              )}

              <div className="space-y-6 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                    {plan.subtext}
                  </span>
                  <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-8 w-8 items-center justify-center rounded-full border">
                    {plan.isShared ? (
                      <Users className="h-4 w-4" />
                    ) : (
                      <CalendarDays className="h-4 w-4" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-foreground text-2xl font-black uppercase">
                    {plan.title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-foreground text-4xl font-black sm:text-5xl">
                      ₹{plan.regularPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-muted-foreground text-xs font-bold uppercase">
                      {plan.periodLabel}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-xs text-gray-300 sm:text-sm">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="text-cave-gold h-4 w-4 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
                >
                  <Link href="/book">Choose Monthly Plan</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Informational UX Note */}
        <p className="text-muted-foreground text-center text-xs md:text-left">
          * Note: Monthly plans provide dedicated daily practice time. A
          specific slot must be booked for each session to guarantee lane
          availability.
        </p>
      </div>
    </section>
  );
}
