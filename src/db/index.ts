import { PrismaClient } from '@prisma/client'

export * from '@prisma/client'

let prisma: PrismaClient

if (!process.env.DATABASE_URL) {
	throw new Error('Please add your DATABASE_URL to .env.local')
}

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient({
		errorFormat: 'minimal'
	})
} else {
	globalThis['prisma'] =
		globalThis['prisma'] ||
		new PrismaClient({
			errorFormat: 'pretty'
		})
	prisma = globalThis['prisma']
}

export default prisma
