"use client";

import { usePathname } from "@/lib/navigation";
import { scenePageMap, soundPageMap } from "@/lib/sounds";
import { createRef, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import AudioPlayer from "./audio-player";

const Sounds = () => {
  const path = usePathname();
  const page = path.split("/")[1];
  const defaultBackingTrackVolume = 1;
  const defaultSoundEffectVolume = 0.3;
  const scene = page.split("-")[0] as keyof typeof scenePageMap;

  const [backingTrackSound, setBackingTrackSound] = useState<string>();
  const [backingTrackVolume, setBackingTrackVolume] = useState<number>(
    defaultBackingTrackVolume,
  );
  const backingTrackRef = createRef<ReactHowler>();
  const soundEffectRef = createRef<ReactHowler>();
  const [soundEffect, setSoundEffect] = useState<{
    sound: string;
    loop?: boolean;
  }>();

  const fadeDuration = 500;

  useEffect(() => {
    const nextSound = scenePageMap[scene];

    if (nextSound !== backingTrackSound) {
      backingTrackRef.current?.howler.fade(0.75, 0, fadeDuration);
      setTimeout(() => {
        setBackingTrackSound(nextSound);
      }, fadeDuration);
    }
  }, [scene]);

  useEffect(() => {
    let nextSoundEffect: typeof soundEffect;
    let nextBackgroundVolume: number | undefined;
    if (page in soundPageMap) {
      nextSoundEffect =
        soundPageMap[page as keyof typeof soundPageMap]?.soundEffect;
      nextBackgroundVolume =
        soundPageMap[page as keyof typeof soundPageMap]?.backgroundVolume;
    }
    if (nextSoundEffect !== soundEffect) {
      if (soundEffectRef.current?.howler.playing()) {
        soundEffectRef.current?.howler.fade(
          soundEffectRef.current?.howler.volume() ?? defaultSoundEffectVolume,
          0,
          fadeDuration,
        );
        setTimeout(() => {
          setSoundEffect(nextSoundEffect);
        }, fadeDuration);
      } else {
        setSoundEffect(nextSoundEffect);
      }
    }

    if (
      !!nextBackgroundVolume ||
      backingTrackRef.current?.howler.volume() !== defaultBackingTrackVolume
    ) {
      const finalVolume = nextBackgroundVolume ?? defaultBackingTrackVolume;
      backingTrackRef.current?.howler.fade(
        backingTrackVolume,
        finalVolume,
        fadeDuration,
      );
      setTimeout(() => {
        setBackingTrackVolume(finalVolume);
      }, fadeDuration);
    }
  }, [page]);

  return (
    <>
      {backingTrackSound && (
        <AudioPlayer
          src={backingTrackSound}
          volume={backingTrackVolume}
          loop
          preload
          ref={backingTrackRef}
        />
      )}
      {soundEffect && (
        <AudioPlayer
          key={soundEffect.sound}
          src={soundEffect.sound}
          loop={soundEffect.loop}
          volume={defaultSoundEffectVolume}
          ref={soundEffectRef}
        />
      )}
    </>
  );
};

export default Sounds;
