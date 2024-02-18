import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function EndContent() {
  const t = useTranslations("end");
  return (
    <div className="flex w-full flex-col items-start gap-6 bg-white px-7 py-14 text-start text-sm text-footer-brown">
      <p className="mb-4 text-lg font-semibold">
        {t("youMay")}
        <br />
        {t("within")}
      </p>
      <p>{t("likeAny")}</p>
      <p>{t("amidst")}</p>
      <p>{t("youCan")}</p>
      <div>
        {t("freeEntry")}
        <br />
        <Link
          href="https://www.zipeventapp.com/e/Warehouse-of-Heart"
          className="text-[#0031FC] underline"
        >
          {t("register")}
        </Link>
        {t("toJoin")}
      </div>
      <Image
        src="/img/Detail_WOH.webp"
        width={0}
        height={0}
        alt="WOH detail"
        style={{ width: "100%", height: "auto" }}
        className="mt-2 self-center"
      />
      <p>{t("exceptTo")}</p>
      <div>
        <div className="font-semibold">
          Workshop 1 :<br />
          {t("makeAZine")}
        </div>
        {t("capture")}
      </div>
      <div>
        <div className="font-semibold">{t("yepandhandicraft")}</div>
        {t("buildMemories")}
      </div>
      <div>
        <div className="font-semibold">
          Workshop 3 : Release Your Little Angel
        </div>
        {t("discover")}
      </div>
      <div>
        <div className="font-semibold">Workshop 4 : Transfer Photo</div>
        {t("createArtwork")}
      </div>
      <div>
        {t("forMore")}
        <br />
        Instagram: @cbc.exhibit
        <br />
        TikTok: @cbc.exhibit
        <br />
        #Warehouseofheart
      </div>
      <div className="flex items-center justify-center gap-2 self-center">
        <Link href="https://www.instagram.com/cbc.exhibit/">
          <svg
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="44" height="44" rx="22" fill="#595146" />
            <path
              d="M28.332 10.334H16.6654C13.4437 10.334 10.832 12.9457 10.832 16.1673V27.834C10.832 31.0556 13.4437 33.6673 16.6654 33.6673H28.332C31.5537 33.6673 34.1654 31.0556 34.1654 27.834V16.1673C34.1654 12.9457 31.5537 10.334 28.332 10.334Z"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.1657 21.2654C27.3097 22.2363 27.1438 23.2279 26.6917 24.0992C26.2396 24.9705 25.5243 25.677 24.6476 26.1183C23.7708 26.5596 22.7772 26.7132 21.8081 26.5573C20.839 26.4013 19.9437 25.9438 19.2497 25.2497C18.5556 24.5556 18.098 23.6604 17.9421 22.6913C17.7861 21.7222 17.9398 20.7286 18.3811 19.8518C18.8224 18.975 19.5289 18.2597 20.4002 17.8076C21.2714 17.3556 22.2631 17.1897 23.234 17.3337C24.2244 17.4806 25.1413 17.9421 25.8493 18.65C26.5573 19.358 27.0188 20.2749 27.1657 21.2654Z"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.918 15.584H28.9296"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link href="https://www.tiktok.com/@cbc.exhibit/">
          <svg
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="44" height="44" rx="22" fill="#595146" />
            <path
              d="M32.0357 16.9503V18.2895C31.2132 18.1482 30.4203 17.9111 29.6884 17.5691L29.6791 17.5648L29.6698 17.5606C29.174 17.3373 28.6914 17.044 28.1534 16.6967L25.9043 15.2449L25.895 17.9219C25.891 19.0752 25.8915 20.2209 25.892 21.3626C25.8928 23.2433 25.8937 25.1134 25.8743 26.9898C25.7996 28.1765 25.4011 29.3429 24.7218 30.2951L24.7154 30.304L24.7092 30.3131C23.5925 31.9288 21.6345 32.9916 19.6532 33.0252L19.6253 33.0257L19.5973 33.0272C18.4003 33.0933 17.1734 32.7705 16.1104 32.1512L16.1094 32.1506C14.3799 31.1448 13.1715 29.3022 12.9836 27.3707C12.9649 26.8958 12.9568 26.4464 12.9729 26.0177C13.1354 24.4344 13.9389 22.9079 15.1745 21.8719L15.1804 21.867L15.1862 21.862C16.313 20.897 17.7909 20.3342 19.2593 20.3022C19.2551 20.7113 19.2478 21.1162 19.2403 21.5269C19.2378 21.662 19.2354 21.7978 19.233 21.9346C18.352 21.9712 17.4616 22.2241 16.6862 22.7472C15.7558 23.3502 15.0605 24.2548 14.6917 25.2666C14.3837 26.036 14.4214 26.885 14.4409 27.3257C14.4439 27.3924 14.4464 27.4497 14.4473 27.496L14.4491 27.5901L14.4629 27.6832C14.8181 30.0799 17.0946 32.1159 19.6749 31.9214C21.3667 31.8854 22.9215 30.9268 23.7722 29.5512L23.7822 29.5351L23.7917 29.5187C23.8034 29.4987 23.8175 29.4752 23.8336 29.4485C24.0038 29.1655 24.3937 28.5175 24.4224 27.742C24.5017 26.3276 24.4991 24.9024 24.4967 23.5249C24.4958 23.0439 24.4949 22.5687 24.4976 22.1019L24.4976 22.0973C24.5016 20.5138 24.5011 18.9374 24.5006 17.3643C24.4999 15.2306 24.4992 13.103 24.5097 10.9724C24.8449 10.9711 25.1795 10.9707 25.5158 10.9702C25.6436 10.97 25.7716 10.9698 25.9 10.9696C26.2017 12.397 26.8691 13.8085 28.0094 14.8973C29.1595 16.0192 30.615 16.6347 32.0357 16.9503Z"
              fill="black"
              stroke="#F8F8F7"
              strokeWidth="2.92856"
            />
          </svg>
        </Link>
        <Link href="mailto:coachbychamp.pd2023@gmail.com">
          <svg
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="44" height="44" rx="22" fill="#595146" />
            <path
              d="M13.5 13H31.5C32.7375 13 33.75 14.0125 33.75 15.25V28.75C33.75 29.9875 32.7375 31 31.5 31H13.5C12.2625 31 11.25 29.9875 11.25 28.75V15.25C11.25 14.0125 12.2625 13 13.5 13Z"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.75 15.25L22.5 23.125L11.25 15.25"
              stroke="#F8F8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="h-px w-full bg-brown" />
      <div>
        <p className="font-serif font-bold text-woh-black">ORGANIZE BY</p>
        <div className="mt-3 flex items-center justify-between">
          <Image
            src="/img/Logo_CBC.webp"
            width={0}
            height={0}
            alt="CBC logo"
            style={{ width: "35%", height: "auto" }}
          />
          <Image
            src="/img/Logo_CBA.webp"
            width={0}
            height={0}
            alt="CBA logo"
            style={{ width: "27%", height: "auto" }}
          />
          <Image
            src="/img/Logo_TCDC.webp"
            width={0}
            height={0}
            alt="TCDC logo"
            style={{ width: "20%", height: "auto" }}
          />
        </div>
      </div>
      <div className="h-px w-full bg-brown" />
      <div className="flex flex-col gap-5">
        <p className="font-serif font-bold text-woh-black">
          EXPLORE OUR SUPPORTER CONTENTS
        </p>
        <Link
          href="https://www.facebook.com/konceptplayshop"
          className="w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <Image
            src="/img/spon1.webp"
            width={0}
            height={0}
            alt="CBC logo"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="bg-woh-white py-2 pl-3">
            <p className="font-serif font-bold text-woh-black">KONCEPT PLAY</p>
            <p className="text-xs text-woh-black">{t("spon1Desc")}</p>
          </div>
        </Link>
        <Link
          href="https://www.apthai.com/th/ap-livewell"
          className="w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <Image
            src="/img/spon2.webp"
            width={0}
            height={0}
            alt="CBC logo"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="bg-woh-white py-2 pl-3">
            <p className="font-serif font-bold text-woh-black">
              SPACE INNOVATIONS & DESIGN
            </p>
            <p className="text-xs text-woh-black">
              หากคุณเชื่อว่าชีวิตยังดีได้อีก คลิกฟังเลย
            </p>
          </div>
        </Link>
      </div>
      <div className="h-px w-full bg-brown" />
      <div>
        <p className="font-serif font-bold text-woh-black">SUPPORTER</p>
        <div className="mt-5 flex items-center justify-between">
          <Image
            src="/img/Logo_zip.webp"
            width={0}
            height={0}
            alt="zip event logo"
            style={{ width: "67%", height: "auto" }}
          />
          <Image
            src="/img/Logo_converse.webp"
            width={0}
            height={0}
            alt="Converse logo"
            style={{ width: "22%", height: "auto" }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Image
            src="/img/Logo_Major.webp"
            width={0}
            height={0}
            alt="Major Cineplex logo"
            style={{ width: "10%", height: "auto" }}
            className="ml-[5px]"
          />
          <Image
            src="/img/Logo_Papaya.webp"
            width={0}
            height={0}
            alt="Papaya logo"
            style={{ width: "24%", height: "auto" }}
            className="ml-[5px]"
          />
          <div className="flex w-[47%] items-center justify-between gap-2">
            <Image
              src="/img/Logo_haus64_graphic.webp"
              width={0}
              height={0}
              alt="Haus64 logo"
              style={{ width: "29%", height: "auto" }}
            />
            <Image
              src="/img/Logo_haus64_text.webp"
              width={0}
              height={0}
              alt="Haus64 logo"
              style={{ width: "66%", height: "auto" }}
            />
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <Image
            src="/img/Logo_koncept.webp"
            width={0}
            height={0}
            alt="Koncept Play logo"
            style={{ width: "41%", height: "auto" }}
            className="ml-[9px]"
          />
          <Image
            src="/img/Logo_acer.webp"
            width={0}
            height={0}
            alt="acer logo"
            style={{ width: "35%", height: "auto" }}
          />
          <div className="w-[10%]"></div>
        </div>
      </div>
      <div className="h-px w-full bg-brown" />
      <div>
        <p className="font-serif font-bold text-woh-black">ASSOCIATED WITH</p>
        <Image
          src="/img/Logo_CWC.webp"
          width={0}
          height={0}
          alt="Chula Wellness Center logo"
          style={{ width: "42%", height: "auto" }}
          className="mt-5"
        />
      </div>
      <div className="h-px w-full bg-brown" />
      <div className="text-woh-black">
        <p className="font-serif font-bold">ILLUSTRATION BY</p>
        <div className="mt-5 flex w-full items-center justify-start gap-4">
          <Image
            src="/img/Logo_whosehiddenplace.webp"
            width={0}
            height={0}
            alt="whosehiddenplace logo"
            style={{ width: "27%", height: "auto" }}
          />
          <p>IG: whosehiddenplace</p>
        </div>
      </div>
    </div>
  );
}
