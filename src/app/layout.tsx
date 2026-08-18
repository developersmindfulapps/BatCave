import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "The Bat Cave | Premium Indoor Cricket Nets & Coaching – Kanispura, Baramulla",
    template: "%s | The Bat Cave",
  },
  description:
    "The Bat Cave is a premium indoor cricket facility in Kanispura, Baramulla with professional cricket nets, bowling machines and coaching.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://thebatcave.in"
  ),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-cave-black text-foreground selection:bg-cave-gold selection:text-cave-black min-h-screen font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
