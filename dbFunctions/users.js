const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// create User

// find User by id
// find User by name

async function getAllUsers() {
    try {

        const users = await prisma.user.findMany();

        console.log(users)
        return users

    } catch (error) {
        return error
    }
}

getAllUsers();

// next step is to add API routes in the api page under /pages/api/users