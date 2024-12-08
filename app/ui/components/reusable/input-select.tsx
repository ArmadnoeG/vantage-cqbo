import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface InputSelectProps {
	options?: { value: string; label: string }[]
	value?: string
	onChange?: (value: string) => void
	name?: string
	dimensions?: string
	id?: string
}
interface Options {
	value: string
	label: string
}

export default function InputSelect({
	value,
	dimensions,
	onChange,
	options,
	id
}: InputSelectProps) {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	const handleSelect = (option: Options) => {
		onChange?.(option.label)
		setIsOpen(false)
	}
	const filteredOptions = options?.filter(option => option.label !== value)
	return (
		<>
			<div
				ref={selectRef}
				className={`${dimensions} border-[1px] border-gray-300 rounded-lg flex text-sm text-gray-600 group hover:border-blue-400 transition-all duration-300 cursor-pointer ${isOpen ? 'border-blue-400' : ''} relative bg-white`}
			>
				<div
					className={`flex items-center justify-between p-2 w-full ${isOpen ? 'text-blue-400' : ''}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					{value || 'Selecciona una opción'}
					<ChevronDown
						className={`size-5 ${isOpen ? 'rotate-180 text-blue-400' : ''} transition-all duration-300 group-hover:text-blue-400`}
					/>
				</div>

				<div
					className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg transition-all duration-300 ease-in-out z-50 ${
						isOpen ?
							'opacity-100 translate-y-0 visible'
						:	'opacity-0 -translate-y-2 invisible'
					}`}
				>
					{filteredOptions?.map(option => (
						<div
							key={option.value}
							onClick={() => handleSelect(option)}
							className='p-2 hover:bg-gray-100'
						>
							{option.label}
						</div>
					))}
				</div>
			</div>
			<input
				type='hidden'
				name={id}
				value={options?.find(opt => opt.label === value)?.value || ''}
			/>
		</>
	)
}
