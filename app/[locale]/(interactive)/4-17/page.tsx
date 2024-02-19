"use client";
import ConfirmPopup from "@/components/ui/confirmPopup";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/ui/downloadIcon";
import DownloadImageAlert from "@/components/ui/downloadImageAlert";
import NextButton from "@/components/ui/nextButton";
import { useShareYourselfWordsStore } from "@/store/shareYourselfWords";
import { useStickerStore } from "@/store/sticker";
import { useRenderedStrokes } from "@/utils/svg";
import { AnimatePresence } from "framer-motion";
import { toJpeg } from "html-to-image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("4-17");
  const { words } = useShareYourselfWordsStore();
  const { stickerBgStyle } = useStickerStore();
  const [downloadAlert, setDownloadAlert] = useState<boolean>(false);
  const allStrokes = useRenderedStrokes(5);
  const [userAgentData, setUserAgentData] = useState<string>();
  useEffect(() => {
    const parser = new UAParser(navigator.userAgent);
    setUserAgentData(parser.getDevice().model);
  }, []);

  const convertImage = async (element: HTMLElement) => {
    let dataUrl = "";
    const minDataLength = 150000;
    const maxAttempts = 20;

    for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
      dataUrl = await toJpeg(element, { quality: 0.95 });
    }

    return dataUrl;
  };

  const downloadImage = async () => {
    const exportedWords = document.getElementById("exportedWords");
    if (!exportedWords) return;

    const dataUrl = await convertImage(exportedWords);

    const link = document.createElement("a");
    link.download = "Warehouse of Heart.jpeg";
    link.href = dataUrl;
    link.click();

    setDownloadAlert(true);
    window.setTimeout(() => {
      setDownloadAlert(false);
    }, 3000);
  };

  const shareImage = async () => {
    const exportedWords = document.getElementById("exportedWords");
    if (!exportedWords) return;

    const dataUrl = await convertImage(exportedWords);

    const dataBlob = await (await fetch(dataUrl)).blob();
    if (!dataBlob) return;

    const image = new File([dataBlob], "Warehouse of Heart.png", {
      type: dataBlob.type,
    });
    const shareData: ShareData = {
      title: "Warehouse of Heart",
      text: "Your words",
      files: [image],
    };

    try {
      navigator.share(shareData);
      console.log("Shared successfully");
      setDownloadAlert(true);
      window.setTimeout(() => {
        setDownloadAlert(false);
      }, 3000);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden">
      <div className={stickerBgStyle} id="exportedWords">
        <div className="z-1 absolute top-1/4 mr-8 mt-[-4vh] flex h-[480px] w-[284px] flex-col items-start rounded-xl">
          <div className="flex">
            <p className="font-cursive text-lg text-woh-black">{t("dear")}</p>
            <svg id="svg" className="relative h-[30px] w-[63px] touch-none">
              {allStrokes}
            </svg>
          </div>
          <div className="mt-1 max-w-full overflow-hidden break-words text-base text-woh-black">
            <p>{words}</p>
          </div>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild className="z-1 absolute bottom-[10vh]">
          {userAgentData === "iPhone" ? (
            <div onClick={shareImage}>
              <DownloadIcon />
            </div>
          ) : (
            <div onClick={downloadImage}>
              <DownloadIcon />
            </div>
          )}
        </DialogTrigger>
        <AnimatePresence>
          {downloadAlert && <DownloadImageAlert />}
        </AnimatePresence>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild className="z-1 absolute bottom-[4vh]">
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
