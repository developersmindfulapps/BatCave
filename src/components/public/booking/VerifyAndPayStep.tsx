"use client";

import { useState } from "react";
import { CreditCard, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SelectedSession,
  DayOption,
  TimeSlotOption,
  CustomerData,
  PaymentOption,
} from "@/types/booking-flow";
import { BOOKING_CONFIG } from "@/config/booking-mock";
import { MobileOtpVerification } from "./MobileOtpVerification";
import { PaymentOptionSelector } from "./PaymentOptionSelector";

interface VerifyAndPayStepProps {
  session: SelectedSession;
  selectedDate: DayOption;
  selectedSlot: TimeSlotOption;
  selectedNet: "net-1" | "net-2" | "both";
  customer: CustomerData;
  mobileVerified: boolean;
  onMobileVerified: () => void;
  paymentOption: PaymentOption;
  onSelectPaymentOption: (opt: PaymentOption) => void;
  onPaymentSuccess: (paidAmount: number, remainingAmount: number) => void;
  onBack: () => void;
}

export function VerifyAndPayStep({
  session,
  selectedDate,
  selectedSlot,
  selectedNet,
  customer,
  mobileVerified,
  onMobileVerified,
  paymentOption,
  onSelectPaymentOption,
  onPaymentSuccess,
  onBack,
}: VerifyAndPayStepProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = session.effectivePrice;
  const isFullPayment = paymentOption === "FULL_PAYMENT";
  const advanceAmount = Math.round(
    (totalPrice * BOOKING_CONFIG.advancePercent) / 100
  );

  const amountToPay = isFullPayment ? totalPrice : advanceAmount;
  const remainingAmount = isFullPayment ? 0 : totalPrice - advanceAmount;

  const handleSimulatePayment = () => {
    if (!mobileVerified) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess(amountToPay, remainingAmount);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
          Step 04
        </span>
        <h2 className="text-foreground text-2xl font-black uppercase sm:text-3xl">
          Verify &amp; <span className="punch-out-text">Pay</span>
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Verify your mobile number via OTP and choose your payment preference.
        </p>
      </div>

      {/* 1. Mobile OTP Verification Gate */}
      <MobileOtpVerification
        phone={customer.phone}
        isVerified={mobileVerified}
        onVerificationSuccess={onMobileVerified}
      />

      {/* 2. Payment Option Selector (Unlocked only when verified) */}
      <PaymentOptionSelector
        totalPrice={totalPrice}
        selectedOption={paymentOption}
        onSelectOption={onSelectPaymentOption}
        disabled={!mobileVerified}
      />

      {/* 3. Review & Payment Trigger */}
      <Card className="bg-cave-surface border-cave-line space-y-6 rounded-3xl border p-6 sm:p-8">
        <div className="border-cave-line/60 flex items-center justify-between border-b pb-4">
          <div>
            <span className="text-cave-gold block text-[10px] font-bold tracking-widest uppercase">
              Reservation Summary
            </span>
            <h3 className="text-foreground text-lg font-black uppercase">
              {session.title}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-muted-foreground block text-xs uppercase">
              Total Price
            </span>
            <span className="text-foreground text-base font-extrabold">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Customer & Slot Grid */}
        <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
          <div className="bg-cave-elevated border-cave-line/60 space-y-1 rounded-2xl border p-3.5">
            <span className="text-muted-foreground text-[10px] font-bold uppercase">
              Customer
            </span>
            <p className="text-foreground font-bold">{customer.fullName}</p>
            <p className="text-muted-foreground text-[11px]">
              {customer.phone}
            </p>
          </div>

          <div className="bg-cave-elevated border-cave-line/60 space-y-1 rounded-2xl border p-3.5">
            <span className="text-muted-foreground text-[10px] font-bold uppercase">
              Slot &amp; Net
            </span>
            <p className="text-foreground font-bold">
              {selectedDate.fullFormatted.split(",")[0]},{" "}
              {selectedSlot.timeFormatted}
            </p>
            <p className="text-muted-foreground text-[11px]">
              {selectedNet === "net-1"
                ? "Net 1 (Machine 1)"
                : selectedNet === "net-2"
                  ? "Net 2 (Machine 2)"
                  : "Full Facility (2 Nets)"}
            </p>
          </div>
        </div>

        {/* Dynamic Amount Payable Banner */}
        <div className="bg-cave-black border-cave-gold/60 space-y-2 rounded-2xl border-2 p-6 text-center">
          <span className="text-cave-gold block text-xs font-bold tracking-widest uppercase">
            {isFullPayment
              ? "Amount Payable Now (Full 100%)"
              : "Amount Payable Now (30% Advance)"}
          </span>
          <div className="text-foreground text-4xl font-black sm:text-5xl">
            ₹{amountToPay.toLocaleString("en-IN")}
          </div>
          <p className="text-muted-foreground text-xs">
            {isFullPayment
              ? "Full payment settled online. No venue payment required."
              : `Remaining balance of ₹${remainingAmount.toLocaleString("en-IN")} payable at venue upon arrival.`}
          </p>
        </div>

        {/* Prototype notice */}
        <div className="text-muted-foreground flex items-center justify-center gap-2 text-xs">
          <Lock className="text-cave-gold h-3.5 w-3.5" />
          <span>Stage 1 UI Prototype • Simulated Instant Confirmation</span>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button
          type="button"
          onClick={onBack}
          disabled={isProcessing}
          variant="outline"
          className="border-cave-line hover:border-cave-gold hover:text-cave-gold rounded-full py-6 text-xs font-bold tracking-wider uppercase sm:w-1/3"
        >
          ← Back
        </Button>

        <Button
          onClick={handleSimulatePayment}
          disabled={isProcessing || !mobileVerified}
          size="lg"
          className="bg-cave-gold text-cave-black shadow-cave-gold/10 flex-1 rounded-full py-6 text-xs font-black tracking-wider uppercase shadow-xl transition-all hover:bg-white disabled:opacity-40"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing Confirmation...
            </span>
          ) : !mobileVerified ? (
            "Verify Mobile To Proceed"
          ) : isFullPayment ? (
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Pay ₹{amountToPay.toLocaleString("en-IN")} &amp; Confirm
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Pay ₹{amountToPay.toLocaleString("en-IN")} Advance &amp; Confirm
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
