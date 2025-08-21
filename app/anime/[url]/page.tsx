import { getAnimeData } from "@/actions/anime-actions";
import AnimeView from "@/src/components/main/AnimeView"

export default async function UrlAnimePage({params}: {params: Promise< {url: string} >}) {

    const { url } = await params
    const anime = await getAnimeData(url)
    console.log('*', anime);
    
    
    return (
        <div>
            <AnimeView anime={anime} />
        </div>
    )
}
