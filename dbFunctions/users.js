import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// create User

// find all Users [#]
// find User by id [#]
// find User by name []

export async function getAllUsers() {
    try {
        const users = await prisma.user.findMany();
        // console.log(users)
        return users
    } catch (error) {
        return error
    }
}

export async function getUserById(id) {

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        return user;
    } catch (error) {
        return error
    }
}

export async function getUserByName(name) {

    try {
        
        const user = await prisma.user.findFirst({
            where: {
                name: name
            }
        });
        return user;
    } catch (error) {
        return error
    }
}

// next step is to add API routes in the api page under /pages/api/users