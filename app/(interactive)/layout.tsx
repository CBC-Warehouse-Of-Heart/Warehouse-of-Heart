"use client";

import { soundPageMap } from "@/lib/sounds";
import { usePathname } from "next/navigation";
import React, { createRef, useEffect, useState } from "react";
import ReactHowler from "react-howler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSound, setCurrentSound] = useState("/sound/main.mp3");
  const page = usePathname().split("/")[1];

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
      <div
        className={
          "relative h-full w-full bg-[radial-gradient(80.99%_50%_at_50%_50%,#AA5656_0%,#CE9A87_51.04%,#F2DEB9_100%)]"
        }
      >
        <button
          className="fixed right-14 top-20 rounded-lg p-3 transition-all duration-200 hover:bg-black/10 active:scale-95"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-volume-2"
            >
              <polygon
                points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                fill="#F8F8F7"
              />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
          {!isPlaying && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-volume-x"
            >
              <polygon
                points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                fill="#F8F8F7"
              />
              <line x1="22" x2="16" y1="9" y2="15" />
              <line x1="16" x2="22" y1="9" y2="15" />
            </svg>
          )}
        </button>
        {children}
      </div>
    </>
  );
}
