'use client'
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter()

  //const playAudio = () => {
    
  return (
    <div className="bg-brown fixed bottom-0 left-0 right-0 text-center h-[146px]">
        <div className="mt-[13px] text-white">
        <p className="font-serif text-center text-[15px]">Warehouse of Heart Exhibition 2024<br/>
        </p>
        <p className="font-serif text-[13px]">Coach by ChAMP all rights reserved<br/></p>
        <p className="font-serif text-[15px] mt-[20px]">contact us: cbc_woh2024@gmail.com</p>
        </div>
        
    </div>
  );
}
