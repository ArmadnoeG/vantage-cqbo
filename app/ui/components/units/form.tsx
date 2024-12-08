import { states } from '@/lib/utils/definitions'
import InputSelect from '@/app/ui/components/reusable/input-select'
import { Unit } from '@/lib/types'
import { useDrivers } from '@/lib/utils/hooks/useDrivers'
import { useState, useEffect } from 'react'

export default function Form({ state }: { state: Unit }) {
	const drivers = useDrivers(state.nombre)
	const filteredDrivers =
		drivers && drivers.find(driver => driver.label === state.driver)
	const filteredStates = states.find(states => states.value === state.estado)

	const labels = filteredDrivers?.label === state.driver

	console.log(labels)

	const [selectState, setSelectState] = useState<string>(
		filteredStates?.label || 'Dispone la unidad'
	)

	const [selectDriver, setSelectedDriver] = useState<string>('¿Quien conduce?')

	useEffect(() => {
		if (filteredDrivers?.label) {
			setSelectedDriver(filteredDrivers.label)
		}
	}, [filteredDrivers])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = Object.fromEntries(
			new FormData(e.target as HTMLFormElement).entries()
		)
		console.log(data)
	}
	return (
		<form
			className='flex flex-col gap-2 border-[1px] border-gray-300 rounded-lg w-2/4 h-[60%] relative  p-4'
			onSubmit={handleSubmit}
		>
			<h3 className='text-sm text-gray-600 mb-2'>Estado de la unidad:</h3>
			<InputSelect
				value={selectDriver}
				dimensions='w-[300px]'
				onChange={(label: string) => setSelectedDriver(label)}
				options={drivers}
				id='Driver'
			/>
			<InputSelect
				value={selectState}
				dimensions='w-[300px]'
				onChange={(label: string) => setSelectState(label)}
				options={states}
				id='State'
			/>
			<div className='absolute top-0 left-0 h-full w-[5px] bg-sky-600 rounded-l-lg  ' />
			<div className='flex justify-between my-3'>
				<p className='text-red-500 text-xs pl-4'>*{' Asigna al conductor'}</p>

				<button
					className='py-2 px-4 bg-blue-400 text-white rounded-lg my-2'
					type='submit'
				>
					Actualizar
				</button>
			</div>
		</form>
	)
}
