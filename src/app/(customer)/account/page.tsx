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
  title: "My Account",
  description: "Customer portal for The Bat Cave.",
};

export default function AccountPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl space-y-8 px-4 py-16">
      <div className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          My <span className="text-cave-gold">Account</span>
        </h1>
        <p className="text-muted-foreground">
          Manage your bookings, training passes, and profile details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
            <CardDescription>
              View upcoming sessions, history, and payment receipts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link href="/account/bookings">View Bookings</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Passes</CardTitle>
            <CardDescription>
              Check remaining hours, overs, and pass validity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link href="/account/passes">View Passes</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
