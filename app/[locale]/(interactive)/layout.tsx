"use client";
import AnimatedImage from "@/components/animated-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { backgroundMapConfig } from "@/lib/bg-config";
import { Link, usePathname } from "@/lib/navigation";
import { soundPageMap } from "@/lib/sounds";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "next-intl";
import React, { createRef, useEffect, useMemo, useState } from "react";
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

  const backgroundImgSrc = useMemo(() => {
    return backgroundMapConfig[page] ?? "/img/1-1.png";
  }, [page]);

  const handleToggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

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
      <div className={"relative h-full w-full bg-[#e0dac7]"}>
        <AnimatedImage
          src={backgroundImgSrc}
          alt="background-image"
          fill
          className="object-cover"
        />
        <div className="fixed right-5 top-10 z-10 flex items-center">
          <Link href={path} locale={locale === "en" ? "th" : "en"}>
            <Button
              variant="ghost"
              className="h-auto w-auto p-3 text-sm text-accent"
            >
              {locale === "en" ? "EN" : "TH"}
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-8" />
          <Button
            variant="ghost"
            onClick={handleToggleSound}
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
