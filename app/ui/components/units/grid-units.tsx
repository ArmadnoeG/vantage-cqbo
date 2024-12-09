'use client'

import UnitCard from './unit'
import { useUnits } from '@/lib/hooks/useUnits'
import type { Unit } from '@/lib/types'
import LoadingBar from '@/app/ui/components/reusable/loading-bar'

export function GridUnits() {
	const { units, loading } = useUnits() as { units: Unit; loading: boolean }

	if (loading) {
		return <LoadingBar />
	}

	return (
		<>
			<div
				className={`grid grid-cols-7 gap-4 p-5 ${loading ? '' : 'animate-fade-in animate-duration-300 animate-linear '}`}
			>
				{Object.entries(units).map(([type, vehicles]) => {
					const titles = {
						pumps: 'Bombas',
						rescuepumps: 'Bombas y rescate',
						rescue: 'Rescate',
						hazmat: 'Hazmat',
						tanker: 'Tanker',
						tank: 'Cisterna',
						command: 'Comandancia'
					}

					return (
						<div
							key={type}
							className='flex flex-col gap-2 border-x-2 border-gray-300 items-center'
						>
							<h2 className='text-lg font-bold text-gray-400 mb-5'>
								{titles[type as keyof typeof titles]}
							</h2>
							{vehicles.map((vehicle: Unit) => (
								<UnitCard
									key={vehicle.id}
									unit={vehicle}
								/>
							))}
						</div>
					)
				})}
			</div>
		</>
	)
}
