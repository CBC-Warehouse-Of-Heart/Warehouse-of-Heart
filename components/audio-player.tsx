"use client";

import { useSoundStore } from "@/store/sound";
import { forwardRef, useRef } from "react";
import ReactHowler, { PropTypes } from "react-howler";

type Ref = ReactHowler;

const AudioPlayer = forwardRef<Ref, PropTypes>((props, ref) => {
  const { isPlaying } = useSoundStore();
  const internalRef = useRef<ReactHowler>(null);

  if (ref) {
    if (typeof ref === "function") {
      ref(internalRef.current);
    } else {
      ref.current = internalRef.current;
    }
  }

  return (
    <ReactHowler
      playing={isPlaying}
      {...props}
      ref={internalRef}
      onPlay={(soundId) => {
        if (props.onPlay) props.onPlay(soundId);
        internalRef.current?.howler.fade(0, props.volume ?? 0.75, 500);
      }}
    />
  );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
