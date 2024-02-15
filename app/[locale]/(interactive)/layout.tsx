import InteractiveBackground from "@/components/interactive-background";
import Sounds from "@/components/sounds";
import LangToggle from "@/components/toggle/lang-toggle";
import SoundToggle from "@/components/toggle/sound-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sounds />
      <div className="relative mx-auto min-h-[100dvh] w-full max-w-md overscroll-none">
        <InteractiveBackground />
        <div className="absolute right-5 top-10 z-10 flex items-center">
          <LangToggle />
          <Separator orientation="vertical" className="h-7" />
          <SoundToggle />
        </div>
        {children}
      </div>
    </>
  );
}
