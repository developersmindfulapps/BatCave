import { PromotionRule } from "@/types/offer";

/**
 * Central promotional offers and campaigns configuration.
 * Change `isActive: false` to disable any promotion and revert automatically to regular pricing.
 */

export const promotionsConfig = {
  /**
   * 1-Hour Bowling Machine Inauguration Month Offer
   * Regular: ₹500 -> Offer: ₹400 (20% OFF)
   */
  inaugural1HourOffer: {
    id: "offer-inaugural-1hr",
    name: "Inauguration Month Offer (1 Hour)",
    type: "AUTOMATIC_OFFER",
    discountType: "PERCENTAGE",
    discountValue: 20,
    targetProductId: "1-hour-session",
    targetCategory: "SINGLE_SESSION",
    badgeText: "Inauguration Month Offer • 20% OFF",
    subtext: "Limited period inauguration rate for 1 full hour",
    isActive: true,
  } as PromotionRule,

  /**
   * Group Coaching Inauguration Offer
   * Regular: ₹5,000/mo -> Offer: ₹4,000/mo (20% OFF for first 20 registrations)
   */
  inauguralGroupCoachingOffer: {
    id: "offer-inaugural-group-coaching",
    name: "Inauguration Group Coaching (First 20 Registrations)",
    type: "AUTOMATIC_OFFER",
    discountType: "PERCENTAGE",
    discountValue: 20,
    targetProductId: "group-coaching",
    targetCategory: "COACHING",
    badgeText: "First 20 Registrations • 20% OFF",
    subtext: "Inaugural 20% discount applied for first 20 players",
    maxUsageCount: 20,
    isActive: true,
  } as PromotionRule,

  /**
   * Mock example of a future coupon code for architecture preparation
   */
  sampleCoupon: {
    id: "coupon-early-bird",
    name: "Early Bird Discount",
    type: "COUPON_CODE",
    code: "BATCAVE10",
    discountType: "PERCENTAGE",
    discountValue: 10,
    targetProductId: "all",
    targetCategory: "ALL",
    badgeText: "Coupon: BATCAVE10",
    isActive: false,
  } as PromotionRule,
};

/**
 * Calculates effective price after applying a promotion rule if active.
 */
export function calculateDiscountedPrice(
  regularPrice: number,
  offer?: PromotionRule
): { effectivePrice: number; discountAmount: number; hasDiscount: boolean } {
  if (!offer || !offer.isActive) {
    return {
      effectivePrice: regularPrice,
      discountAmount: 0,
      hasDiscount: false,
    };
  }

  let discountAmount = 0;
  if (offer.discountType === "PERCENTAGE") {
    discountAmount = Math.round((regularPrice * offer.discountValue) / 100);
  } else if (offer.discountType === "FIXED_AMOUNT") {
    discountAmount = Math.min(offer.discountValue, regularPrice);
  }

  const effectivePrice = Math.max(0, regularPrice - discountAmount);

  return {
    effectivePrice,
    discountAmount,
    hasDiscount: discountAmount > 0,
  };
}
