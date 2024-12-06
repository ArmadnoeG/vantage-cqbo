import { User, LockKeyhole } from 'lucide-react'

export default function LoginUser() {
	return (
		<div className='bg-white rounded-lg p-4 h-96 w-96 flex flex-col items-center'>
			<h1
				className={`text-2xl mt-4 border-b-2 border-blue-400 w-[80%] text-center pb-4`}
			>
				Inicia sesíon
			</h1>

			<div className='flex flex-col items-center justify-center w-full gap-6 mt-10 px-4'>
				<div className='w-full relative'>
					<input
						type='text'
						placeholder='Usuario'
						className='w-full pl-10 p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-400 peer transition-colors duration-200'
					/>
					<User className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 size-5 peer-focus:text-blue-400 transition-colors duration-200' />
				</div>
				<div className='w-full relative'>
					<input
						type='text'
						placeholder='Contraseña'
						className='w-full pl-10 p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-400 peer transition-colors duration-200'
					/>
					<LockKeyhole className='absolute left-2 top-1/2 -translate-y-1/2 size-5 text-gray-300 peer-focus:text-blue-400 transition-colors duration-200' />
				</div>
			</div>

			<button
				className={` bg-blue-400 text-white p-2 rounded-md w-[80%] mt-10 flex justify-center relative hover:bg-blue-600 transition-colors duration-200`}
			>
				Iniciar sesión
			</button>
			<p className='text-sm mt-4 text-center text-gray-500'>
				¿Olvidaste tus credenciales? <br />
				<a
					href='#'
					className='text-blue-400 font-semibold hover:text-blue-600 transition-colors duration-200'
				>
					Contactar a soporte
				</a>
			</p>
		</div>
	)
}
