"use server"
import { AnimeSchema, AnimeTypes } from "@/src/types"
import { prisma } from "../src/libs/prisma"

export async function addNewAnime(data : AnimeTypes){
    
    const result = AnimeSchema.safeParse(data)
    if(!result.success){
        return{
            errors: result.error.issues
        }
    }

    const { name , nameUrl , review , gender , studio , date , img } = result.data

    try {
       const dataResult = await prisma.animes.create({
        data:{ name , nameUrl , review , gender , studio , date ,img , enable: true }
       })
       console.log(dataResult);
       
    } catch (error) {
        console.log(error);
    }
}

export async function followingAnime( animeId: number , userId : number ){
    try {
        await prisma.animes.update({
            where: { id: animeId },
            data:{
                followers: {
                    connect: { id: userId}
                }
            }
        })

        await prisma.users.update({
            where: { id: userId},
            data:{
                following: {
                    connect: { id : animeId }
                 }
            }
        })

        return{
            succes:'Ahora sigues este anime!!'
        }

    } catch (error) {
        console.log(error);
        return{
            error:'Ocurrió un error al seguir este anime'
        }
    }
}