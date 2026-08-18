"use client";

import { TimeSlotOption } from "@/types/booking-flow";
import { Clock, Sun, Sunset, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TimeSlotSelectorProps {
  slots: TimeSlotOption[];
  selectedSlot: TimeSlotOption | null;
  onSelectSlot: (slot: TimeSlotOption) => void;
}

export function TimeSlotSelector({
  slots,
  selectedSlot,
  onSelectSlot,
}: TimeSlotSelectorProps) {
  // Group slots by period
  const morningSlots = slots.filter((s) => {
    const hour = parseInt(s.time24.split(":")[0], 10);
    return hour >= 6 && hour < 12;
  });

  const afternoonSlots = slots.filter((s) => {
    const hour = parseInt(s.time24.split(":")[0], 10);
    return hour >= 12 && hour < 17;
  });

  const eveningSlots = slots.filter((s) => {
    const hour = parseInt(s.time24.split(":")[0], 10);
    return hour >= 17 && hour < 21;
  });

  const nightSlots = slots.filter((s) => {
    const hour = parseInt(s.time24.split(":")[0], 10);
    return hour >= 21 && hour < 24;
  });

  const groups = [
    {
      title: "Morning",
      sub: "06:00 AM – 12:00 PM",
      icon: Sun,
      items: morningSlots,
    },
    {
      title: "Afternoon",
      sub: "12:00 PM – 05:00 PM",
      icon: Sun,
      items: afternoonSlots,
    },
    {
      title: "Evening",
      sub: "05:00 PM – 09:00 PM",
      icon: Sunset,
      items: eveningSlots,
    },
    {
      title: "Night",
      sub: "09:00 PM – 12:00 AM",
      icon: Moon,
      items: nightSlots,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="text-cave-gold h-4 w-4" />
          <h3 className="text-foreground text-sm font-extrabold tracking-wider uppercase">
            Select Time Slot
          </h3>
        </div>
        {selectedSlot && (
          <span className="text-cave-gold text-xs font-bold">
            {selectedSlot.timeFormatted} – {selectedSlot.endTimeFormatted}
          </span>
        )}
      </div>

      <div className="space-y-5">
        {groups.map((group) => {
          if (group.items.length === 0) return null;
          const Icon = group.icon;

          return (
            <div key={group.title} className="space-y-2.5">
              <div className="text-muted-foreground flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                <Icon className="text-cave-gold h-3.5 w-3.5" />
                <span>{group.title}</span>
                <span className="text-muted-foreground/60 text-[10px] font-normal">
                  ({group.sub})
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {group.items.map((slot) => {
                  const isSelected = selectedSlot?.time24 === slot.time24;
                  const isFull =
                    slot.status === "FULL" || slot.status === "UNAVAILABLE";

                  if (isFull) {
                    return (
                      <div
                        key={slot.time24}
                        className="bg-cave-surface/40 border-cave-line/30 flex cursor-not-allowed flex-col items-center justify-center rounded-2xl border p-3 text-center opacity-35 select-none"
                      >
                        <span className="text-muted-foreground text-xs font-black">
                          {slot.timeFormatted}
                        </span>
                        <span className="mt-0.5 text-[9px] font-bold tracking-wider text-red-400 uppercase">
                          Booked Full
                        </span>
                      </div>
                    );
                  }

                  return (
                    <Card
                      key={slot.time24}
                      onClick={() => onSelectSlot(slot)}
                      className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl p-3 text-center transition-all ${
                        isSelected
                          ? "bg-cave-gold text-cave-black border-cave-gold shadow-cave-gold/20 scale-105 border-2 shadow-lg"
                          : "bg-cave-surface border-cave-line hover:border-cave-gold/50 border"
                      }`}
                    >
                      <span className="text-xs font-black">
                        {slot.timeFormatted}
                      </span>
                      <span
                        className={`mt-0.5 text-[9px] font-bold tracking-wider uppercase ${
                          isSelected
                            ? "text-cave-black/90 font-black"
                            : slot.status === "AVAILABLE"
                              ? "text-emerald-400"
                              : "text-amber-400"
                        }`}
                      >
                        {slot.status === "AVAILABLE"
                          ? "Available"
                          : slot.status === "NET_1_ONLY"
                            ? "Net 1 Only"
                            : "Net 2 Only"}
                      </span>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
