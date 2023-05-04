const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        name: 'Ali',
        email: 'ali@pieclub.com',
        posts: {
          create: { title: 'Let me tell you about my pies' },
        },
        profile: {
          create: { bio: 'I took a big fart in a pie once' },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })