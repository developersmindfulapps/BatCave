import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { StickyMobileCTA } from "@/components/public/StickyMobileCTA";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cave-black text-foreground flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
