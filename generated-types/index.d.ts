import {
  HookOptions,
  ReturnedValue,
} from "../node_modules/use-sound/dist/types";
export default function useSound<T = any>(
  src: string | string[],
  {
    id,
    volume,
    playbackRate,
    soundEnabled,
    interrupt,
    onload,
    ...delegated
  }?: HookOptions<T>,
): ReturnedValue;
export { useSound };
