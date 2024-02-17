import InteractiveBackground from "@/components/interactive-background";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[100dvh] overscroll-none">
      <InteractiveBackground />
      {children}
    </div>
  );
}
