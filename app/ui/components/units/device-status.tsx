import { Tablet, Power, BatteryFull, LocateFixed, Wifi } from 'lucide-react'
import SignalIndicator from './signal-indicator'
import { DeviceStatusProps } from '@/lib/types'

function DeviceStatus({ deviceStatus }: DeviceStatusProps) {
	return (
		<div className='flex p-2 justify-between items-center'>
			<div className='flex gap-2 items-center'>
				<Tablet className='text-gray-700 size-4' />
				<p className='text-gray-700'>Dispositivo:</p>
			</div>

			<div className='flex gap-2 items-center'>
				<Power className='size-4 text-gray-700' />
				{deviceStatus.power ? 'Encendido' : 'Apagado'}
				<BatteryFull className='size-4 text-gray-700' />
				{deviceStatus.batteryLevel}%
				<SignalIndicator
					icon={<LocateFixed className='size-4 text-gray-700' />}
					status={deviceStatus.gpsSignal}
				/>
				<SignalIndicator
					icon={<Wifi className='size-4 text-gray-700' />}
					status={deviceStatus.wifiSignal}
				/>
			</div>
		</div>
	)
}

export default DeviceStatus
