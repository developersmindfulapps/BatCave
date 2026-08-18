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

export const metadata: Metadata = {
  title: "Admin Availability",
};

export default function AdminAvailabilityPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-6 px-4 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-bold">
            Availability & Net Controls
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage facility operating hours, net maintenance blocks, and
            holidays.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/admin">← Back to Dashboard</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Net Status & Operating Schedule</CardTitle>
          <CardDescription>
            System derives real-time availability from operating hours,
            bookings, coaching, and owner blocks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Availability configuration controls will be managed here.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
