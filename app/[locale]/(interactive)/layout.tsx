"use client";

import InteractiveBackground from "@/components/interactive-background";
import Sounds from "@/components/sounds";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useSoundStore } from "@/store/sound";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";

const interFont = Inter({
  weight: "600",
  subsets: ["greek"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const path = usePathname();
  const { isPlaying, toggle } = useSoundStore();

  return (
    <>
      <Sounds />
      <div className="relative mx-auto min-h-[100dvh] w-full max-w-md overscroll-none">
        <InteractiveBackground />

        <div className="absolute right-5 top-10 z-10 flex items-center">
          <Link href={path} locale={locale === "en" ? "th" : "en"}>
            <Button
              variant="ghost"
              className={cn(
                interFont.className,
                "h-auto w-auto p-2 text-sm font-semibold text-accent",
              )}
            >
              {locale === "en" ? "EN" : "TH"}
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-7" />
          <Button
            variant="ghost"
            onClick={toggle}
            className="h-auto w-auto p-2 text-accent"
          >
            {isPlaying ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>
        </div>
        {children}
      </div>
    </>
  );
}
