"use client";
// Interactive game layout here
import React, { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sound, setSound] = useState(true);

  return (
    <div className="h-full w-full bg-[radial-gradient(62.09%_62.09%_at_50%_50%,_#8F3939_0%,_#FFB094_20.31%,_#FFFCF5_100%)]">
      <div className="fixed right-4 top-12" onClick={() => setSound(!sound)}>
        {sound && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B5B5B5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-volume-2"
          >
            <polygon
              points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
              fill="#B5B5B5"
            />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
        {!sound && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B5B5B5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-volume-x"
          >
            <polygon
              points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
              fill="#B5B5B5"
            />
            <line x1="22" x2="16" y1="9" y2="15" />
            <line x1="16" x2="22" y1="9" y2="15" />
          </svg>
        )}
      </div>
      {children}
    </div>
  );
}
