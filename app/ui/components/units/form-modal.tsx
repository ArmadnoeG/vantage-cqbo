import { FiretruckIcon } from '@/app/ui/assets/firetruck-icon'
import TractionIcon from '@/app/ui/assets/traction-icon'
import InputSelect from '@/app/ui/components/reusable/input-select'
import { Droplet, Power, BatteryFull, LocateFixed, Wifi } from 'lucide-react'

export default function FormModal({ state }: { state: string }) {
	const states = [
		{ value: 'available', label: '0-9 Unidad disponible' },
		{ value: 'not_driver', label: 'Unidad sin conductor' },
		{ value: 'not_available', label: '0-8 Unidad no disponible' }
	]
	const filteredStates = states.find(states => states.value === state)

	return (
		<article className='flex w-full h-full mt-5 gap-2 '>
			<form className='flex flex-col gap-2 border-[1px] border-gray-300 rounded-lg w-2/4 h-[60%] relative  p-4'>
				<h3 className='text-sm text-gray-600 mb-2'>Estado de la unidad:</h3>
				<InputSelect
					value={filteredStates?.label || 'Dispone la unidad'}
					dimensions='w-[300px]'
					options={states}
				/>
				<InputSelect
					value={'¿Quien conduce?'}
					dimensions='w-[300px]'
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
			<div className='w-2/4 h-[60%] rounded-lg relative border-[1px] border-gray-300 flex flex-col p-2 mb-2 text-sm '>
				<h3 className='mx-auto text-gray-500 text-sm my-2'>
					Caracteristicas de la unidad
				</h3>
				<div className='flex justify-between p-2 border-b-[1px] border-gray-300'>
					<div className='flex items-center gap-2'>
						<FiretruckIcon className='text-gray-700' />
						<p className='text-gray-800'>Modelo de carro:</p>
					</div>
					<p className='text-gray-400'>Man Magirus TGM 19.492</p>
				</div>

				<div className='flex justify-between p-2 border-b-[1px] border-gray-300'>
					<div className='flex items-center gap-2'>
						<Droplet className='text-gray-700 size-5' />
						<p className='text-gray-800'>Estanque:</p>
					</div>
					<p className='text-gray-400'>3200 Lts</p>
				</div>

				<div className='flex justify-between p-2 border-b-[1px] border-gray-300'>
					<div className='flex items-center gap-2'>
						<TractionIcon className='text-gray-700 size-5' />
						<p className='text-gray-800'>Traccion:</p>
					</div>
					<p className='text-gray-400'>4x2</p>
				</div>

				<div className='flex p-2'>
					<div className='border-r border-gray-300 flex items-center gap-2 p-2'>
						<Power className='text-gray-700 size-5' />
						<p className='text-gray-800'>Encendido</p>
					</div>

					<div className='border-r border-gray-300 flex items-center gap-2 p-2'>
						<BatteryFull className='text-gray-700 size-5' />
						<p className='text-gray-800'>82%</p>
					</div>

					<div className='border-r border-gray-300 flex items-center gap-2 p-2'>
						<LocateFixed className='text-gray-700 size-5' />
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse animate-iteration-count-infinite animate-duration-500' />
					</div>

					<div className='border-r border-gray-300 flex items-center gap-2 p-2'>
						<Wifi className='text-gray-700 size-5' />
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse animate-iteration-count-infinite animate-duration-500' />
					</div>
				</div>

				<div className='absolute top-0 right-0 h-full w-[5px] bg-sky-600 rounded-r-lg  ' />
			</div>
		</article>
	)
}
