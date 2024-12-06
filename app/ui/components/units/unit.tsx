import type { Vehicle } from '@/lib/types'
import { Cog } from 'lucide-react'
import { availability } from '@/lib/conditionants'

export default function Unit({ unit }: { unit: Vehicle }) {
	return (
		<div
			className={`${availability(unit.estado)} flex flex-col items-center justify-center  w-20 h-20 group relative cursor-pointer hover:scale-110 transition-all duration-300`}
		>
			<p className='font-bold'>{unit.nombre}</p>
			<button className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 -right-0'>
				<Cog className='size-6 animate-rotate-360 animate-iteration-count-infinite animate-linear animate-duration-1000 ' />
			</button>
		</div>
	)
}
