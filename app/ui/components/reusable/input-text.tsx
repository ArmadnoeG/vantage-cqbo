export default function InputText({
	icon: Icon,
	placeholder,
	props
}: {
	icon?: React.ElementType
	placeholder: string
	props?: React.InputHTMLAttributes<HTMLInputElement>
}) {
	return (
		<div className='w-full relative'>
			<input
				type='text'
				placeholder={placeholder}
				className='w-full pl-10 p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-400 peer transition-colors duration-200'
				{...props}
			/>
			{Icon && (
				<Icon className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 size-5 peer-focus:text-blue-400 transition-colors duration-200' />
			)}
		</div>
	)
}
