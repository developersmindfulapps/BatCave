export type DiscountType = "PERCENTAGE" | "FIXED_AMOUNT";

export type PromotionType = "AUTOMATIC_OFFER" | "COUPON_CODE";

export type OfferTargetCategory =
  | "SINGLE_SESSION"
  | "OVERS_PACKAGE"
  | "MONTHLY_TIME_PLAN"
  | "MONTHLY_OVERS_PASS"
  | "COACHING"
  | "ALL";

export interface PromotionRule {
  id: string;
  name: string;
  description?: string;
  type: PromotionType;
  code?: string; // conceptual: coupon code entered by customer
  discountType: DiscountType;
  discountValue: number; // e.g. 20 for 20% or 100 for ₹100
  targetProductId: string; // e.g. "1-hour-session", "group-coaching"
  targetCategory: OfferTargetCategory;
  badgeText?: string;
  subtext?: string;
  isActive: boolean;
  startDate?: string; // ISO date string (YYYY-MM-DD)
  endDate?: string;
  maxUsageCount?: number;
  usagePerCustomer?: number;
  minBookingAmount?: number;
}
