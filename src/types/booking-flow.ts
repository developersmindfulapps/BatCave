export type BookingStep = 1 | 2 | 3 | 4;

export type BookingCategory =
  "TIME_BASED" | "OVERS_PACKAGE" | "MONTHLY_PLAN" | "COACHING";

export type PaymentOption = "ADVANCE_30" | "FULL_PAYMENT";

export type OtpState = "IDLE" | "SENT" | "VERIFIED" | "ERROR";

export interface SelectedSession {
  id: string;
  category: BookingCategory;
  title: string;
  subtext?: string;
  durationMinutes: number; // 30, 60, etc. (0 for coaching where batch timing applies)
  durationLabel: string;
  regularPrice: number;
  effectivePrice: number;
  isOfferActive?: boolean;
  offerBadge?: string;
  ruleNote?: string; // e.g. "Must be completed in one session."
}

export interface TimeSlotOption {
  time24: string; // "06:00", "06:30", ..., "23:00"
  timeFormatted: string; // "06:00 AM"
  endTimeFormatted: string; // "07:00 AM"
  status: "AVAILABLE" | "NET_1_ONLY" | "NET_2_ONLY" | "FULL" | "UNAVAILABLE";
  net1Available: boolean;
  net2Available: boolean;
}

export interface DayOption {
  dateString: string; // "YYYY-MM-DD"
  dayOfWeek: string; // "Mon", "Tue"
  dayNumber: number; // 15
  monthShort: string; // "Aug"
  fullFormatted: string; // "Saturday, 15 August 2026"
  isAvailable: boolean;
}

export interface CustomerData {
  fullName: string;
  phone: string;
  email: string;
}

export interface BookingState {
  step: BookingStep;
  session: SelectedSession | null;
  selectedDate: DayOption | null;
  selectedSlot: TimeSlotOption | null;
  selectedNet: "net-1" | "net-2" | "both" | null;
  customer: CustomerData;
  mobileVerified: boolean;
  otpState: OtpState;
  paymentOption: PaymentOption;
  amountToPay: number;
  remainingAmount: number;
  confirmedBookingId: string | null;
  bookingStatus: "IDLE" | "VERIFY_AND_PAY" | "CONFIRMED";
}
