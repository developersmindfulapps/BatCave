export type BookingSessionType = "TIME" | "OVERS";

export type BookingStatus =
  | "HOLD"
  | "PENDING_PAYMENT"
  | "CONFIRMED"
  | "CANCELLED"
  | "COMPLETED"
  | "NO_SHOW";

export type PaymentStatus =
  "PENDING" | "PARTIAL" | "COMPLETED" | "FAILED" | "REFUNDED";

export interface BookingSlotRequest {
  netId: string;
  date: string; // ISO date string (YYYY-MM-DD)
  startTime: string; // HH:MM
  endTime?: string; // HH:MM (for TIME type)
  oversCount?: number; // (for OVERS type)
  sessionType: BookingSessionType;
  customerMobile: string;
  customerName?: string;
  usePassId?: string;
}

export interface BookingSummary {
  id: string;
  netId: string;
  date: string;
  startTime: string;
  endTime: string;
  sessionType: BookingSessionType;
  status: BookingStatus;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  customerMobile: string;
  customerName?: string;
  createdAt: string;
}
