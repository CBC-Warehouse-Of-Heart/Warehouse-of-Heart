"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/lib/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "next-intl";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sound, setSound] = useState(true);
  const locale = useLocale();
  const handleToggleSound = () => {
    setSound((prevSound) => !prevSound);
  };
  const path = usePathname();

  return (
    <div
      className={
        "relative h-full w-full bg-[radial-gradient(80.99%_50%_at_50%_50%,#AA5656_0%,#CE9A87_51.04%,#F2DEB9_100%)]"
      }
    >
      <div className="fixed right-5 top-5 z-10 flex items-center">
        <Link href={path} locale={locale === "en" ? "th" : "en"}>
          <Button
            variant="ghost"
            className="h-auto w-auto p-3 text-accent"
            size="sm"
          >
            {locale === "en" ? "EN" : "TH"}
          </Button>
        </Link>
        <Separator orientation="vertical" className="h-8" />
        <Button
          variant="ghost"
          onClick={handleToggleSound}
          className="h-auto w-auto rounded-sm p-2 text-accent"
        >
          {sound ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </Button>
      </div>
      {children}
    </div>
  );
}
