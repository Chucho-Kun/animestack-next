import z, { email, string } from "zod";
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
        .min(1, 'Falta el título del Anime'),
    nameUrl: z.string()
        .min(1, 'Falta la url del Anime'),
    review: z.string()
        .min(1, 'Falta la descripción del Anime'),
    gender: z.string()
        .min(1, 'Falta el género'),
    studio: z.string()
        .min(1, 'Falta el nombre del estudio'),
    date: z.string()
        .min(1, 'Falta la fecha de lanzamiento del Anime'),
    img: z.string()
        .min(1, 'Falta la url de la portada del Anime')
})

export const  UserSchema = z.object({
    name: z.string()
        .min(3, 'Tu nick debe tener más de 3 caracteres'),
    email: z.email('El email no es válido'),
    password: z.string()
        .min(3 , 'Tu contraseña debe tener más de 3 caractéres'),
    avatar: string()
        .min(1, 'Falta elegir un avatar'),
    country: string()
        .min(1,'Favor de agregar el país en el que te registras'),
    about: string()
        .min(1,'Favor de agregar una descripción sobre tus gustos')
})



//export type UserTypes = Pick<Users, 'name' | 'avatar' | 'email' | 'country' | 'about'>
//export type UserTypes = z.infer<typeof UserSchema> 

export type LoginTypes = Pick<Users, 'id' | 'name' | 'avatar' | 'email' | 'enable'> & {
        auth: boolean
    }
