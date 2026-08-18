import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";

export function PricingPreview() {
  const [thirtyMin, oneHour] = pricingConfig.singleSessions;
  const [tenOvers, twentyOvers] = pricingConfig.oversPackages;

  const previewPlans = [
    {
      id: thirtyMin.id,
      title: thirtyMin.title,
      category: thirtyMin.category,
      price: `₹${thirtyMin.regularPrice}`,
      period: "per session",
      features: thirtyMin.features,
      popular: false,
    },
    {
      id: oneHour.id,
      title: oneHour.title,
      category: oneHour.category,
      price: `₹${oneHour.regularPrice}`,
      period: "per session",
      features: oneHour.features,
      popular: true,
    },
    {
      id: tenOvers.id,
      title: tenOvers.title,
      category: "Overs Session",
      price: `₹${tenOvers.regularPrice}`,
      period: `per session (${tenOvers.durationLabel})`,
      features: tenOvers.features,
      popular: false,
    },
    {
      id: twentyOvers.id,
      title: twentyOvers.title,
      category: "Overs Session",
      price: `₹${twentyOvers.regularPrice}`,
      period: `per session (${twentyOvers.durationLabel})`,
      features: twentyOvers.features,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-cave-black px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Transparent Rates
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            Session <span className="punch-out-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Affordable, pay-per-session rates for time slots and overs packages.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`bg-cave-surface relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 sm:p-8 ${
                plan.popular
                  ? "border-cave-gold shadow-cave-gold/10 border-2 shadow-xl lg:-translate-y-2"
                  : "border-cave-line hover:border-cave-gold/40 border"
              }`}
            >
              {plan.popular && (
                <div className="bg-cave-gold text-cave-black absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[11px] font-black tracking-wider uppercase shadow">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-muted-foreground text-[11px] font-bold tracking-widest uppercase">
                    {plan.category}
                  </span>
                  <h3 className="text-foreground mt-1 text-xl font-extrabold uppercase">
                    {plan.title}
                  </h3>
                </div>

                <div>
                  <span className="text-foreground text-4xl font-black sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground mt-1 block text-xs">
                    {plan.period}
                  </span>
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
                  className="w-full rounded-full py-5 text-xs font-extrabold tracking-wider uppercase"
                >
                  <Link href="/book">Book This Slot</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Pricing Action */}
        <div className="pt-4 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cave-line hover:border-cave-gold hover:text-cave-gold rounded-full px-8 py-6 text-sm font-black tracking-wider uppercase"
          >
            <Link href="/pricing">View All Pricing &amp; Monthly Passes →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
