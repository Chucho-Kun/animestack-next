import Link from "next/link"
import { prisma } from "../../libs/prisma"
import Image from "next/image"

export default async function CarruselAnimeMain() {

    const animes = await prisma.animes.findMany()

    return (
        <div className="bg-[#141414] min-h-screen text-white">
            <h1 className="ml-10 text-3xl font-bold pt-8">Best Rank Animes</h1>
            <div className="flex overflow-x-auto p-10 gap-6">
                {animes.map(anime => (
                    <Link key={anime.id} href={`/anime/${anime.nameUrl}`}>
                    <div
                        className="bg-gray-800 hover:bg-gray-700 transition rounded-lg w-[240px] shadow-lg p-4 text-center flex flex-col items-center"
                    >
                        <Image
                            width={198}
                            height={297}
                            className="mb-3"
                            alt={`portada anime ${anime.name}`}
                            src={anime.img}
                        />

                        <h2 className="text-sm font-semibold my-2 min-h-[2.5rem] flex text-left">
                            {anime.name}
                        </h2>
                        <div className="text-xs font-bold py-2 text-gray-500">{anime.studio}</div>
                        <div className="text-xs min-h-[2.5rem] text-gray-400">{anime.gender}</div>
                        <p className="text-sm font-bold text-orange-600">⭐ 4/8</p>
                        
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
