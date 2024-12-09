import ButtonButtonBox from '@/app/ui/components/buttonBox/button-action'
import { Unit } from '@/lib/types'
import { useState } from 'react'
import DriverBox from '@/app/ui/components/buttonBox/driver-box'

export default function ButtonBox({ data }: { data: Unit }) {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}

	return (
		<>
			<article className='flex flex-col gap-2 border-[1px] border-gray-300 rounded-lg w-2/4 h-[60%] relative p-4'>
				<h3 className='text-sm text-gray-500 mx-auto'>Condiciones</h3>

				<div className='flex p-2 border-b border-gray-300 justify-between items-center'>
					<p className='text-sm text-gray-500'>Estado:</p>

					<div className='flex gap-2'>
						<ButtonButtonBox
							label='0-8'
							data={data}
							run={handleOpen}
						/>
						<ButtonButtonBox
							label='0-9'
							data={data}
						/>
						<ButtonButtonBox
							label='F/S'
							data={data}
						/>
					</div>
				</div>
				<div className='flex p-2 border-b border-gray-300 justify-between items-center'>
					<p className='text-sm text-gray-500'>Salida:</p>

					<div className='flex gap-2'>
						<ButtonButtonBox
							label='6-13'
							data={data}
						/>
						<ButtonButtonBox
							label='6-14'
							data={data}
						/>
						<ButtonButtonBox
							label='6-10'
							data={data}
						/>
					</div>
				</div>

				<div className='flex p-2  justify-center items-center'>
					<p className='text-sm text-gray-500'>Proximamente</p>
				</div>

				<div
					className={`absolute  left-0 top-1/2 -translate-y-1/2 w-[5px] bg-sky-600 rounded-l-lg ${!open ? 'h-full' : 'h-0'} transition-all duration-300`}
				/>

				{open && (
					<DriverBox
						placeholder={'Busca el conductor'}
						unit={data.nombre}
						onClose={() => setOpen(!open)}
					/>
				)}
			</article>
		</>
	)
}
