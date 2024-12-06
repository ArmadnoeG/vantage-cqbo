import type { Unit } from '@/lib/types'
import { Cog } from 'lucide-react'

export default function Unit({ unit }: { unit: Unit }) {
	const availability = (unit: string) => {
		switch (unit) {
			case 'available':
				return 'bg-green-500 text-black'
			case 'not_available':
				return 'bg-red-500 text-white'
			case 'not_driver':
				return 'bg-yellow-500 text-black'
			default:
				return 'bg-gray-500 text-white'
		}
	}
	return (
		<div
			className={`flex flex-col items-center justify-center ${availability(unit.estado)} w-20 h-20 group relative cursor-pointer hover:scale-110 transition-all duration-300`}
		>
			<p className='font-bold'>{unit.nombre}</p>
			<button className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 -right-0'>
				<Cog className='size-6 animate-rotate-360 animate-iteration-count-infinite animate-linear animate-duration-1000 ' />
			</button>
		</div>
	)
}
