import { friendlyURLs } from "@/src/utils";
import AnimeCoverUpload from "./AnimeCoverUpload";
import { addNewAnime } from "@/actions/add-new-animes";
import { AnimeSchema } from "@/src/types";
import { toast } from "react-toastify";

export default function AnimeForm() {

    const handleSubmit = async ( formData : FormData ) => {

        const name : string = formData.get('name') as string

        const data = {
            name,
            nameUrl: friendlyURLs(name) ,
            review:formData.get('review') as string,
            gender:formData.get('gender') as string,
            studio:formData.get('studio') as string,
            date:formData.get('date') as string,
            img:formData.get('img') as string
        }

        const response = AnimeSchema.safeParse(data)
        if(!response.success){
            response.error.issues.forEach( issue => {
                toast.error(issue.message)
            })
            return
        }
        
        const resp = await addNewAnime(response.data)
        if(resp?.errors){
            resp.errors.forEach( issue => {
                toast.error(issue.message)
            })
        }
        toast.success('Anime agregado correctamente')
        
    }

  return (
    <form
                className="mt-10 bg-white shadow-lg p-10 rounded-lg max-w-[600px] mx-auto"
                action={ handleSubmit }
                noValidate
            >

                <div className="mb-5 space-y-3">
                    <label htmlFor="animeName" className="text-sm uppercase font-bold">
                        Nombre del Anime
                    </label>
                    <input
                        id="animeName"
                        name="name"
                        className="w-full p-3  border border-gray-200"
                        type="text"
                        placeholder="Nombre del Anime"

                    />

                </div>

                <div className="mb-5 flex gap-4">
                    <div className="w-1/3 space-y-3">
                        <label htmlFor="animeGender" className="text-sm uppercase font-bold">
                            Género del Anime
                        </label>
                        <input
                            id="animeGender"
                            name="gender"
                            className="w-full p-3  border border-gray-200"
                            type="text"
                            placeholder="Géneros del Anime"

                        />

                    </div>

                    <div className="w-1/3 space-y-3">
                        <label htmlFor="animeStudio" className="text-sm uppercase font-bold">
                            Estudio del Anime
                        </label>
                        <input
                            id="animeStudio"
                            name="studio"
                            className="w-full p-3  border border-gray-200"
                            type="text"
                            placeholder="Estudio del Anime"
                        />

                    </div>

                    <div className="w-1/3 space-y-3">
                        <label htmlFor="animeDate" className="text-sm uppercase font-bold">
                            Fecha del Anime
                        </label>
                        <input
                            id="animeDate"
                            name="date"
                            className="w-full p-3  border border-gray-200"
                            type="text"
                            placeholder="Fecha de lanzamiento"
                        />

                    </div>
                </div>

                <div className="mb-5 space-y-3">
                    <label htmlFor="animeReview" className="text-sm uppercase font-bold">
                        Reseña
                    </label>
                    <textarea
                        id="animeReview"
                        name="review"
                        className="w-full p-3  border border-gray-200"
                        placeholder="Reseña del Anime"
                    />

                </div>

                <AnimeCoverUpload />

                <input
                    type="submit" value='Agregar Anime'
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                />
            </form>
  )
}
