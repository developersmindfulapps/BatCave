import {
  SelectedSession,
  DayOption,
  TimeSlotOption,
  PaymentOption,
} from "@/types/booking-flow";
import { Card } from "@/components/ui/card";
import {
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { BOOKING_CONFIG } from "@/config/booking-mock";

interface BookingSummaryProps {
  session: SelectedSession | null;
  selectedDate: DayOption | null;
  selectedSlot: TimeSlotOption | null;
  selectedNet: "net-1" | "net-2" | "both" | null;
  paymentOption?: PaymentOption;
  className?: string;
}

export function BookingSummary({
  session,
  selectedDate,
  selectedSlot,
  selectedNet,
  paymentOption = "ADVANCE_30",
  className = "",
}: BookingSummaryProps) {
  const totalPrice = session?.effectivePrice || 0;
  const isFullPayment = paymentOption === "FULL_PAYMENT";

  const advanceAmount = Math.round(
    (totalPrice * BOOKING_CONFIG.advancePercent) / 100
  );
  const payNowAmount = isFullPayment ? totalPrice : advanceAmount;
  const remainingAtVenue = isFullPayment ? 0 : totalPrice - advanceAmount;

  return (
    <Card
      className={`bg-cave-surface border-cave-line flex flex-col justify-between space-y-6 rounded-3xl border p-6 sm:p-8 ${className}`}
    >
      <div className="space-y-6">
        {/* Card Header */}
        <div className="border-cave-line/60 flex items-center justify-between border-b pb-4">
          <span className="text-cave-gold text-xs font-black tracking-[0.25em] uppercase">
            Booking Summary
          </span>
          <div className="bg-cave-elevated border-cave-line text-cave-gold flex h-8 w-8 items-center justify-center rounded-full border">
            <ShieldCheck className="h-4 w-4" />
          </div>
        </div>

        {/* Selected Details List */}
        <div className="space-y-4 text-xs">
          {/* Session */}
          <div className="space-y-1">
            <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
              Selected Session
            </span>
            {session ? (
              <div>
                <p className="text-foreground text-sm font-extrabold uppercase">
                  {session.title}
                </p>
                <p className="text-muted-foreground text-[11px]">
                  {session.durationLabel}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground/60 italic">
                No session selected yet
              </p>
            )}
          </div>

          {/* Date & Time */}
          <div className="border-cave-line/40 grid grid-cols-2 gap-3 border-t pt-2">
            <div className="space-y-1">
              <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase">
                <Calendar className="text-cave-gold h-3 w-3" />
                Date
              </span>
              <p className="text-foreground font-bold">
                {selectedDate
                  ? selectedDate.fullFormatted.split(",")[0] +
                    ", " +
                    selectedDate.dayNumber +
                    " " +
                    selectedDate.monthShort
                  : "—"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase">
                <Clock className="text-cave-gold h-3 w-3" />
                Time
              </span>
              <p className="text-foreground font-bold">
                {selectedSlot
                  ? `${selectedSlot.timeFormatted} – ${selectedSlot.endTimeFormatted}`
                  : "—"}
              </p>
            </div>
          </div>

          {/* Net Allocation */}
          <div className="border-cave-line/40 space-y-1 border-t pt-2">
            <span className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase">
              <MapPin className="text-cave-gold h-3 w-3" />
              Practice Net
            </span>
            <p className="text-foreground font-bold">
              {selectedNet === "net-1"
                ? "Net 1 (Bowling Machine 1)"
                : selectedNet === "net-2"
                  ? "Net 2 (Bowling Machine 2)"
                  : selectedNet === "both"
                    ? "Full Facility (2 Nets)"
                    : "—"}
            </p>
          </div>
        </div>

        {/* Dynamic Pricing Calculation Breakdown */}
        <div className="border-cave-line/60 space-y-3 border-t pt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Total Amount:</span>
            <span className="text-foreground text-sm font-extrabold">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="text-cave-gold flex items-center justify-between text-xs font-black">
            <span>
              {isFullPayment
                ? "Pay Now (Full 100%):"
                : "Pay Now (30% Advance):"}
            </span>
            <span className="text-base">
              ₹{payNowAmount.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span>Pay at Venue:</span>
            <span
              className={`font-semibold ${
                isFullPayment ? "text-emerald-400" : "text-foreground"
              }`}
            >
              {isFullPayment
                ? "₹0 (Fully Paid)"
                : `₹${remainingAtVenue.toLocaleString("en-IN")}`}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Policy Notice */}
      <div className="border-cave-line/60 text-muted-foreground flex items-start gap-2 border-t pt-4 text-[11px]">
        <AlertCircle className="text-cave-gold mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>
          {isFullPayment
            ? "Full payment completed online. No venue payment required."
            : "30% online advance secures your booking. Remaining 70% payable at venue."}
        </span>
      </div>
    </Card>
  );
}
