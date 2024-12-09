import Link from 'next/link'

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center h-screen'>
			<p className='text-sm'>
				Vantage Technology, sistema de despacho integrado.{' '}
			</p>
			<div className='mt-10 bg-blue-400 rounded-lg py-2 px-4'>
				<Link
					href='/login'
					className='block'
				>
					Iniciar
				</Link>
			</div>
		</section>
	)
}
