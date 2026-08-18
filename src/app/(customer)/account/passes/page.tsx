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
  title: "My Passes",
  description: "View your active practice passes at The Bat Cave.",
};

export default function CustomerPassesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl space-y-8 px-4 py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            My <span className="text-cave-gold">Passes</span>
          </h1>
          <p className="text-muted-foreground">
            Monitor pass balances, hours, and renewal dates.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/account">Back to Account</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Training Passes</CardTitle>
          <CardDescription>
            No active passes associated with your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Purchase a monthly hours or overs package to unlock discounts.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
