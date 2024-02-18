"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { usePathname, useRouter } from "@/lib/navigation";
import { useLocale } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import AnimatedImage from "./animated-image";

const InteractiveBackground = () => {
  const locale = useLocale();
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const [bgImgSrc, setBgImgSrc] = useState<string>();
  useEffect(() => {
    switch (page) {
      case "3-1":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "3-3":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("3-4");
              }, backgroundMapConfig[page].stopMotionDuration);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "4-9":
        const backgrounds = backgroundMapConfig[page].image.filter(
          (path) => !path.includes(locale === "th" ? "en" : "th"),
        );
        backgrounds.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("4-10");
              }, backgroundMapConfig[page].stopMotionDuration);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "4-13":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("4-14");
              }, backgroundMapConfig[page].stopMotionDuration);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "2-7":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("2-8");
              }, backgroundMapConfig[page].stopMotionDuration);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "2-9":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("2-10");
              }, backgroundMapConfig[page].stopMotionDuration);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "5-5":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("6-1");
              }, backgroundMapConfig[page].stopMotionDuration);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      default:
        setBgImgSrc(backgroundMapConfig[page].image);
        break;
    }
  }, [page]);

  const imagePreloadSrc = useMemo(() => {
    const imagePreloadSrc = backgroundMapConfig[page].imagePreload;
    return imagePreloadSrc;
  }, [page]);
  return (
    <>
      {bgImgSrc && (
        <AnimatedImage
          src={bgImgSrc}
          preloadSrcs={imagePreloadSrc}
          alt="background-image"
          fill
          className="relative -z-50 object-cover"
        />
      )}
    </>
  );
};

export default InteractiveBackground;
