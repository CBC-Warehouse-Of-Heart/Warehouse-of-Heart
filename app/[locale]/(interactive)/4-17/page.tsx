"use client";
import ConfirmPopup from "@/components/ui/confirmPopup";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DownloadImageAlert from "@/components/ui/downloadImageAlert";
import NextButton from "@/components/ui/nextButton";
import { useShareYourselfWordsStore } from "@/store/shareYourselfWords";
import { useStickerStore } from "@/store/sticker";
import { useRenderedStrokes } from "@/utils/svg";
import { AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("4-17");
  const { words } = useShareYourselfWordsStore();
  const { stickerBgStyle } = useStickerStore();
  const wordsRef = useRef<HTMLDivElement>(null);
  const [downloadAlert, setDownloadAlert] = useState<boolean>(false);
  const allStrokes = useRenderedStrokes(5);

  const onButtonClick = useCallback(() => {
    if (wordsRef.current === null) {
      return;
    }
    setDownloadAlert(true);
    window.setTimeout(() => {
      setDownloadAlert(false);
    }, 3000);
    toPng(wordsRef.current, { cacheBust: true })
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.download = "warehouseofheart.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wordsRef]);

  return (
    <div className="absolute flex h-full w-full flex-col items-center overflow-hidden">
      <div className={stickerBgStyle} ref={wordsRef}>
        <div className="z-1 absolute mr-8 mt-[25vh] flex h-[480px] w-[284px] flex-col items-start rounded-xl">
          <div className="flex">
            <p className="font-cursive text-lg text-woh-black">{t("dear")}</p>
            <svg id="svg" className="relative h-[30px] w-[63px] touch-none">
              {allStrokes}
            </svg>
          </div>
          <div className="mt-1 overflow-hidden break-words text-base text-woh-black">
            <p>{words}</p>
          </div>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild className="z-1 absolute bottom-[16vh]">
          <div
            onClick={onButtonClick}
            className="flex h-11 w-11 items-center justify-center gap-2.5 rounded-full bg-[#FFF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M20.625 19.412H1.375C0.615608 19.412 0 19.9914 0 20.7061C0 21.4208 0.615608 22.0002 1.375 22.0002H20.625C21.3844 22.0002 22 21.4208 22 20.7061C22 19.9914 21.3844 19.412 20.625 19.412Z"
                fill="#AA5656"
              />
              <path
                d="M11 15.5296C10.7149 15.5317 10.4362 15.4503 10.2025 15.2967L4.70249 11.6473C4.40606 11.4494 4.20494 11.1491 4.1431 10.812C4.08126 10.4749 4.16374 10.1285 4.37249 9.84849C4.4767 9.70853 4.60933 9.58938 4.76273 9.49793C4.91612 9.40647 5.08725 9.34451 5.26622 9.31564C5.4452 9.28676 5.62848 9.29153 5.80548 9.32968C5.98248 9.36783 6.14971 9.4386 6.29749 9.53791L11 12.6308L15.675 9.31791C15.9667 9.11198 16.3334 9.02356 16.6944 9.07209C17.0555 9.12063 17.3812 9.30215 17.6 9.57673C17.8188 9.8513 17.9127 10.1964 17.8612 10.5362C17.8096 10.876 17.6167 11.1825 17.325 11.3885L11.825 15.2708C11.587 15.4388 11.2975 15.5296 11 15.5296Z"
                fill="#AA5656"
              />
              <path
                d="M11 12.9411C10.6353 12.9411 10.2856 12.8047 10.0277 12.562C9.76987 12.3193 9.625 11.9902 9.625 11.647V1.29411C9.625 0.950888 9.76987 0.621727 10.0277 0.379035C10.2856 0.136343 10.6353 0 11 0C11.3647 0 11.7144 0.136343 11.9723 0.379035C12.2301 0.621727 12.375 0.950888 12.375 1.29411V11.647C12.375 11.9902 12.2301 12.3193 11.9723 12.562C11.7144 12.8047 11.3647 12.9411 11 12.9411Z"
                fill="#AA5656"
              />
            </svg>
          </div>
        </DialogTrigger>
        <AnimatePresence>
          {downloadAlert && <DownloadImageAlert />}
        </AnimatePresence>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild className="z-1 absolute bottom-[8vh]">
          <div>
            <NextButton />
          </div>
        </DialogTrigger>
        <ConfirmPopup />
      </Dialog>
    </div>
  );
};

export default Page;
