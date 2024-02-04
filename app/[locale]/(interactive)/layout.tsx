"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/lib/navigation";
import { soundPageMap } from "@/lib/sounds";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "next-intl";
import React, { createRef, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import AppContext from "../../../components/AppContext";

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

  const [session, setSession] = useState();

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
    <>
    <AppContext.Provider value={{ session, setSession }}>
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
      <div
        className={
          "flex justify-center h-screen overflow-hidden bg-secondary-white"
        }
      >
        <div className="fixed right-5 top-10 z-10 flex items-center">
          <Link href={path} locale={locale === "en" ? "th" : "en"}>
            <Button variant="ghost" className="h-auto w-auto p-3 text-accent">
              {locale === "en" ? "EN" : "TH"}
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-10" />
          <Button
            variant="ghost"
            onClick={handleToggleSound}
            className="h-auto w-auto p-3 text-accent"
          >
            {isPlaying ? (
              <Volume2 className="h-7 w-7" />
            ) : (
              <VolumeX className="h-7 w-7" />
            )}
          </Button>
        </div>
        {children}
      </div>
      </AppContext.Provider>
    </>
  );
}