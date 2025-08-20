import { PrismaClient } from "../generated/prisma" 
import { animes } from './data/animes';
import { users } from "./data/users";

const prisma = new PrismaClient()
async function main(){
    try {
        await prisma.users.createMany({
            data: users
        })

        await prisma.animes.createMany({
            data:animes.flat()
        })

    } catch (error) {
        console.log(error);
    }
}

main()
    .then( async() => {
        await prisma.$disconnect()
    } )
    .catch( async(e) => {
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })