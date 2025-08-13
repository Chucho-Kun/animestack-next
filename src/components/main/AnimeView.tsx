"use client"
import { Animes } from "@/generated/prisma";
import { useStore } from "../../utils/store";
import Image from "next/image";

type AnimeViewProps = {
    anime: Animes
}

export default function AnimeView({ anime }: AnimeViewProps) {

    const { userLogin } = useStore()

    return (
        <div className="bg-[#141414] min-h-screen text-white flex flex-col items-center py-10">
            <div className="bg-[#222] rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
                <Image
                    width={198}
                    height={297}
                    className="w-56 h-80 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
                    alt={`portada anime ${anime.name}`}
                    src="/covers/1c.png"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-4">{anime.name}</h1>
                    <p className="mb-4 text-gray-300">{anime.review}</p>
                    <div className="mb-2">
                        <div className="font-semibold">{anime.studio}</div>
                    </div>
                    <div className="mb-2">
                        <div className="font-light">{anime.date}</div>
                    </div>
                    <div className="mb-2">
                        <span className="font-light">Géneros:
                            <div className="font-semibold">{anime.gender}</div>
                        </span>
                    </div>
                    <div className="mb-2">
                        <span className="text-yellow-400 text-bold">⭐ 4.8 <b className="font-light text-sm">(123)</b></span>
                    </div>

                    {userLogin ? (
                        <div>CALIFICA ESTE ANIME / RANKEASTE EL ANIME CON ...:</div>
                    ) : ( 
                        <button>REGISTRATE PARA RANKEAR EL ANIME</button>
                    )}
                </div>
            </div>
        </div>
    );
}
