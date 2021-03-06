import type { NextPage } from 'next'
import Head from 'next/head'

const Home: React.FC<NextPage> = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-2xl">Hello Thømes</h1>
		</div>
	)
}

export default Home
