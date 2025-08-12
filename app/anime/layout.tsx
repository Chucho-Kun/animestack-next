"use client"
import DesktopNavbar from "@/src/components/main/DesktopNavbar";
import MovilNavbar from "@/src/components/main/MovilNavbar";
import { ReactNode } from "react";

export default function mainLayout({children}: Readonly<{ children : ReactNode }>) {

  return (
   <div>
    <DesktopNavbar />
    <MovilNavbar /> 
    {children}
    <footer 
        className="bg-gray-900 text-center text-amber-500 uppercase text-sm py-5"
    >animestack todos los derechos reseravados 2025</footer>
   </div>
  )
}

