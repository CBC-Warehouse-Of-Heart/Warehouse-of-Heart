import GoogleAnalytics from "@/components/google-analytics";
import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
          "min-h-[100dvh] w-full",
        )}
      >
        <SpeedInsights />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
