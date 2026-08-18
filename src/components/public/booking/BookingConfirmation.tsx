"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  MapPin,
  Ticket,
  ArrowRight,
  Home,
  User,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SelectedSession,
  DayOption,
  TimeSlotOption,
  CustomerData,
  PaymentOption,
} from "@/types/booking-flow";

interface BookingConfirmationProps {
  bookingId: string;
  session: SelectedSession;
  selectedDate: DayOption;
  selectedSlot: TimeSlotOption;
  selectedNet: "net-1" | "net-2" | "both";
  customer: CustomerData;
  paidAmount: number;
  remainingAmount: number;
  paymentOption: PaymentOption;
  onBookAnother: () => void;
}

export function BookingConfirmation({
  bookingId,
  session,
  selectedDate,
  selectedSlot,
  selectedNet,
  customer,
  paidAmount,
  remainingAmount,
  paymentOption,
  onBookAnother,
}: BookingConfirmationProps) {
  const totalPrice = session.effectivePrice;
  const isFullPayment = paymentOption === "FULL_PAYMENT";

  return (
    <div className="mx-auto max-w-2xl space-y-8 py-6 text-center">
      {/* Success Badge / Icon */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex h-16 w-16 animate-bounce items-center justify-center rounded-full border-2 border-emerald-500/40 bg-emerald-500/20 text-emerald-400 shadow-xl shadow-emerald-950/20">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="text-xs font-black tracking-[0.3em] text-emerald-400 uppercase">
          Booking Confirmed
        </span>
        <h2 className="text-foreground text-3xl font-black uppercase sm:text-5xl">
          You&apos;re Ready <span className="punch-out-text">To Play!</span>
        </h2>
        <p className="text-muted-foreground max-w-md text-xs sm:text-sm">
          A confirmation summary has been registered for {customer.fullName} (
          {customer.phone}).
        </p>
      </div>

      {/* Ticket / Confirmation Receipt Card */}
      <Card className="bg-cave-surface border-cave-gold/60 shadow-cave-gold/10 space-y-6 rounded-3xl border-2 p-6 text-left shadow-2xl sm:p-8">
        {/* Booking ID Header */}
        <div className="border-cave-line flex items-center justify-between border-b pb-4">
          <div>
            <span className="text-muted-foreground block text-[10px] font-bold tracking-widest uppercase">
              Booking Reference
            </span>
            <span className="text-cave-gold text-xl font-black tracking-wider">
              {bookingId}
            </span>
          </div>
          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-black text-emerald-400 uppercase">
            {isFullPayment ? "100% Fully Paid" : "30% Advance Paid"}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
          {/* Customer */}
          <div className="space-y-1">
            <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold uppercase">
              <User className="text-cave-gold h-3 w-3" />
              Customer
            </span>
            <p className="text-foreground font-extrabold">
              {customer.fullName}
            </p>
            <p className="text-muted-foreground text-[11px]">
              {customer.phone}
            </p>
          </div>

          {/* Session */}
          <div className="space-y-1">
            <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold uppercase">
              <Ticket className="text-cave-gold h-3 w-3" />
              Session
            </span>
            <p className="text-foreground font-extrabold uppercase">
              {session.title}
            </p>
            <p className="text-muted-foreground text-[11px]">
              {session.durationLabel}
            </p>
          </div>

          {/* Date & Time */}
          <div className="border-cave-line/40 space-y-1 border-t pt-2">
            <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold uppercase">
              <Calendar className="text-cave-gold h-3 w-3" />
              Date &amp; Time
            </span>
            <p className="text-foreground font-extrabold">
              {selectedDate.fullFormatted.split(",")[0]},{" "}
              {selectedDate.dayNumber} {selectedDate.monthShort}
            </p>
            <p className="text-muted-foreground text-[11px]">
              {selectedSlot.timeFormatted} – {selectedSlot.endTimeFormatted}
            </p>
          </div>

          {/* Net */}
          <div className="border-cave-line/40 space-y-1 border-t pt-2">
            <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold uppercase">
              <MapPin className="text-cave-gold h-3 w-3" />
              Net Allocation
            </span>
            <p className="text-foreground font-extrabold">
              {selectedNet === "net-1"
                ? "Net 1 (Bowling Machine 1)"
                : selectedNet === "net-2"
                  ? "Net 2 (Bowling Machine 2)"
                  : "Full Facility (2 Nets)"}
            </p>
            <p className="text-muted-foreground text-[11px]">
              Kanispura, Baramulla
            </p>
          </div>
        </div>

        {/* Payment Receipt Box */}
        <div className="bg-cave-elevated border-cave-line/60 space-y-2 rounded-2xl border p-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1.5">
              <CreditCard className="text-cave-gold h-3.5 w-3.5" />
              Total Session Amount:
            </span>
            <span className="text-foreground font-bold">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center justify-between font-black text-emerald-400">
            <span>Online Amount Paid:</span>
            <span>₹{paidAmount.toLocaleString("en-IN")}</span>
          </div>

          <div className="text-muted-foreground border-cave-line/40 flex items-center justify-between border-t pt-1">
            <span>Remaining Balance at Venue:</span>
            <span
              className={
                remainingAmount === 0
                  ? "font-bold text-emerald-400"
                  : "text-foreground font-bold"
              }
            >
              {remainingAmount === 0
                ? "₹0 (Fully Paid)"
                : `₹${remainingAmount.toLocaleString("en-IN")}`}
            </span>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-cave-gold text-cave-black w-full rounded-full px-8 py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white sm:w-auto"
        >
          <Link href="/account/bookings">
            View My Bookings <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>

        <Button
          type="button"
          onClick={onBookAnother}
          variant="outline"
          size="lg"
          className="border-cave-line hover:border-cave-gold hover:text-cave-gold w-full rounded-full px-8 py-6 text-xs font-black tracking-wider uppercase sm:w-auto"
        >
          Book Another Slot
        </Button>

        <Button
          asChild
          variant="ghost"
          size="lg"
          className="text-muted-foreground hover:text-foreground w-full rounded-full px-6 py-6 text-xs font-bold tracking-wider uppercase sm:w-auto"
        >
          <Link href="/">
            <Home className="mr-1.5 h-4 w-4" /> Back To Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
