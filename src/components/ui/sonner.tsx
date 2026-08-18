"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "dark" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-cave-surface group-[.toaster]:text-foreground group-[.toaster]:border-cave-line group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-cave-gold group-[.toast]:text-cave-black font-semibold",
          cancelButton:
            "group-[.toast]:bg-cave-elevated group-[.toast]:text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
