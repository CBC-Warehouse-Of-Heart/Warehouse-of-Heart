import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Thai_Looped,
  Lora,
  Nothing_You_Could_Do,
} from "next/font/google";
import "../globals.css";

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--ibm-plex-sans-thai-looped-font",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  variable: "--lora-font",
  subsets: ["latin"],
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: ["400"],
  variable: "--nothing-you-could-do-font",
  subsets: ["latin"],
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
  return (
    <html lang={locale}>
      <body
        className={cn(
          lora.variable,
          ibmPlexSansThaiLooped.variable,
          nothingYouCouldDo.variable,
          "h-screen w-screen",
        )}
      >
        {children}
      </body>
    </html>
  );
}
