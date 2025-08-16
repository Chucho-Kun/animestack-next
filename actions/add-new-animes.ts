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