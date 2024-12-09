import { UnitDetailsProps } from '@/lib/types'

import FeatureItem from './feature-item'
import DeviceStatus from './device-status'

export function UnitDetails({ features, deviceStatus }: UnitDetailsProps) {
	return (
		<div className='w-2/4 h-[60%] rounded-lg relative border-[1px] border-gray-300 flex flex-col p-2 mb-2 text-sm'>
			<h3 className='mx-auto text-gray-500 text-sm my-2'>
				Caracteristicas de la unidad
			</h3>

			<FeatureItem features={features} />

			<DeviceStatus deviceStatus={deviceStatus} />

			<div className='absolute top-0 right-0 h-full w-[5px] bg-sky-600 rounded-r-lg' />
		</div>
	)
}
