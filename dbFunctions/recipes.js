import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// get all recipes

export async function getAllRecipes() {
    try {
        const recipes = await prisma.recipe.findMany()
        console.log(recipes)
        return recipes;
    } catch (error) {
        return error;
    }
};

getAllRecipes();