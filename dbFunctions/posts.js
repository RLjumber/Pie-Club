import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// GET all Posts
export async function getAllPosts() {

    // console.log("been hit");
    try {
        const posts = await prisma.post.findMany();
        console.log(posts);
        return posts
    } catch (error) {
        return error
    }
};

// GET all published posts
export async function getAllPublishedPosts() {

    // console.log("been hit");
    try {
        const posts = await prisma.post.findMany(
            {
                where: {
                    published: true
                }
            });
        console.log(posts);
        return posts
    } catch (error) {
        return error
    }
};

