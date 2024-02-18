import InteractiveBackground from "@/components/interactive-background";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // change dvh to vh
    <div className="relative min-h-screen overscroll-none">
      <InteractiveBackground />
      {children}
    </div>
  );
}
