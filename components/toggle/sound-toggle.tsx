"use client";

import { useSoundStore } from "@/store/sound";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const SoundToggle = (props: Props) => {
  const { toggle, isPlaying } = useSoundStore();
  return (
    <Button
      variant="ghost"
      onClick={toggle}
      className="h-auto w-auto rounded-[8px] p-2 text-accent"
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </Button>
  );
};

export default SoundToggle;
