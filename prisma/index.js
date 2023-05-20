const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(userId, recipeId) {
  try {
    // Find the post with the specified recipe ID
    const post = await prisma.post.findFirst({
      where: {
        recipes: {
          some: {
            id: recipeId,
          },
        },
      },
    })

    console.log('Post:', post)
  } catch (error) {
    console.error('Error:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

const userId = "2edcccf7-4aa2-48c4-8077-e300afd02d54" // Replace with the actual user ID
const recipeId = 3 // Replace with the ID of the recipe you want to find the associated post for

main(userId, recipeId)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
