"use client";
import ConfirmPopup from "@/components/ui/confirmPopup";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DownloadImageAlert from "@/components/ui/downloadImageAlert";
import NextButton from "@/components/ui/nextButton";
import { AnimatePresence, motion } from "framer-motion";
import { toJpeg } from "html-to-image";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [postcardNo, setPostcardNo] = useState<string | null>(null);
  const [downloadAlert, setDownloadAlert] = useState(false);

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
    const postcard = document.getElementById("postcard");
    if (!postcard) return;

    const dataUrl = await convertImage(postcard);

    const link = document.createElement("a");
    link.download = "Postcard from Warehouse of Heart.jpeg";
    link.href = dataUrl;
    link.click();

    setDownloadAlert(true);
    window.setTimeout(() => {
      setDownloadAlert(false);
    }, 3000);
  };

  const shareImage = async () => {
    const postcard = document.getElementById("postcard");
    if (!postcard) return;

    const dataUrl = await convertImage(postcard);

    const dataBlob = await (await fetch(dataUrl)).blob();
    if (!dataBlob) return;

    const image = new File([dataBlob], "Postcard from Warehouse of Heart.png", {
      type: dataBlob.type,
    });
    const shareData: ShareData = {
      title: "Warehouse of Heart Postcard",
      text: "Your Postcard",
      files: [image],
    };

    try {
      navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    const slider = localStorage.getItem("slider");
    const score = slider
      ? Math.max(1, Math.min(10, parseInt(slider)))
      : Math.floor(Math.random() * 10) + 1;

    switch (score) {
      case 1:
        setPostcardNo("01");
        break;
      case 2:
      case 3:
        setPostcardNo("02");
        break;
      case 4:
      case 5:
        setPostcardNo("03");
        break;
      case 6:
        setPostcardNo("04");
        break;
      case 7:
        setPostcardNo("05");
        break;
      case 8:
      case 9:
        setPostcardNo("06");
        break;
      case 10:
        setPostcardNo("07");
    }
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-start pt-20">
      <div
        className="relative z-10 mb-4 aspect-[264/470] h-[80%] max-h-[678px] max-w-[85%]"
        id="postcard"
      >
        {postcardNo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="absolute inset-0 h-full w-full overflow-hidden"
          >
            <Image
              src={"/postcards/postcard-" + "th" + "-" + postcardNo + ".png"}
              alt="Warehouse of Heart Postcard"
              objectFit="contain"
              fill
              className="h-full w-full"
            />
            <p className="font-postcard absolute left-[58%] top-[68%] z-10 -translate-x-1/2 -translate-y-1/2 transform text-xs">
              #WarehouseofHeart
            </p>
          </motion.div>
        )}
      </div>
      <div className="z-10 mb-4 flex space-x-3">
        <Dialog>
          <DialogTrigger asChild>
            <button onClick={downloadImage}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 25">
                  <circle
                    id="Ellipse 30"
                    cx="22"
                    cy="22"
                    r="22"
                    fill="#F8F8F7"
                  />
                  <g id="&#240;&#159;&#166;&#134; icon &#34;download outline&#34;">
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M31.625 29.1895H12.375C11.6156 29.1895 11 29.7688 11 30.4836C11 31.1983 11.6156 31.7777 12.375 31.7777H31.625C32.3844 31.7777 33 31.1983 33 30.4836C33 29.7688 32.3844 29.1895 31.625 29.1895Z"
                        fill="#AA5656"
                      />
                      <path
                        id="Vector_2"
                        d="M22.0019 25.3065C21.7169 25.3085 21.4382 25.2271 21.2044 25.0735L15.7044 21.4242C15.408 21.2262 15.2069 20.9259 15.1451 20.5888C15.0832 20.2518 15.1657 19.9054 15.3744 19.6253C15.4787 19.4854 15.6113 19.3662 15.7647 19.2748C15.9181 19.1833 16.0892 19.1214 16.2682 19.0925C16.4472 19.0636 16.6304 19.0684 16.8074 19.1065C16.9844 19.1447 17.1517 19.2155 17.2994 19.3148L22.0019 22.4077L26.6769 19.0948C26.9687 18.8888 27.3354 18.8004 27.6964 18.8489C28.0574 18.8975 28.3831 19.079 28.6019 19.3536C28.8207 19.6282 28.9147 19.9733 28.8631 20.3131C28.8116 20.6528 28.6187 20.9594 28.3269 21.1653L22.8269 25.0477C22.5889 25.2157 22.2995 25.3065 22.0019 25.3065Z"
                        fill="#AA5656"
                      />
                      <path
                        id="Vector_3"
                        d="M22 22.7184C21.6353 22.7184 21.2856 22.5821 21.0277 22.3394C20.7699 22.0967 20.625 21.7675 20.625 21.4243V11.0715C20.625 10.7282 20.7699 10.3991 21.0277 10.1564C21.2856 9.91369 21.6353 9.77734 22 9.77734C22.3647 9.77734 22.7144 9.91369 22.9723 10.1564C23.2301 10.3991 23.375 10.7282 23.375 11.0715V21.4243C23.375 21.7675 23.2301 22.0967 22.9723 22.3394C22.7144 22.5821 22.3647 22.7184 22 22.7184Z"
                        fill="#AA5656"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </DialogTrigger>
          <AnimatePresence>
            {downloadAlert && <DownloadImageAlert />}
          </AnimatePresence>
        </Dialog>
        <button onClick={shareImage}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <circle cx="22" cy="22" r="22" fill="#F8F8F7" />
            <rect x="8" y="10" width="25" height="25" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1827_7208"
                  transform="scale(0.0104167)"
                />
              </pattern>
              <image
                id="image0_1827_7208"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOklEQVR4nO2cO28TQRSFV4gGRIcoIICgpIGfAFQIKaCkOGdTIETLM3SUVjpaCl7iJVEQz7WCxDtUhJ8ADU8hhRIEEQQQ4hU0jg3BgGOvd33HnvtJI1FEZu/c3Tt3Z86eJDEMwzAMwzAMw4gYAdYLeViASSEfC/ChOub/PSnAofE0Xad9nX2HAANCnhXym5BzTQfw3QEynqYbtK+7LyiTQ0LOLjrxDcOR7wXYrX39PY0Ao/6ObnfyG56GI9px9O6djw4mf0ES7Elok4nh4bVZyk6zcnRlZGRNu9cRLQ64mNfk/0oCcE47rl5qNb/lnQD/m/7J0o4veBxwpIDJrz8FB7XjCx4h7xSVAAFuaccXPEI+KywB5GPt+IJHcux+/jFmteOLOwHAO+34gseRTwtbhMlH2vEFjQPoyBlbhLvMeJpucsDdAmt/vQTt73ZsQXN1aGilkKcKevFqLD9f7UWsRqlUWiLkXiFfFX7X1xMAnKn//1FTJrcL+bBbE1/vfiaGh1cnMTMxv8N5uasTPz/538vkriRWrg8OLhdyTMhPGpPvz5CTmNtKIaczTqBfmE8JsE+At1nKTiVNB5MYKZNbhJzq4O6d8r/RUL4uCfCllW7HH+BHWfOvdt5WTvun5n+/X00EMOqAGwI8r0lSZv0brt/pFPJAlK1mqfO20q8PxwVYoR1Lz1FJ020OeJC13NTu5o3acUTXVjryUZncoR1HzyHAMgccy7xt7DsaYPTe1q1Lk9j4l7bSkR+FfCHkTSGPNtNWuhzaSr9QJ5GWiwstait9q3dpYTdRzrmtjIqs2spaqdhXZFvZ93SsrWTm4dvKMb8NkcRKbtpKttndWFuZv7ZSWhsP/Vaz9o3Xt9pKab5WxNlWdllbOdcw4m0rtbSV8nvE21ZqaisdORN1W6mtrXTkU+34gse0lX2cAEe+144veAR4UtjiCzzRji94bBFWxn+uX3gbCty3NvQ/+P18exFTRsjzhT8F/PU02FbEXwkABqpeCd1KAqvDNuMWUknTnV0qRXN/tKq2Hd2wL2QHMrp4o4pM5Qh47YA9Qp62I8kO8UYV3iuhlYl05Gf/twu1lWV/KA/c76A02e5p/aTMf67vgNtVPaXftpjXV/oNvGtestLMVUSAVICXGZNg5wd5ICbMCoMJkyaGQcXEufqUTJ4e1Acapwv9QIM8WtOxvqjqWs039G/y0JJWRkY2Z/lEqZb88347Jokd16Ga2gEna1/evGl7S8R8Q8P4TNV8QxvaVkf+6HYSzDdU2arAfEPDMOsw31BNuxrzDQ3AsMl8QxfBLMsCQMw3VD0BswWWIfMNXQzzDe1jbasz39DFMfPufta2wnxD1bSt5huqrG0131BNbav5hipqW2P3DVXVtsbuG6qsbY3XNzRvBFgl5ImaJ2grd/3lKH1DVbSt5htqGIZhGIZhGEaSLz8BOg/NfcETim8AAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </button>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <NextButton />
          </div>
        </DialogTrigger>
        <ConfirmPopup href="/feedback" />
      </Dialog>
    </div>
  );
}
