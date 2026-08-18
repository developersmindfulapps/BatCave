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
  title: "Admin Passes",
};

export default function AdminPassesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-6 px-4 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-bold">
            Passes & Subscriptions
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage customer practice packages and hours quotas.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/admin">← Back to Dashboard</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Passes</CardTitle>
          <CardDescription>
            Customer pass balances and transaction records.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">No passes issued yet.</p>
        </CardContent>
      </Card>
    </main>
  );
}
