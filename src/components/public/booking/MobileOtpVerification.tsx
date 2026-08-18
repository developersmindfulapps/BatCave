"use client";

import { useState, useRef } from "react";
import {
  ShieldCheck,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OtpState } from "@/types/booking-flow";

interface MobileOtpVerificationProps {
  phone: string;
  isVerified: boolean;
  onVerificationSuccess: () => void;
}

export const MOCK_OTP_CODE = "123456";

export function MobileOtpVerification({
  phone,
  isVerified,
  onVerificationSuccess,
}: MobileOtpVerificationProps) {
  const [otpState, setOtpState] = useState<OtpState>(
    isVerified ? "VERIFIED" : "IDLE"
  );
  const [otpDigits, setOtpDigits] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSendOtp = () => {
    setIsLoading(true);
    setErrorMessage(null);
    setTimeout(() => {
      setIsLoading(false);
      setOtpState("SENT");
    }, 600);
  };

  const handleDigitChange = (index: number, value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, "").slice(-1);
    const newDigits = [...otpDigits];
    newDigits[index] = cleanValue;
    setOtpDigits(newDigits);
    setErrorMessage(null);

    // Auto advance focus
    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredCode = otpDigits.join("");
    if (enteredCode.length < 6) {
      setErrorMessage("Please enter all 6 digits of the OTP.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      if (enteredCode === MOCK_OTP_CODE) {
        setOtpState("VERIFIED");
        onVerificationSuccess();
      } else {
        setOtpState("ERROR");
        setErrorMessage(
          "Invalid OTP code. Please enter 123456 (prototype code)."
        );
      }
    }, 500);
  };

  return (
    <Card
      className={`rounded-3xl p-6 transition-all sm:p-8 ${
        isVerified
          ? "bg-cave-surface border-2 border-emerald-500/60 shadow-lg shadow-emerald-950/20"
          : "bg-cave-surface border-cave-line border"
      }`}
    >
      <div className="space-y-6">
        {/* Card Header */}
        <div className="border-cave-line/60 flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                isVerified
                  ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
                  : "bg-cave-elevated text-cave-gold border-cave-line"
              }`}
            >
              {isVerified ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <Phone className="h-5 w-5" />
              )}
            </div>
            <div>
              <span className="text-cave-gold block text-[10px] font-bold tracking-widest uppercase">
                Security Step
              </span>
              <h3 className="text-foreground text-lg font-black uppercase">
                Mobile Verification
              </h3>
            </div>
          </div>

          {isVerified && (
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-400 uppercase">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified
            </div>
          )}
        </div>

        {/* Verified State View */}
        {isVerified ? (
          <div className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs">
            <div>
              <p className="text-foreground font-bold">Mobile Verified</p>
              <p className="text-muted-foreground">{phone}</p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400">
              ✓ Ready for payment
            </span>
          </div>
        ) : (
          /* Unverified / OTP input View */
          <div className="space-y-5">
            <div className="bg-cave-elevated border-cave-line/60 flex flex-col justify-between gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center">
              <div className="space-y-0.5">
                <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                  Verification Target
                </span>
                <p className="text-foreground text-sm font-bold">
                  +91 {phone || "XXXXX XXXXX"}
                </p>
              </div>

              {otpState === "IDLE" ? (
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isLoading || !phone}
                  className="bg-cave-gold text-cave-black rounded-full px-6 text-xs font-bold tracking-wider uppercase shadow transition-all hover:bg-white"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />{" "}
                      Sending...
                    </span>
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                  className="text-cave-gold inline-flex items-center gap-1 text-xs font-bold transition-colors hover:text-white"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Resend OTP
                </button>
              )}
            </div>

            {otpState !== "IDLE" && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <label className="text-muted-foreground block text-center text-xs font-bold tracking-wider uppercase sm:text-left">
                    Enter 6-Digit OTP Sent To +91 {phone}
                  </label>

                  {/* 6-Digit Input Boxes */}
                  <div className="flex items-center justify-center gap-2 sm:justify-start sm:gap-3">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          inputRefs.current[idx] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleDigitChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e.key)}
                        className={`bg-cave-black text-foreground h-13 w-11 rounded-2xl border text-center text-xl font-black transition-all focus:outline-none sm:h-14 sm:w-12 ${
                          errorMessage
                            ? "border-red-500/80 focus:border-red-500"
                            : digit
                              ? "border-cave-gold text-cave-gold"
                              : "border-cave-line focus:border-cave-gold"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Prototype Mock Code Hint */}
                <div className="bg-cave-black/60 border-cave-line/40 text-muted-foreground flex items-start gap-2 rounded-xl border p-3 text-[11px]">
                  <ShieldCheck className="text-cave-gold mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    <strong className="text-foreground">Prototype Mode:</strong>{" "}
                    Enter mock code{" "}
                    <strong className="text-cave-gold">123456</strong> to
                    verify.
                  </span>
                </div>

                <Button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isLoading || otpDigits.join("").length < 6}
                  className="bg-cave-gold text-cave-black w-full rounded-full py-6 text-xs font-black tracking-wider uppercase shadow transition-all hover:bg-white disabled:opacity-40"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                    </span>
                  ) : (
                    "Verify OTP & Continue"
                  )}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
