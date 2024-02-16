"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { usePathname, useRouter } from "@/lib/navigation";
import { useEffect, useMemo, useState } from "react";
import AnimatedImage from "./animated-image";
import { useLocale } from "next-intl";

const InteractiveBackground = () => {
  const locale = useLocale();
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const [bgImgSrc, setBgImgSrc] = useState<string>();
  useEffect(() => {
    switch (page) {
      case "4-9":
        const backgrounds = backgroundMapConfig[page].image.filter(
          (path) => !path.includes(locale === "th" ? "en" : "th"),
        );
        backgroundMapConfig[page].stopMotionDuration * backgrounds.length;
        backgrounds.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("4-10");
              }, 500);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "4-13":
        const animationDuration_4_13 =
          backgroundMapConfig[page].stopMotionDuration *
          backgroundMapConfig[page].image.length;
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("4-14");
              }, animationDuration_4_13);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
        case "2-7":
          const animationDuration =
            backgroundMapConfig[page].stopMotionDuration *
            backgroundMapConfig[page].image.length;
          backgroundMapConfig[page].image.forEach((image, index) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("2-8");
                }, 500);
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
