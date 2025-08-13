import { notFound } from "next/navigation"
import AnimeView from "@/src/components/main/AnimeView"
import { prisma } from "../../../src/libs/prisma"

async function getAnimeData(url: string) {

    const data = await prisma.animes.findFirst({
        where:{
            nameUrl: url
        }
    })
    if(!data) notFound()
    return data
}

export default async function UrlAnimePage({params}: {params: Promise< {url: string} >}) {

    const { url } = await params
    const anime = await getAnimeData(url)
    
    return (
        <div>
            <AnimeView anime={anime} />
        </div>
    )
}
