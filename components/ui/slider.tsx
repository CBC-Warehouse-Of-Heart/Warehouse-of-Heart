"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, onValueChange, ...props }, ref) => {
  const [value, setValue] = React.useState(props.defaultValue || props.value);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    onValueChange && onValueChange(newValue);
  };

  return (
    <div
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
    >
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className,
        )}
        {...props}
        onValueChange={handleChange}
        value={value}
      >
        <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full bg-woh-white">
          <SliderPrimitive.Range className="absolute h-full bg-purple-slider" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-7 w-7 rounded-full bg-light-purple-slider ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          style={{ boxShadow: "0 4px 10px 5px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="pointer-events-none absolute -left-1/2 -top-14 flex h-10 w-16 items-center justify-center rounded-lg bg-purple-slider text-center text-lg font-bold text-white">
            {value}
          </div>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
