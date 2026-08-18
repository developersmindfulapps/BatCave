import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Facility management dashboard for The Bat Cave.",
};

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-8 px-4 py-12">
      <div className="space-y-1">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Admin <span className="text-cave-gold">Dashboard</span>
        </h1>
        <p className="text-muted-foreground">
          The Bat Cave management and operations center.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.adminNavItems
          .filter((item) => item.href !== "/admin")
          .map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:border-cave-gold/50 h-full transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{item.label}</CardTitle>
                  <CardDescription>
                    Manage {item.label.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground text-xs">
                  Access module →
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </main>
  );
}
