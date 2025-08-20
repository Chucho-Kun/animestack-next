"use server"
import { prisma } from "../src/libs/prisma"

import { UserTypes } from "@/src/types";
import { Prisma } from "@prisma/client/extension";

export async function addUser( data : UserTypes ){
    //const { name , email , password , avatar ,country , about } = data

    try {
       /** const userData = await prisma.users.findFirst({
            data : {
                
            }
        }) */
    } catch (error) {
        
    }
}