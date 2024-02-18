import GoogleAnalytics from "@/components/google-analytics";
import Sounds from "@/components/sounds";
import LangToggle from "@/components/toggle/lang-toggle";
import SoundToggle from "@/components/toggle/sound-toggle";
import { Separator } from "@/components/ui/separator";
import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  IBM_Plex_Sans_Thai_Looped,
  Lora,
  Nothing_You_Could_Do,
} from "next/font/google";
import "../globals.css";

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--nothing-you-could-do-font",
});

export const metadata: Metadata = {
  title: "Warehouse of Heart",
  description: "Warehouse of Heart",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body
        className={cn(
          {
            [lora.className]: locale === "en",
            [ibmPlexSansThaiLooped.className]: locale === "th",
          },
          nothingYouCouldDo.variable,
          "relative mx-auto min-h-screen w-full max-w-md ",
        )}
      >
        <Sounds />
        <GoogleAnalytics />
        <div className="absolute right-5 top-10 z-50 flex w-full items-center justify-end">
          <LangToggle />
          <Separator orientation="vertical" className="h-7" />
          <SoundToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
