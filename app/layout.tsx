import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai_Looped, Lora } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Warehouse of Heart",
  description: "Warehouse of Heart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          lora.variable,
          ibmPlexSansThaiLooped.variable,
          "h-screen w-screen ",
        )}
      >
        {children}
      </body>
    </html>
  );
}
