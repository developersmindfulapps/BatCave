"use client";

import { Check, CreditCard, Sparkles, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PaymentOption } from "@/types/booking-flow";
import { BOOKING_CONFIG } from "@/config/booking-mock";

interface PaymentOptionSelectorProps {
  totalPrice: number;
  selectedOption: PaymentOption;
  onSelectOption: (option: PaymentOption) => void;
  disabled?: boolean;
}

export function PaymentOptionSelector({
  totalPrice,
  selectedOption,
  onSelectOption,
  disabled = false,
}: PaymentOptionSelectorProps) {
  const advanceAmount = Math.round(
    (totalPrice * BOOKING_CONFIG.advancePercent) / 100
  );
  const remainingForAdvance = totalPrice - advanceAmount;

  return (
    <div
      className={`space-y-4 ${disabled ? "pointer-events-none opacity-40" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="text-cave-gold h-4 w-4" />
          <h3 className="text-foreground text-sm font-extrabold tracking-wider uppercase">
            Select Payment Option
          </h3>
        </div>
        <span className="text-cave-gold text-xs font-bold">
          {selectedOption === "ADVANCE_30" ? "30% Advance" : "Full Payment"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Option 1: 30% Advance (Recommended) */}
        <Card
          onClick={() => onSelectOption("ADVANCE_30")}
          className={`relative flex cursor-pointer flex-col justify-between rounded-3xl p-6 transition-all ${
            selectedOption === "ADVANCE_30"
              ? "bg-cave-surface border-cave-gold shadow-cave-gold/10 border-2 shadow-xl"
              : "bg-cave-surface border-cave-line hover:border-cave-gold/40 border"
          }`}
        >
          {/* Badge */}
          <div className="bg-cave-gold text-cave-black absolute -top-3 left-4 flex items-center gap-1 rounded-full px-3 py-0.5 text-[10px] font-black tracking-wider uppercase shadow">
            <Sparkles className="h-3 w-3" />
            Recommended
          </div>

          <div className="space-y-4 pt-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-foreground text-base font-black uppercase">
                  Pay 30% Advance
                </h4>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  Confirm slot now, pay balance at venue
                </p>
              </div>
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  selectedOption === "ADVANCE_30"
                    ? "bg-cave-gold text-cave-black border-cave-gold"
                    : "border-cave-line text-transparent"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="bg-cave-elevated border-cave-line/60 space-y-1.5 rounded-2xl border p-3 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Session:</span>
                <span className="text-foreground font-bold">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="text-cave-gold border-cave-line/40 flex justify-between border-t pt-1 text-sm font-black">
                <span>Pay Now (30%):</span>
                <span>₹{advanceAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="text-muted-foreground flex justify-between text-[11px]">
                <span>Pay at Venue:</span>
                <span className="text-foreground font-semibold">
                  ₹{remainingForAdvance.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Option 2: Pay Full Amount */}
        <Card
          onClick={() => onSelectOption("FULL_PAYMENT")}
          className={`relative flex cursor-pointer flex-col justify-between rounded-3xl p-6 transition-all ${
            selectedOption === "FULL_PAYMENT"
              ? "bg-cave-surface border-cave-gold shadow-cave-gold/10 border-2 shadow-xl"
              : "bg-cave-surface border-cave-line hover:border-cave-gold/40 border"
          }`}
        >
          <div className="space-y-4 pt-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-foreground text-base font-black uppercase">
                  Pay Full Amount
                </h4>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  100% upfront complete payment
                </p>
              </div>
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  selectedOption === "FULL_PAYMENT"
                    ? "bg-cave-gold text-cave-black border-cave-gold"
                    : "border-cave-line text-transparent"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="bg-cave-elevated border-cave-line/60 space-y-1.5 rounded-2xl border p-3 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Session:</span>
                <span className="text-foreground font-bold">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="text-cave-gold border-cave-line/40 flex justify-between border-t pt-1 text-sm font-black">
                <span>Pay Now (100%):</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="text-muted-foreground flex justify-between text-[11px]">
                <span>Pay at Venue:</span>
                <span className="font-semibold text-emerald-400">
                  ₹0 (Fully Paid)
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {disabled && (
        <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-400/80">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>
            Please verify your mobile number with OTP to select payment options.
          </span>
        </div>
      )}
    </div>
  );
}
