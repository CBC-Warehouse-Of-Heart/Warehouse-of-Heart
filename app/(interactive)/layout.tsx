"use client";
// Interactive game layout here
import { useState } from "react";
import AppContext from "../../components/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState();

  return (
    <AppContext.Provider value={{ session, setSession }}>
      <div className={"absolute h-full w-full bg-[#998060]"}>{children}</div>
    </AppContext.Provider>
  );
}
