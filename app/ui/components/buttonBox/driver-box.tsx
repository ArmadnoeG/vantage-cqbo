import InputAutocomplete from '@/app/ui/components/reusable/input-autocomplete'
import { updateDriversAndState } from '@/lib/db/actions'
import { useDrivers } from '@/lib/hooks/useDrivers'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function DriverBox({
	unit,
	onClose
}: {
	unit: string
	onClose: () => void
}) {
	const { driversWrapped, loading } = useDrivers(unit)
	const [selectedDriver, setSelectedDriver] = useState<string>('')

	const handleClick = async () => {
		const response = await updateDriversAndState(unit, selectedDriver)
		if (response) onClose()
	}
	return (
		<>
			<div className='size-[100%] absolute border-[1px] inset-0 border-gray-300 z-50 rounded-lg backdrop-blur-sm bg-zinc-400/10 flex justify-center items-center animate-blurred-fade-in animate-duration-300'>
				{loading ?
					<div className='flex justify-center items-center'>
						<Loader2 className='size-6 animate-spin-clockwise animate-duration-1000 text-sky-600 animate-iteration-count-infinite' />
					</div>
				:	<div className='flex flex-col gap-2 items-center '>
						<InputAutocomplete
							placeholder='Busca el conductor'
							options={driversWrapped}
							onSelect={value => setSelectedDriver(value)}
						/>
						<button
							onClick={handleClick}
							className='text-sm py-2 px-4 bg-blue-400 text-white w-[70%] rounded-lg hover:bg-blue-500 transition-all duration-300'
						>
							Activar unidad
						</button>
					</div>
				}
			</div>
		</>
	)
}
