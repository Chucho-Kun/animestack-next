import { Users } from "../generated/prisma";

export type LoginTypes = Pick<Users, 'id' | 'name' | 'avatar' | 'email' | 'enable'> & {
    auth: boolean
}