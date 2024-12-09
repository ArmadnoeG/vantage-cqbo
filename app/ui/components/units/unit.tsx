import { Cog } from 'lucide-react'
import { useState } from 'react'
import ModalUnits from './dialog'
import { Unit } from '@/lib/types'

export default function UnitCard({ unit }: { unit: Unit }) {
	const [isOpen, setIsOpen] = useState(false)

	const availability = (estado: string) => {
		switch (estado) {
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
		<>
			<div
				className={`${availability(unit.estado)} flex flex-col items-center justify-center  w-20 h-20 group relative cursor-pointer hover:scale-110 transition-[transform, colors] duration-500`}
				onClick={() => setIsOpen(true)}
			>
				<p className='font-bold'>{unit.nombre}</p>
				<button className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 -right-0'>
					<Cog className='size-6 animate-rotate-360 animate-iteration-count-infinite animate-linear animate-duration-1000 ' />
				</button>
			</div>
			{isOpen && (
				<ModalUnits
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					data={unit}
				/>
			)}
		</>
	)
}
