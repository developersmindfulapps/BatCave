"use client";

import { DayOption } from "@/types/booking-flow";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface DateSelectorProps {
  dates: DayOption[];
  selectedDate: DayOption | null;
  onSelectDate: (date: DayOption) => void;
}

export function DateSelector({
  dates,
  selectedDate,
  onSelectDate,
}: DateSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="text-cave-gold h-4 w-4" />
          <h3 className="text-foreground text-sm font-extrabold tracking-wider uppercase">
            Select Date
          </h3>
        </div>
        {selectedDate && (
          <span className="text-cave-gold text-xs font-bold">
            {selectedDate.fullFormatted}
          </span>
        )}
      </div>

      {/* Date Carousel / Grid */}
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {dates.map((item) => {
          const isSelected = selectedDate?.dateString === item.dateString;

          if (!item.isAvailable) {
            return (
              <div
                key={item.dateString}
                className="bg-cave-surface/40 border-cave-line/30 flex cursor-not-allowed flex-col items-center justify-center rounded-2xl border p-3 text-center opacity-30 select-none"
              >
                <span className="text-muted-foreground text-[10px] font-bold uppercase">
                  {item.dayOfWeek}
                </span>
                <span className="text-muted-foreground text-base font-black">
                  {item.dayNumber}
                </span>
                <span className="text-[9px] tracking-wider text-red-400 uppercase">
                  Closed
                </span>
              </div>
            );
          }

          return (
            <Card
              key={item.dateString}
              onClick={() => onSelectDate(item)}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl p-3 text-center transition-all ${
                isSelected
                  ? "bg-cave-gold text-cave-black border-cave-gold shadow-cave-gold/20 scale-105 border-2 shadow-lg"
                  : "bg-cave-surface border-cave-line hover:border-cave-gold/50 text-foreground"
              }`}
            >
              <span
                className={`text-[10px] font-bold tracking-wider uppercase ${
                  isSelected ? "text-cave-black" : "text-muted-foreground"
                }`}
              >
                {item.dayOfWeek}
              </span>
              <span className="text-lg font-black">{item.dayNumber}</span>
              <span
                className={`text-[10px] font-bold uppercase ${
                  isSelected ? "text-cave-black/80" : "text-cave-gold"
                }`}
              >
                {item.monthShort}
              </span>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
