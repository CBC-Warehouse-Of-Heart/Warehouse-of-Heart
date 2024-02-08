"use client";
import AnimatedImage from "@/components/animated-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { backgroundMapConfig } from "@/lib/bg-config";
import { Link, usePathname } from "@/lib/navigation";
import { soundPageMap } from "@/lib/sounds";
import { cn } from "@/lib/utils";
import { useSoundStore } from "@/store/sound";
import { useStickerStore } from "@/store/sticker";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import React, { createRef, useEffect, useMemo, useState } from "react";
import ReactHowler from "react-howler";

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
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const { isPlaying, toggle } = useSoundStore();
  const { stickerId } = useStickerStore();

  const [currentSound, setCurrentSound] = useState("/sound/main.mp3");
  const [bgImgSrc, setBgImgSrc] = useState<string>("/img/1-1.png");

  const fadeDuration = 500;

  useEffect(() => {
    const nextSound = soundPageMap[page] ?? "/sound/main.mp3";

    if (nextSound !== currentSound) {
      soundRef.current?.howler.fade(0.5, 0, fadeDuration);
      setTimeout(() => {
        setCurrentSound(nextSound);
      }, fadeDuration);
    }

    // page handlers
    switch (page) {
      case "4-9":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      default:
        setBgImgSrc(backgroundMapConfig[page].image);
        break;
    }
  }, [page]);

  const soundRef = createRef<ReactHowler>();

  const imagePreloadSrc = useMemo(() => {
    const imagePreloadSrc = backgroundMapConfig[page]?.imagePreload ?? [];
    return imagePreloadSrc;
  }, [page]);

  return (
    <>
      <ReactHowler
        src={currentSound}
        volume={0.5}
        playing={isPlaying}
        loop
        ref={soundRef}
        onPlay={() => {
          soundRef.current?.howler.fade(0, 0.5, fadeDuration);
        }}
      />
      <div className="relative mx-auto min-h-[100dvh] w-full max-w-md overscroll-none">
        <AnimatedImage
          src={bgImgSrc}
          preloadSrcs={imagePreloadSrc}
          alt="background-image"
          fill
          className="-z-50 object-cover"
        />
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
