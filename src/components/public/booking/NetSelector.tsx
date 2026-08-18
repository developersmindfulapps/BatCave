"use client";

import { Check, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TimeSlotOption, SelectedSession } from "@/types/booking-flow";

interface NetSelectorProps {
  selectedSlot: TimeSlotOption | null;
  selectedNet: "net-1" | "net-2" | "both" | null;
  onSelectNet: (net: "net-1" | "net-2" | "both") => void;
  session: SelectedSession | null;
}

export function NetSelector({
  selectedSlot,
  selectedNet,
  onSelectNet,
  session,
}: NetSelectorProps) {
  if (!selectedSlot) return null;

  const isCoaching = session?.category === "COACHING";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-cave-gold h-4 w-4" />
          <h3 className="text-foreground text-sm font-extrabold tracking-wider uppercase">
            {isCoaching ? "Net Allocation" : "Select Net"}
          </h3>
        </div>
        {selectedNet && (
          <span className="text-cave-gold text-xs font-bold uppercase">
            {selectedNet === "net-1"
              ? "Net 1 Selected"
              : selectedNet === "net-2"
                ? "Net 2 Selected"
                : "Full Facility (2 Nets)"}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Net 1 Card */}
        <Card
          onClick={() => selectedSlot.net1Available && onSelectNet("net-1")}
          className={`flex flex-col justify-between rounded-2xl p-5 transition-all ${
            !selectedSlot.net1Available
              ? "bg-cave-surface/40 border-cave-line/30 cursor-not-allowed opacity-40 select-none"
              : "hover:border-cave-gold/50 cursor-pointer"
          } ${
            selectedNet === "net-1"
              ? "bg-cave-surface border-cave-gold shadow-cave-gold/10 border-2 shadow-xl"
              : "bg-cave-surface border-cave-line border"
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-cave-gold text-xs font-bold tracking-widest uppercase">
                Lane 01
              </span>
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  selectedNet === "net-1"
                    ? "bg-cave-gold text-cave-black border-cave-gold"
                    : "border-cave-line text-transparent"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </div>
            </div>

            <div>
              <h4 className="text-foreground text-xl font-black uppercase">
                Net 1
              </h4>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-300">
                <Zap className="text-cave-gold h-3.5 w-3.5 shrink-0" />
                <span>Dedicated Bowling Machine 1</span>
              </div>
            </div>
          </div>

          <div className="border-cave-line/60 mt-4 flex items-center justify-between border-t pt-4">
            <span className="text-muted-foreground text-[11px]">
              Speed &amp; Pace Drills
            </span>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                selectedSlot.net1Available
                  ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  : "border border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              {selectedSlot.net1Available ? "Available" : "Booked"}
            </span>
          </div>
        </Card>

        {/* Net 2 Card */}
        <Card
          onClick={() => selectedSlot.net2Available && onSelectNet("net-2")}
          className={`flex flex-col justify-between rounded-2xl p-5 transition-all ${
            !selectedSlot.net2Available
              ? "bg-cave-surface/40 border-cave-line/30 cursor-not-allowed opacity-40 select-none"
              : "hover:border-cave-gold/50 cursor-pointer"
          } ${
            selectedNet === "net-2"
              ? "bg-cave-surface border-cave-gold shadow-cave-gold/10 border-2 shadow-xl"
              : "bg-cave-surface border-cave-line border"
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-cave-gold text-xs font-bold tracking-widest uppercase">
                Lane 02
              </span>
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  selectedNet === "net-2"
                    ? "bg-cave-gold text-cave-black border-cave-gold"
                    : "border-cave-line text-transparent"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </div>
            </div>

            <div>
              <h4 className="text-foreground text-xl font-black uppercase">
                Net 2
              </h4>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-300">
                <Zap className="text-cave-gold h-3.5 w-3.5 shrink-0" />
                <span>Dedicated Bowling Machine 2</span>
              </div>
            </div>
          </div>

          <div className="border-cave-line/60 mt-4 flex items-center justify-between border-t pt-4">
            <span className="text-muted-foreground text-[11px]">
              Spin &amp; Technique Drills
            </span>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                selectedSlot.net2Available
                  ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  : "border border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              {selectedSlot.net2Available ? "Available" : "Booked"}
            </span>
          </div>
        </Card>
      </div>

      {!selectedSlot.net1Available && !selectedSlot.net2Available && (
        <p className="text-center text-xs font-semibold text-red-400">
          No nets available for this time. Please select another slot.
        </p>
      )}
    </div>
  );
}
