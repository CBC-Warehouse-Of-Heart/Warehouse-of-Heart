"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/lib/navigation";
import { soundPageMap } from "@/lib/sounds";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "next-intl";
import React, { createRef, useEffect, useState } from "react";
import ReactHowler from "react-howler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  const path = usePathname();
  const page = path.split("/")[1];

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSound, setCurrentSound] = useState("/sound/main.mp3");

  const fadeDuration = 500;

  useEffect(() => {
    const nextSound = soundPageMap[page] ?? "/sound/main.mp3";
    if (nextSound !== currentSound) {
      soundRef.current?.howler.fade(0.5, 0, fadeDuration);
      setTimeout(() => {
        setCurrentSound(nextSound);
      }, fadeDuration);
    }
  }, [page]);

  const soundRef = createRef<ReactHowler>();

  const handleToggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

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
    </>
  );
}
