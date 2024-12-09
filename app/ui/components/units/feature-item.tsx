import { UnitFeature } from '@/lib/types'
import { FiretruckIcon } from '@/app/ui/assets/firetruck-icon'
import TractionIcon from '@/app/ui/assets/traction-icon'
import { getUnitFeatureIcon } from '@/lib/conditionants'

export default function FeatureItem({ features }: UnitFeature) {
	return (
		<>
			<div className='flex justify-between p-2 border-b-[1px] border-gray-300'>
				<div className='flex items-center gap-2'>
					<FiretruckIcon />
					<p className='text-gray-800'>Modelo de carro:</p>
				</div>
				<p className='text-gray-400'>{features.model}</p>
			</div>
			<div className='flex justify-between p-2 border-b-[1px] border-gray-300'>
				<div className='flex items-center gap-2'>
					{getUnitFeatureIcon(
						features.type,
						'size-5 text-gray-700 stroke-[1px]'
					)}
					<p className='text-gray-800'>
						{features.type === 'RESCUE' ?
							'Operadores de rescate:'
						:	'Capacidad de estanque:'}
					</p>
				</div>
				<p className='text-gray-400'>{features.feature}</p>
			</div>
			<div className='flex justify-between p-2 border-b-[1px] border-gray-300'>
				<div className='flex items-center gap-2'>
					<TractionIcon />
					<p className='text-gray-800'>Traccion:</p>
				</div>
				<p className='text-gray-400'>{features.traction}</p>
			</div>
		</>
	)
}
