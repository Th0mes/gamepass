namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		DATABASE_URL: string

		NEXTAUTH_URL: string
		NEXTAUTH_SECRET: string

		GITHUB_CLIENT_ID: string
		GITHUB_CLIENT_SECRET: string
	}
}
