"use client";
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
     <div className="flex justify-center h-screen overflow-hidden bg-secondary-white">
     {children}
      </div> 
    </AppContext.Provider>
  );
}
