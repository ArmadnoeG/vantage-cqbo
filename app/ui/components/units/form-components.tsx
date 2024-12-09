import React from 'react'

export const FormDecorators = () => (
	<div className='absolute top-0 left-0 h-full w-[5px] bg-sky-600 rounded-l-lg' />
)

export const FormActions = () => (
	<div className='flex justify-between my-3'>
		<button
			className='py-2 px-4 bg-blue-400 text-white rounded-lg my-2'
			type='submit'
		>
			Actualizar
		</button>
	</div>
)
