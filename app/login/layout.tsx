import GlobeAlt from '@/app/ui/assets/globe-alt'

export default function LoginLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex justify-center items-center bg-slate-200 h-screen relative overflow-hidden flex-col'>
			<section className=''>{children}</section>
			<GlobeAlt className='absolute -bottom-[30%] -right-[25%] rotate-45  size-[800px] stroke-[.2px] text-gray-400' />
			<footer className='text-center text-gray-400 mt-10'>
				<p>
					desarrollado por{' '}
					<span className='font-bold text-grey-500'>Vantage Technologyes</span>
					<br />
					Todos los derechos reservados &copy; {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	)
}
