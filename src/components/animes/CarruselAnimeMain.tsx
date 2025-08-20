import Link from "next/link"
import { prisma } from "../../libs/prisma"
import Image from "next/image"

export default async function CarruselAnimeMain() {

    const animes = await prisma.animes.findMany({
        include:{
            followers: true,
            ranking: true
        }
    })

    return (
        <div className="bg-[#141414] min-h-screen text-white">
            <h1 className="ml-10 text-3xl font-bold pt-8">Best Rank Animes</h1>
            <div className="flex overflow-x-auto p-10 gap-6">
                {animes.map(anime => (
                    <Link key={anime.id} href={`/anime/${anime.nameUrl}`}>
                        <div
                            className="bg-gray-800 hover:bg-gray-700 transition w-[240px] h-[500px] shadow-lg text-center flex flex-col items-center justify-between pt-2"
                        >
                            <Image
                                width={198}
                                height={297}
                                className="w-56 h-80 object-cover"
                                alt={`portada anime ${anime.name}`}
                                src={anime.img}
                                priority={true}
                            />

                            <h2 className="text-sm font-semibold my-2 min-h-[2.5rem] flex items-center justify-center p-2">
                                {anime.name}
                            </h2>
                            <div className="text-xs font-bold py-2 text-gray-500">{anime.studio}</div>
                            <div className="text-xs min-h-[2.5rem] text-gray-400">{anime.gender}</div>
                            <div className="flex items-center justify-between gap-5">
                                <p className="text-sm font-bold text-orange-600 py-3">⭐ 4/8</p>
                                <p className="text-sm">👤 {anime.followers.length}</p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
