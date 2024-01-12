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
    <>
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
            <SliderPrimitive.Range className="absolute h-full bg-pink-brown-slider" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            className="block h-7 w-7 rounded-full bg-light-pink-brown-slider ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            style={{
              boxShadow: "0 4px 10px 5px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
          >
            <div
              className="bg-value-box background-size-100-102 absolute -top-[45px] left-[60%] m-auto 
              w-[50px] -translate-x-1/2 bg-cover bg-no-repeat text-lg text-white"
            >
              <p className="mb-4 mr-2 mt-0 font-serif">{value}</p>
            </div>
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Root>

        <div></div>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="ml-1 font-serif">1</p>
        <p className="mr-1 font-serif">10</p>
      </div>
    </>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
