const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(userId, recipeData) {
  try {
    const recipe = await prisma.recipe.create({
      data: {
        title: recipeData.title,
        content: recipeData.content,
        ingredients: recipeData.ingredients,
        steps: recipeData.steps,
        author: {
          connect: { id: userId },
        },
      },
    })

    // console.log('Recipe created:', recipe)

    return recipe
  } catch (error) {
    console.error('Error creating recipe:', error)
    throw error
  }
}

const userId = "2edcccf7-4aa2-48c4-8077-e300afd02d54"// Replace with the actual user ID
const recipeData = {
  title: 'Apple pie',
  content: 'Its not your typical apple pie ;)',
  ingredients: ['Apples?', 'Sugar', 'Other Pie stuff'],
  steps: ['Put the apples on the floor', 'Slap your mother with the pie crust', 'Roll up into a ball and cry'],
}

main(userId, recipeData)
  .then(async (recipe) => {
    console.log('Recipe created:', recipe)
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
