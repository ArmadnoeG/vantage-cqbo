import { getUnidades } from '@/lib/db/actions'
import Unit from './unit'

export async function GridUnits() {
	const unidades = await getUnidades()
	const filterUnits = (unit: string) => {
		return unidades.filter(unidad => unidad.tipo === unit)
	}
	const units = {
		pumps: filterUnits('ENGINE'),
		rescuepumps: filterUnits('ENGINE&RESCUE'),
		rescue: filterUnits('RESCUE'),
		hazmat: filterUnits('HAZMAT'),
		tanker: filterUnits('TANKER'),
		tank: filterUnits('TANK')
	}

	return (
		<div className='grid grid-cols-6 gap-4 p-5'>
			{Object.entries(units).map(([type, vehicles]) => {
				const titles = {
					pumps: 'Bombas',
					rescuepumps: 'Bombas de rescate',
					rescue: 'Rescate',
					hazmat: 'Hazmat',
					tanker: 'Tanque',
					tank: 'Cisterna'
				}

				return (
					<div
						key={type}
						className='flex flex-col gap-2 border-x-2 border-gray-300 items-center'
					>
						<h2 className='text-lg font-bold text-gray-400 mb-5'>
							{titles[type as keyof typeof titles]}
						</h2>
						{vehicles.map(vehicle => (
							<Unit
								key={vehicle.id}
								unit={vehicle}
							/>
						))}
					</div>
				)
			})}
		</div>
	)
}
