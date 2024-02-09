"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface AnimatedImageProps extends ImageProps {
  src: string;
  preloadSrcs: (typeof backgroundMapConfig)[keyof typeof backgroundMapConfig]["imagePreload"];
}

const AnimatedImage = ({
  src,
  alt,
  preloadSrcs,
  ...props
}: AnimatedImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attachPreload, setAttachPreload] = useState(false);

  useEffect(() => {
    if (src !== currentSrc) setAttachPreload(true);
  }, [src]);

  return (
    <>
      {attachPreload && (
        <Image
          src={src}
          alt={`attached-preload-${alt}`}
          priority={true}
          onLoad={() => {
            setCurrentSrc(src);
          }}
          {...props}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSrc}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setAttachPreload(false);
            }, 500);
          }}
        >
          <Image src={currentSrc} alt={alt} {...props} />
        </motion.div>
      </AnimatePresence>
      {preloadSrcs.map((src, index) => (
        <Image
          key={`preload-${index}`}
          src={src}
          alt={`preload-${alt}`}
          loading="eager"
          priority={true}
          {...props}
          className="hidden"
          onLoad={() => {
            console.log(`preloaded image: ${src}`);
          }}
        />
      ))}
    </>
  );
};

export default AnimatedImage;
