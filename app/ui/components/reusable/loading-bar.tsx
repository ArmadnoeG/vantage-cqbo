export default function LoadingBar() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen gap-2'>
			<span>Cargando</span>
			<div className='w-32 h-[5px] bg-gray-400 rounded-full overflow-hidden'>
				<div className='h-full w-5 bg-blue-500 rounded-full animate-loading' />
			</div>
		</div>
	)
}
