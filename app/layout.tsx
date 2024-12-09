import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '@/app/globals.css'

const inter = Inter({
	subsets: ['latin']
})
export const metadata: Metadata = {
	title: 'Vantage - basic',
	description: 'Dispatch system'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} antialiased min-h-screen bg-slate-200`}
			>
				{children}
			</body>
		</html>
	)
}
