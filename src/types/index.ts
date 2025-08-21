import { Animes, Prisma } from "@/generated/prisma";
import z, { string } from "zod";

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

export const UserSchema = z.object({
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

export const RankingSchema = z.object({
    userId: z.number(),
    animeId: z.number(),
    score: z.number(),
    followedAt: z.date()
})

export const FollowersSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    avatar: z.string(),
    country: z.string(),
    id: z.number(),
    enable: z.boolean()
})

export type AnimeTypes = z.infer<typeof AnimeSchema>
export type UserTypes = z.infer<typeof UserSchema>
export type RankingTypes = z.infer<typeof RankingSchema>
export type FollowersTypes = z.infer<typeof FollowersSchema>

export type AnimeRespType = {
    anime: Animes & {
        followers: FollowersTypes[],
        ranking: RankingTypes[]
    }
}