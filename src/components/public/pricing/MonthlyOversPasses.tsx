import Link from "next/link";
import { Check, ShieldCheck, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";

export function MonthlyOversPasses() {
  const passes = pricingConfig.monthlyOversPasses;

  return (
    <section
      id="monthly-overs"
      className="bg-cave-surface border-cave-line/80 border-y px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
            Monthly Pass
          </span>
          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Monthly Over <span className="punch-out-text">Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Pass-based monthly packages that credit your account with regular
            delivery quotas.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-3">
          {passes.map((pass) => (
            <Card
              key={pass.id}
              className="bg-cave-elevated border-cave-line hover:border-cave-gold/40 flex flex-col justify-between rounded-3xl p-6 transition-all sm:p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                    {pass.subtext}
                  </span>
                  <div className="bg-cave-black border-cave-line text-cave-gold flex h-8 w-8 items-center justify-center rounded-full border">
                    <Ticket className="h-4 w-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-foreground text-2xl font-black uppercase">
                    {pass.title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-foreground text-4xl font-black sm:text-5xl">
                      ₹{pass.regularPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-muted-foreground text-xs font-bold uppercase">
                      {pass.periodLabel}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-xs text-gray-300 sm:text-sm">
                  {pass.features.map((feat, i) => (
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
                  variant="outline"
                  className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full py-5 text-xs font-black tracking-wider uppercase"
                >
                  <Link href="/book">Purchase Pass</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* How Monthly Passes Work Note */}
        <div className="bg-cave-black border-cave-line/80 mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border p-4 md:mx-0">
          <ShieldCheck className="text-cave-gold mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground">
              How Monthly Passes Work:
            </strong>{" "}
            Monthly passes give you a dedicated overs balance. A slot must be
            booked in advance each time you want to use your pass to guarantee
            your net and bowling machine.
          </p>
        </div>
      </div>
    </section>
  );
}
