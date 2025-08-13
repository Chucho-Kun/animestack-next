"use client"
import Image from "next/image";
import { ReactNode, useState } from "react";
import { FaBars, FaHeart, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import Logo from "./Logo";

export default function MovilNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="lg:hidden bg-gray-800 text-white shadow-md relative">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Logo />
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl cursor-pointer mr-4">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col z-50">
                    <a href="/anime/new" className="hover:text-amber-300 font-bold hover:bg-gray-800 px-6 py-4 trasition" >Nuevos</a>
                    <a href="/anime/popular" className="hover:text-amber-300 font-bold hover:bg-gray-800 px-6 py-4 transition" >Populares</a>
                    <a href="/anime/categories" className="hover:text-amber-300 font-bold hover:bg-gray-800 px-6 py-4 transition" >Categorias</a>
                    <div className="flex justify-around my-5 text-xl">
                        <button className="hover:opacity-100 hover:text-amber-300 cursor-pointer hover:bg-black"><FaHeart /></button>
                        <button className="hover:opacity-100 hover:text-amber-300 cursor-pointer hover:bg-black"><FaSearch /></button>
                        <button className="hover:opacity-100 hover:text-amber-300 cursor-pointer hover:bg-black"><FaUser /></button>
                    </div>
                </div>
            )}
        </nav>
    )
}