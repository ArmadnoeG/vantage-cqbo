import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html lang='en'>
				<body
					className={`${inter.className} antialiased bg-slate-200 min-h-screen `}
				>
					<main>{children}</main>
				</body>
			</html>
		</>
	)
}
