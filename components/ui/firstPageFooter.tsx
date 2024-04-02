import Image from "next/image";

export default function FirstPageFooter() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex h-1/4 flex-col bg-white px-6 py-3 font-serif">
      <p className="text-left font-bold">SUPPORTER</p>
      <div className="flex items-center justify-between px-6 py-1">
        <Image
          src="/img/Logo_zip.webp"
          width={0}
          height={0}
          alt="zip event logo"
          style={{ width: "50%", height: "auto" }}
        />
        <Image
          src="/img/Logo_CPG.webp"
          width={0}
          height={0}
          alt="CPG logo"
          style={{ width: "15%", height: "auto" }}
        />
        <Image
          src="/img/Logo_converse.webp"
          width={0}
          height={0}
          alt="converse logo"
          style={{ width: "22%", height: "auto" }}
        />
      </div>
      <div className="flex items-center justify-between px-8 py-1">
        <Image
          src="/img/Logo_Major.webp"
          width={0}
          height={0}
          alt="Major Cineplex logo"
          style={{ width: "13%", height: "auto" }}
        />
        <Image
          src="/img/Logo_Papaya.webp"
          width={0}
          height={0}
          alt="Papaya logo"
          style={{ width: "30%", height: "auto" }}
        />
        <div className="flex w-[42%] items-center justify-between gap-2">
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
      <div className="flex items-center justify-center gap-4 px-10 py-1">
        <Image
          src="/img/Logo_koncept.webp"
          width={0}
          height={0}
          alt="Koncept Play logo"
          style={{ width: "32%", height: "auto" }}
          className="pl-4"
        />
        <div className="w-[45%] pt-2">
          <Image
            src="/img/Logo_acer.webp"
            width={0}
            height={0}
            alt="acer logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
