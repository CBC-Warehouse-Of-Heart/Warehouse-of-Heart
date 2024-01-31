'use client'
// Interactive game layout here
import React, { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [sound, setSound] = useState(true)

  return (
    <div className={"h-full w-full bg-[radial-gradient(80.99%_50%_at_50%_50%,#AA5656_0%,#CE9A87_51.04%,#F2DEB9_100%)] relative"}>
      <div className='fixed top-20 right-14' onClick={() => setSound(!sound)}>
        {sound && (
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24" fill="none" stroke="#F8F8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#F8F8F7"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        )}
        {!sound && (
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24" fill="none" stroke="#F8F8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#F8F8F7"/><line x1="22" x2="16" y1="9" y2="15" /><line x1="16" x2="22" y1="9" y2="15"/></svg>
        )}
      </div>
      {children}
    </div>
  );
}