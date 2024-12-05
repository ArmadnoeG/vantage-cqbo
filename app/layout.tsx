import './globals.css'
import GlobeAlt from './ui/assets/globe-alt'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='flex justify-center items-center bg-slate-200 h-screen relative overflow-hidden flex-col'>
				<main className=''>{children}</main>
				<GlobeAlt className='absolute -bottom-[30%] -right-[25%] rotate-45  size-[800px] stroke-[.2px] text-gray-400' />
				<footer className='text-center text-gray-400 mt-10'>
					<p>
						desarrollado por{' '}
						<span className='font-bold text-grey-500'>
							Vantage Technologyes
						</span>
						<br />
						Todos los derechos reservados &copy; {new Date().getFullYear()}
					</p>
				</footer>
			</body>
		</html>
	)
}
