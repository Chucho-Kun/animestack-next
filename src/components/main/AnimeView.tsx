"use client"
import { useStore } from "../../utils/store";
import Image from "next/image";
import { followingAnime } from "@/actions/anime-actions";
import { toast } from "react-toastify";
import { useState } from "react";
import LoaderButton from "./LoaderButton";
import {AnimeRespType, AnimeTypes, RankingTypes, UserTypes } from "@/src/types";
  

export default function AnimeView({ anime }: AnimeRespType ) {

    const [ loading , setLoading ] = useState(false)
    const { userLogin } = useStore()

    const user = { id : 2}

    const followAnime = async ( animeId : number , userId : number ) => {
        setLoading(true)
        const result = await followingAnime(animeId , userId)
        console.log(result);
        if(result?.error){
            toast.error(result.error)   
        }else{
            toast.success(result.succes)
        }
        setLoading(false)
    }

    return (
        <div className="bg-[#141414] min-h-screen text-white flex flex-col items-center py-10">
            <div className="bg-[#222] rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
                <Image
                    width={224}
                    height={320}
                    className="w-[224px] h-[320px] object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
                    alt={`portada anime ${anime.name}`}
                    src={anime.img}
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
                        <>
                            {loading ? (
                                <LoaderButton />
                            ) : (
                            <button
                                onClick={() => followAnime(anime.id, user.id)}
                                className="bg-orange-800 hover:bg-orange-900 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
                            >
                                Seguir este anime / ya sigues a este anime
                            </button>
                            )}
                        </>
                ) : ( 
                        <button>REGISTRATE PARA VER NOTICIAS DE ESTE ANINE</button>
                    )}

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
