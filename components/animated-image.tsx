"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface AnimatedImageProps extends ImageProps {
  src: string;
}

const AnimatedImage = ({ src, alt, ...props }: AnimatedImageProps) => {
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
          alt={alt}
          onLoadingComplete={() => {
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
            setAttachPreload(false);
          }}
        >
          <Image src={currentSrc} alt={alt} {...props} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedImage;
