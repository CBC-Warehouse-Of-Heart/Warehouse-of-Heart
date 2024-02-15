export const scenePageMap = {
  "1": "/sound/track/branding.mp3",
  "2": "/sound/track/room-1.mp3",
} as const;

export const soundPageMap: Record<
  string,
  {
    soundEffect?: {
      sound: string;
      loop?: boolean;
    };
    backgroundVolume?: number;
  }
> = {
  "2-1": {
    soundEffect: {
      sound: "/sound/sound-effect/scene-2-night-ambience.mp3",
    },
  },
  "4-1": {
    backgroundVolume: 0.5,
  },
};
