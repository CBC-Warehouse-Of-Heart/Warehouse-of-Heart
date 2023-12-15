"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { useState, useRef, } from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, onValueChange, ...props }, ref) => {
  const [value, setValue] = React.useState(props.defaultValue || props.value);

  const handleChange = (newValue:any) => {
    setValue(newValue);
    onValueChange && onValueChange(newValue);
  };
  
    // THis ref will be connected to the orange box
    const boxRef = useRef<HTMLDivElement>(null);

    // X
    const [x, setX] = useState<number | undefined>();
  
    // Y
    const [y, setY] = useState<number | undefined>();
  
    // This function calculate X and Y
    const getPosition = () => {
      const x = boxRef.current?.offsetLeft;
      setX(x);
  
      const y = boxRef.current?.offsetTop;
      setY(y);
    };


  return (
    <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
      <SliderPrimitive.Root
        ref={ref}
        className={cn("relative flex w-full touch-none select-none items-center", className)}
        {...props}
        onValueChange={handleChange}
        value={value}
      >
        <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full bg-woh-white">
          <SliderPrimitive.Range className="absolute h-full bg-purple-slider" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-7 w-7 rounded-full bg-light-purple-slider ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          style={{ boxShadow: '0 4px 10px 5px rgba(0, 0, 0, 0.2)' }}
        />
      </SliderPrimitive.Root>


      <div className="absolute top-0 left-0 mt-8 ml-2 px-2 py-1 bg-white text-black rounded shadow"
      ref={boxRef}
      style={{
        width: 40, textAlign: 'center', left: 120
      }}
      >
        {value}
      </div>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
