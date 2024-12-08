import Form from '@/app/ui/components/units/form'
import { UnitDetails } from '@/app/ui/components/units/unit-details'
import { FormModalProps, Unit } from '@/lib/types'

export default function FormModal({ state }: FormModalProps<Unit>) {
	return (
		<article className='flex w-full h-full mt-5 gap-2 '>
			<Form state={state} />
			<UnitDetails
				features={{
					type: state.tipo,
					model: state.modelVehicle,
					feature: state.feature,
					traction: state.traction
				}}
				deviceStatus={{
					power: state.power,
					batteryLevel: state.batteryPercent,
					gpsSignal: state.gpsStatus,
					wifiSignal: state.InternetStatus
				}}
			/>
		</article>
	)
}
