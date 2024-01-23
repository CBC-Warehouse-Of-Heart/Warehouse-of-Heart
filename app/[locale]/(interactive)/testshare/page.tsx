"use client";
import { Button } from "@/components/ui/button";
// import { Slider } from "@mui/material";
import { Slider } from "@/components/ui/slider";
import { useToBlob } from "@hugocxl/react-to-image";

export default function Page2_1a() {
  const handleShare = async (data: Blob) => {
    const image = new File([data], "image.png", {
      type: data.type,
    });
    const shareData: ShareData = {
      title: "Warehouse of Heart Postcard",
      text: "Your Postcard",
      url: "https://google.com",
      files: [image],
    };
    try {
      navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.log("Error: " + err);
    }
  };
  const [_, convert, ref] = useToBlob<HTMLDivElement>({
    onStart: () => console.log("Starting..."),
    onSuccess: (data) => {
      console.log("Success", data);
      if (data) handleShare(data);
    },
    onError: (error) => console.log("Error", error),
  });

  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      ref={ref}
    >
      <div className="mb-5 text-center text-xl">
        <p className="text-white">ถ้าให้คะแนนสำหรับวันนี้ คงจะได้...</p>
        <Slider
          onValueChange={(newValue) => console.log(newValue)}
          className="mt-20"
          defaultValue={[1]}
          min={1}
          max={10}
          step={1}
        />
      </div>
      <Button onClick={convert} className="mb-5" size={"lg"}>
        Share
      </Button>
      {/* <Button onClick={convert} size={"lg"}>
        Download
      </Button> */}
    </div>
  );
}
