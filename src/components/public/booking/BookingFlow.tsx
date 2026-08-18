"use client";

import { useState, useMemo } from "react";
import {
  BookingStep,
  SelectedSession,
  DayOption,
  TimeSlotOption,
  CustomerData,
  PaymentOption,
} from "@/types/booking-flow";
import { getMockDates, getMockSlotsForDuration } from "@/config/booking-mock";
import { BookingSteps } from "./BookingSteps";
import { SessionSelector } from "./SessionSelector";
import { DateSelector } from "./DateSelector";
import { TimeSlotSelector } from "./TimeSlotSelector";
import { NetSelector } from "./NetSelector";
import { CustomerDetailsForm } from "./CustomerDetailsForm";
import { BookingSummary } from "./BookingSummary";
import { VerifyAndPayStep } from "./VerifyAndPayStep";
import { BookingConfirmation } from "./BookingConfirmation";
import { Button } from "@/components/ui/button";

export function BookingFlow() {
  const [step, setStep] = useState<BookingStep>(1);
  const [maxAccessibleStep, setMaxAccessibleStep] = useState<BookingStep>(1);

  // Form selections
  const [session, setSession] = useState<SelectedSession | null>(null);
  const dates = useMemo(() => getMockDates(), []);
  const [selectedDate, setSelectedDate] = useState<DayOption>(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlotOption | null>(null);
  const [selectedNet, setSelectedNet] = useState<
    "net-1" | "net-2" | "both" | null
  >(null);

  const [customer, setCustomer] = useState<CustomerData>({
    fullName: "",
    phone: "",
    email: "",
  });

  const [mobileVerified, setMobileVerified] = useState(false);
  const [paymentOption, setPaymentOption] =
    useState<PaymentOption>("ADVANCE_30");
  const [paidAmount, setPaidAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(
    null
  );

  // Duration-aware slot generation
  const slots = useMemo(() => {
    const duration = session ? session.durationMinutes : 30;
    return getMockSlotsForDuration(duration, selectedDate.dateString);
  }, [session, selectedDate]);

  // Handle Session Selection
  const handleSelectSession = (newSession: SelectedSession) => {
    setSession(newSession);
    setSelectedSlot(null);
    setSelectedNet(null);
  };

  const handleSessionContinue = () => {
    if (session) {
      setStep(2);
      if (maxAccessibleStep < 2) setMaxAccessibleStep(2);
    }
  };

  // Handle Date Selection
  const handleSelectDate = (date: DayOption) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSelectedNet(null);
  };

  // Handle Slot Selection
  const handleSelectSlot = (slot: TimeSlotOption) => {
    setSelectedSlot(slot);
    // Auto pick available net
    if (slot.net1Available) {
      setSelectedNet("net-1");
    } else if (slot.net2Available) {
      setSelectedNet("net-2");
    } else {
      setSelectedNet(null);
    }
  };

  // Handle Step 2 Continue
  const handleDateTimeContinue = () => {
    if (selectedDate && selectedSlot && selectedNet) {
      setStep(3);
      if (maxAccessibleStep < 3) setMaxAccessibleStep(3);
    }
  };

  // Handle Step 3 (Customer Details) Submit
  const handleCustomerSubmit = (data: CustomerData) => {
    // If phone changed, reset verification
    if (data.phone !== customer.phone) {
      setMobileVerified(false);
    }
    setCustomer(data);
    setStep(4);
    if (maxAccessibleStep < 4) setMaxAccessibleStep(4);
  };

  // Handle Payment Simulation Success
  const handlePaymentSuccess = (paid: number, remaining: number) => {
    const randomId = "BC-" + Math.floor(100000 + Math.random() * 900000);
    setPaidAmount(paid);
    setRemainingAmount(remaining);
    setConfirmedBookingId(randomId);
  };

  // Reset / Book another slot
  const handleBookAnother = () => {
    setConfirmedBookingId(null);
    setSelectedSlot(null);
    setSelectedNet(null);
    setMobileVerified(false);
    setPaymentOption("ADVANCE_30");
    setStep(1);
    setMaxAccessibleStep(1);
  };

  return (
    <div className="bg-cave-black flex min-h-screen flex-col">
      {/* Progress Steps (hidden if confirmed) */}
      {!confirmedBookingId && (
        <BookingSteps
          currentStep={step}
          onStepClick={(s) => setStep(s)}
          maxAccessibleStep={maxAccessibleStep}
        />
      )}

      {/* Main Form Container */}
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        {/* Step 1: Session Selector */}
        {step === 1 && (
          <div className="mx-auto max-w-4xl">
            <SessionSelector
              selectedSession={session}
              onSelectSession={handleSelectSession}
              onContinue={handleSessionContinue}
            />
          </div>
        )}

        {/* Step 2: Date, Time Slot, and Net */}
        {step === 2 && (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Left Controls Column (8 cols) */}
            <div className="space-y-10 lg:col-span-8">
              <div className="space-y-2">
                <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
                  Step 02
                </span>
                <h2 className="text-foreground text-2xl font-black uppercase sm:text-3xl">
                  Date, Time &amp; <span className="punch-out-text">Net</span>
                </h2>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Select your practice date, available slot duration (
                  {session?.durationMinutes || 30} mins), and lane.
                </p>
              </div>

              {/* 1. Date Selector */}
              <DateSelector
                dates={dates}
                selectedDate={selectedDate}
                onSelectDate={handleSelectDate}
              />

              {/* 2. Time Slot Selector */}
              <TimeSlotSelector
                slots={slots}
                selectedSlot={selectedSlot}
                onSelectSlot={handleSelectSlot}
              />

              {/* 3. Net Selector */}
              {selectedSlot && (
                <NetSelector
                  selectedSlot={selectedSlot}
                  selectedNet={selectedNet}
                  onSelectNet={setSelectedNet}
                  session={session}
                />
              )}

              {/* Step 2 Action Buttons */}
              <div className="border-cave-line/60 flex flex-col gap-3 border-t pt-4 sm:flex-row">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="border-cave-line hover:border-cave-gold hover:text-cave-gold rounded-full py-6 text-xs font-bold tracking-wider uppercase sm:w-1/3"
                >
                  ← Change Session
                </Button>
                <Button
                  onClick={handleDateTimeContinue}
                  disabled={!selectedSlot || !selectedNet}
                  size="lg"
                  className="bg-cave-gold text-cave-black flex-1 rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white disabled:opacity-40"
                >
                  {selectedSlot && selectedNet
                    ? "Continue To Customer Details →"
                    : "Select Time Slot & Net To Continue"}
                </Button>
              </div>
            </div>

            {/* Right Summary Column (4 cols - Sticky) */}
            <div className="lg:sticky lg:top-24 lg:col-span-4">
              <BookingSummary
                session={session}
                selectedDate={selectedDate}
                selectedSlot={selectedSlot}
                selectedNet={selectedNet}
                paymentOption={paymentOption}
              />
            </div>
          </div>
        )}

        {/* Step 3: Customer Details */}
        {step === 3 && (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <CustomerDetailsForm
                initialData={customer}
                onSaveAndContinue={handleCustomerSubmit}
                onBack={() => setStep(2)}
              />
            </div>

            <div className="lg:sticky lg:top-24 lg:col-span-4">
              <BookingSummary
                session={session}
                selectedDate={selectedDate}
                selectedSlot={selectedSlot}
                selectedNet={selectedNet}
                paymentOption={paymentOption}
              />
            </div>
          </div>
        )}

        {/* Step 4: Verify & Pay or Confirmation Screen */}
        {step === 4 && (
          <div className="mx-auto max-w-3xl">
            {confirmedBookingId ? (
              <BookingConfirmation
                bookingId={confirmedBookingId}
                session={session!}
                selectedDate={selectedDate}
                selectedSlot={selectedSlot!}
                selectedNet={selectedNet!}
                customer={customer}
                paidAmount={paidAmount}
                remainingAmount={remainingAmount}
                paymentOption={paymentOption}
                onBookAnother={handleBookAnother}
              />
            ) : (
              <VerifyAndPayStep
                session={session!}
                selectedDate={selectedDate}
                selectedSlot={selectedSlot!}
                selectedNet={selectedNet!}
                customer={customer}
                mobileVerified={mobileVerified}
                onMobileVerified={() => setMobileVerified(true)}
                paymentOption={paymentOption}
                onSelectPaymentOption={setPaymentOption}
                onPaymentSuccess={handlePaymentSuccess}
                onBack={() => setStep(3)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
