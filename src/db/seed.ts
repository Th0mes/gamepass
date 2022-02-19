import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const seed = async () => {
	await prisma.users.upsert({
		where: { email: 'a@a.com' },
		update: {},
		create: {
			email: 'a@a.com',
			name: 'Alice'
		}
	})

	await prisma.user.upsert({
		where: { email: 'b@b.com' },
		update: {},
		create: {
			email: 'b@b.com',
			name: 'Bob'
		}
	})

	await prisma.user.upsert({
		where: { email: 'c@c.com' },
		update: {},
		create: {
			email: 'c@c.com',
			name: 'Carla'
		}
	})
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
