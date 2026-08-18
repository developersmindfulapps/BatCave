export type PassType = "MONTHLY_HOURS" | "MONTHLY_OVERS" | "CUSTOM";

export interface CustomerPassSummary {
  id: string;
  customerId: string;
  passType: PassType;
  title: string;
  totalUnits: number; // total hours or overs
  remainingUnits: number;
  unitType: "HOURS" | "OVERS";
  validFrom: string;
  validUntil: string;
  isActive: boolean;
}
