"use client";
import { useState } from "react";
import AppContext from "../../../components/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState();

  return (
    <AppContext.Provider value={{ session, setSession }}>
      <div className="bg-secondary-white flex h-screen justify-center overflow-hidden">
        {children}
      </div>
    </AppContext.Provider>
  );
}
