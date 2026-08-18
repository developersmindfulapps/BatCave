"use client";

import { useState } from "react";
import { User, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomerData } from "@/types/booking-flow";

interface CustomerDetailsFormProps {
  initialData: CustomerData;
  onSaveAndContinue: (data: CustomerData) => void;
  onBack: () => void;
}

export function CustomerDetailsForm({
  initialData,
  onSaveAndContinue,
  onBack,
}: CustomerDetailsFormProps) {
  const [formData, setFormData] = useState<CustomerData>(initialData);
  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    email: false,
  });

  // Basic client-side validation
  const isNameValid = formData.fullName.trim().length >= 2;
  const isPhoneValid = /^[6-9]\d{9}$/.test(
    formData.phone.replace(/[\s-+]/g, "").slice(-10)
  );
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  const isFormValid = isNameValid && isPhoneValid && isEmailValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true, email: true });
    if (isFormValid) {
      onSaveAndContinue(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-cave-gold block text-xs font-bold tracking-[0.3em] uppercase">
          Step 03
        </span>
        <h2 className="text-foreground text-2xl font-black uppercase sm:text-3xl">
          Your <span className="punch-out-text">Details</span>
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Enter your contact information for slot confirmation and venue entry.
        </p>
      </div>

      <div className="space-y-5">
        {/* Mobile Number (Primary Identifier) */}
        <div className="space-y-1.5">
          <label className="text-foreground flex items-center justify-between text-xs font-bold tracking-wider uppercase">
            <span>Mobile Number *</span>
            <span className="text-muted-foreground text-[10px] font-normal lowercase">
              primary ID for booking
            </span>
          </label>
          <div className="relative">
            <div className="text-muted-foreground absolute top-1/2 left-3.5 -translate-y-1/2">
              <Phone className="h-4 w-4" />
            </div>
            <Input
              type="tel"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              onBlur={() => setTouched({ ...touched, phone: true })}
              className={`bg-cave-surface text-foreground rounded-2xl py-6 pr-10 pl-10 ${
                touched.phone
                  ? isPhoneValid
                    ? "border-emerald-500/80 focus-visible:ring-emerald-500"
                    : "border-red-500/80 focus-visible:ring-red-500"
                  : "border-cave-line focus-visible:ring-cave-gold"
              }`}
            />
            {touched.phone && (
              <div className="absolute top-1/2 right-3.5 -translate-y-1/2">
                {isPhoneValid ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400" />
                )}
              </div>
            )}
          </div>
          {touched.phone && !isPhoneValid && (
            <p className="pl-1 text-[11px] font-semibold text-red-400">
              Please enter a valid 10-digit Indian mobile number.
            </p>
          )}
        </div>

        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-foreground text-xs font-bold tracking-wider uppercase">
            Full Name *
          </label>
          <div className="relative">
            <div className="text-muted-foreground absolute top-1/2 left-3.5 -translate-y-1/2">
              <User className="h-4 w-4" />
            </div>
            <Input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              onBlur={() => setTouched({ ...touched, fullName: true })}
              className={`bg-cave-surface text-foreground rounded-2xl py-6 pr-10 pl-10 ${
                touched.fullName
                  ? isNameValid
                    ? "border-emerald-500/80 focus-visible:ring-emerald-500"
                    : "border-red-500/80 focus-visible:ring-red-500"
                  : "border-cave-line focus-visible:ring-cave-gold"
              }`}
            />
            {touched.fullName && (
              <div className="absolute top-1/2 right-3.5 -translate-y-1/2">
                {isNameValid ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400" />
                )}
              </div>
            )}
          </div>
          {touched.fullName && !isNameValid && (
            <p className="pl-1 text-[11px] font-semibold text-red-400">
              Please enter your full name.
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="text-foreground flex items-center justify-between text-xs font-bold tracking-wider uppercase">
            <span>Email Address *</span>
            <span className="text-muted-foreground text-[10px] font-normal lowercase">
              for receipt &amp; confirmations
            </span>
          </label>
          <div className="relative">
            <div className="text-muted-foreground absolute top-1/2 left-3.5 -translate-y-1/2">
              <Mail className="h-4 w-4" />
            </div>
            <Input
              type="email"
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onBlur={() => setTouched({ ...touched, email: true })}
              className={`bg-cave-surface text-foreground rounded-2xl py-6 pr-10 pl-10 ${
                touched.email
                  ? isEmailValid
                    ? "border-emerald-500/80 focus-visible:ring-emerald-500"
                    : "border-red-500/80 focus-visible:ring-red-500"
                  : "border-cave-line focus-visible:ring-cave-gold"
              }`}
            />
            {touched.email && (
              <div className="absolute top-1/2 right-3.5 -translate-y-1/2">
                {isEmailValid ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400" />
                )}
              </div>
            )}
          </div>
          {touched.email && !isEmailValid && (
            <p className="pl-1 text-[11px] font-semibold text-red-400">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
        <Button
          type="button"
          onClick={onBack}
          variant="outline"
          className="border-cave-line hover:border-cave-gold hover:text-cave-gold rounded-full py-6 text-xs font-bold tracking-wider uppercase sm:w-1/3"
        >
          ← Back
        </Button>
        <Button
          type="submit"
          size="lg"
          className="bg-cave-gold text-cave-black flex-1 rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white"
        >
          Review &amp; Proceed To Payment →
        </Button>
      </div>
    </form>
  );
}
