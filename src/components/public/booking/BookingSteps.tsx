"use client";

import { BookingStep } from "@/types/booking-flow";
import { Check } from "lucide-react";

interface BookingStepsProps {
  currentStep: BookingStep;
  onStepClick?: (step: BookingStep) => void;
  maxAccessibleStep: BookingStep;
}

const steps: { step: BookingStep; label: string }[] = [
  { step: 1, label: "Session" },
  { step: 2, label: "Date & Time" },
  { step: 3, label: "Details" },
  { step: 4, label: "Verify & Pay" },
];

export function BookingSteps({
  currentStep,
  onStepClick,
  maxAccessibleStep,
}: BookingStepsProps) {
  return (
    <div className="border-cave-line/60 bg-cave-surface/50 w-full border-b py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-2 sm:gap-4">
          {steps.map((item) => {
            const isActive = currentStep === item.step;
            const isCompleted = currentStep > item.step;
            const isClickable = item.step <= maxAccessibleStep && onStepClick;

            return (
              <button
                key={item.step}
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick?.(item.step)}
                className={`flex flex-col items-center gap-1.5 rounded-2xl px-1 py-2 transition-all ${
                  isClickable
                    ? "hover:bg-cave-elevated/80 cursor-pointer"
                    : "cursor-default opacity-50"
                } ${isActive ? "opacity-100" : ""}`}
              >
                {/* Step indicator circle / number */}
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black transition-all sm:h-8 sm:w-8 ${
                    isActive
                      ? "bg-cave-gold text-cave-black shadow-cave-gold/20 scale-105 shadow-lg"
                      : isCompleted
                        ? "bg-cave-gold/20 text-cave-gold border-cave-gold/40 border"
                        : "bg-cave-elevated text-muted-foreground border-cave-line border"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    `0${item.step}`
                  )}
                </div>

                {/* Step label */}
                <span
                  className={`line-clamp-1 text-center text-[10px] font-black tracking-wider uppercase sm:text-xs ${
                    isActive ? "text-cave-gold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
