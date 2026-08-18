import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Admin Settings",
};

export default function AdminSettingsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-6 px-4 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-bold">
            Facility Settings
          </h1>
          <p className="text-muted-foreground text-sm">
            General settings, advance deposit policy, and facility parameters.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/admin">← Back to Dashboard</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Facility Configuration</CardTitle>
            <CardDescription>
              Base details and location in Kanispura, Baramulla.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <p>
              <strong className="text-foreground">Name:</strong>{" "}
              {businessConfig.name}
            </p>
            <p>
              <strong className="text-foreground">Address:</strong>{" "}
              {businessConfig.location.fullAddress}
            </p>
            <p>
              <strong className="text-foreground">Nets Count:</strong>{" "}
              {businessConfig.facility.totalNets}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Policy</CardTitle>
            <CardDescription>Advance minimum requirements.</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <p>
              <strong className="text-foreground">Min Online Advance:</strong>{" "}
              {businessConfig.bookingRules.minAdvancePaymentPercent}%
            </p>
            <p>
              <strong className="text-foreground">Slot Hold Duration:</strong>{" "}
              {businessConfig.bookingRules.slotHoldDurationMinutes} minutes
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
