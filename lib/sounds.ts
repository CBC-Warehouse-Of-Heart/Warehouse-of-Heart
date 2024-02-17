export const scenePageMap = {
  "1": "/sound/track/branding.mp3",
  "2": "/sound/track/room-1.mp3",
  "3": "/sound/track/room-1.mp3",
  "4": "/sound/track/room-2.mp3",
  "5": "/sound/track/room-5.mp3",
  end: "/sound/track/branding.mp3",
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
  "3-3": {
    soundEffect: {
      sound: "/sound/sound-effect/sceen-3-door-open.mp3",
    },
  },
  "3-5": {
    soundEffect: {
      sound: "/sound/sound-effect/scene-3-door-shut.mp3",
    },
  },
  "4-1": {
    backgroundVolume: 0.5,
  },
};
