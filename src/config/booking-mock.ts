import { DayOption, TimeSlotOption } from "@/types/booking-flow";

export const BOOKING_CONFIG = {
  openingHour: 6, // 06:00 AM
  closingHour: 24, // 12:00 AM Midnight (24:00)
  slotIntervalMinutes: 30,
  advancePercent: 30, // 30% online advance
  maxDaysInAdvance: 14,
};

/**
 * Generates the next N days for date selection.
 */
export function getMockDates(
  daysCount = BOOKING_CONFIG.maxDaysInAdvance
): DayOption[] {
  const dates: DayOption[] = [];
  const today = new Date();

  for (let i = 0; i < daysCount; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;

    const dayOfWeek = d.toLocaleDateString("en-US", { weekday: "short" });
    const dayNumber = d.getDate();
    const monthShort = d.toLocaleDateString("en-US", { month: "short" });
    const fullFormatted = d.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Mock: all days available except arbitrary closed day (e.g. index 10)
    const isAvailable = i !== 10;

    dates.push({
      dateString,
      dayOfWeek,
      dayNumber,
      monthShort,
      fullFormatted,
      isAvailable,
    });
  }

  return dates;
}

/**
 * Format minutes into "HH:MM AM/PM"
 */
function formatMinutesToTime(totalMinutes: number): string {
  const normalized = totalMinutes % (24 * 60);
  const hours = Math.floor(normalized / 60);
  const mins = normalized % 60;
  const ampm = hours >= 12 && hours < 24 ? "PM" : "AM";
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  const displayMins = mins === 0 ? "00" : String(mins).padStart(2, "0");
  return `${String(displayHours).padStart(2, "0")}:${displayMins} ${ampm}`;
}

/**
 * Generates slots respecting the selected session duration.
 * Ensures session finishes before closingHour (24:00).
 */
export function getMockSlotsForDuration(
  durationMinutes: number,
  dateString: string
): TimeSlotOption[] {
  const slots: TimeSlotOption[] = [];
  const startMinute = BOOKING_CONFIG.openingHour * 60; // 360 (6:00 AM)
  const endMinute = BOOKING_CONFIG.closingHour * 60; // 1440 (12:00 AM)
  const duration = durationMinutes > 0 ? durationMinutes : 30; // fallback to 30 for coaching inquiry

  for (
    let current = startMinute;
    current + duration <= endMinute;
    current += BOOKING_CONFIG.slotIntervalMinutes
  ) {
    const hours = Math.floor(current / 60);
    const mins = current % 60;
    const time24 = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
    const timeFormatted = formatMinutesToTime(current);
    const endTimeFormatted = formatMinutesToTime(current + duration);

    // Realistic mock seed based on time & date hash
    const seed = (current + dateString.charCodeAt(dateString.length - 1)) % 10;
    let net1Available = true;
    let net2Available = true;

    if (seed === 0) {
      net1Available = false;
      net2Available = false; // FULL
    } else if (seed === 1 || seed === 2) {
      net1Available = false; // NET 2 ONLY
    } else if (seed === 3) {
      net2Available = false; // NET 1 ONLY
    }

    let status: TimeSlotOption["status"] = "AVAILABLE";
    if (!net1Available && !net2Available) {
      status = "FULL";
    } else if (!net1Available) {
      status = "NET_2_ONLY";
    } else if (!net2Available) {
      status = "NET_1_ONLY";
    }

    slots.push({
      time24,
      timeFormatted,
      endTimeFormatted,
      status,
      net1Available,
      net2Available,
    });
  }

  return slots;
}
