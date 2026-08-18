import Link from "next/link";
import { Check, Info, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";

export function OversPackages() {
  const packages = pricingConfig.oversPackages;

  return (
    <section
      id="overs-packages"
      className="bg-cave-surface border-cave-line/80 border-y px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Per Session
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Overs Claim <span className="punch-out-text">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Count your practice by deliveries. Exact overs packages powered by
            automated precision machines.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="bg-cave-elevated border-cave-line hover:border-cave-gold/40 flex flex-col justify-between rounded-3xl p-6 transition-all sm:p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                    {pkg.ballsCount} Balls
                  </span>
                  <div className="bg-cave-black border-cave-line text-cave-gold flex h-8 w-8 items-center justify-center rounded-full border">
                    <Target className="h-4 w-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-foreground text-2xl font-black uppercase">
                    {pkg.title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-foreground text-4xl font-black">
                      ₹{pkg.regularPrice}
                    </span>
                    <span className="text-muted-foreground text-xs font-bold uppercase">
                      / package
                    </span>
                  </div>
                  <div className="bg-cave-black text-cave-gold border-cave-line mt-2 inline-block rounded-md border px-2.5 py-1 text-[11px] font-bold">
                    {pkg.sessionSplitLabel}
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2 text-xs text-gray-300">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-cave-gold h-3.5 w-3.5 shrink-0" />
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
                  <Link href="/book">Book {pkg.title}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Informational notice */}
        <div className="bg-cave-black border-cave-line/80 mx-auto flex max-w-2xl items-start gap-3 rounded-2xl border p-4 md:mx-0">
          <Info className="text-cave-gold mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground">Session Split Rule:</strong> 10
            and 20 overs packages must be completed within a single session. 30
            and 40 overs packages can be split across two separate practice
            sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
