import z from "zod";
import { Users } from "../generated/prisma";

export type AnimeTypes = {
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
}

export const AnimeSchema = z.object({
    name: z.string()
        .min(1 ,'Falta el título del Anime'),
        nameUrl: z.string()
        .min(1,'Falta la url del Anime'),
        review: z.string()
        .min(1,'Falta la descripción del Anime'),
        gender: z.string()
        .min(1,'Falta el género'),
        studio: z.string()
        .min(1,'Falta el nombre del estudio'),
        date: z.string()
        .min(1,'Falta la fecha de lanzamiento del Anime'),
        img: z.string()
        .min(1,'Falta la url de la portada del Anime')
    })
    
export type LoginTypes = Pick<Users, 'id' | 'name' | 'avatar' | 'email' | 'enable'> & {
        auth: boolean
    }