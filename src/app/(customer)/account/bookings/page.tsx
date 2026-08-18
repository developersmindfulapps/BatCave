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
  title: "My Bookings",
  description: "View and manage your cricket net bookings at The Bat Cave.",
};

export default function CustomerBookingsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl space-y-8 px-4 py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            My <span className="text-cave-gold">Bookings</span>
          </h1>
          <p className="text-muted-foreground">
            Track upcoming practice sessions and past booking history.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/account">Back to Account</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Session History</CardTitle>
          <CardDescription>No active bookings found.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Bookings made through your mobile number will appear here.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
