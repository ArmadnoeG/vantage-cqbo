import { Options } from '@/lib/types'
import { Search } from 'lucide-react'
import { useState, useRef } from 'react'

interface InputAutocompleteProps {
	placeholder: string
	options: Options[]
	onSelect?: (value: string) => void
}

export default function InputAutocomplete({
	placeholder,
	options,
	onSelect
}: InputAutocompleteProps) {
	const [open, setOpen] = useState(false)
	const [query, setQuery] = useState('')
	const [filteredOptions, setFilteredOptions] = useState<typeof options>([])
	const wrapperRef = useRef<HTMLDivElement>(null)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setQuery(value)

		if (value) {
			const filtered = options.filter(option => {
				if (options.some(opt => opt.value === value)) {
					return option.value === value
				}
				return option.value.toLowerCase().includes(value.toLowerCase())
			})
			setFilteredOptions(filtered)
			setOpen(true)
		} else {
			setFilteredOptions([])
			setOpen(false)
		}
	}

	const handleOptionSelect = (option: (typeof options)[0]) => {
		setQuery(option.value)
		setFilteredOptions([])
		setOpen(false)
		onSelect?.(option.value)
	}

	const handleBlur = (e: React.FocusEvent) => {
		if (
			wrapperRef.current &&
			!wrapperRef.current.contains(e.relatedTarget as Node)
		) {
			setOpen(false)
		}
	}

	return (
		<div className='w-full flex justify-center items-center'>
			<div
				ref={wrapperRef}
				className='relative w-[300px]'
				onBlur={handleBlur}
				tabIndex={-1}
			>
				<div className='relative'>
					<input
						type='text'
						value={query}
						placeholder={placeholder}
						className='w-full pl-10 p-2 border-[1.4px] border-gray-300 rounded-md outline-none group focus:border-blue-400 peer transition-colors duration-200 text-sm text-gray-500'
						onChange={handleChange}
					/>
					<Search className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 size-5 peer-focus:text-blue-400 transition-colors duration-200 stroke-[1.2px]' />
				</div>

				<div
					className={`absolute top-full left-0 w-full bg-white border-[1px] border-gray-300 rounded-md z-50 mt-1 
					transition-all duration-300 ease-in-out overflow-y-auto
					${
						open ?
							'opacity-100 visible max-h-[200px] translate-y-0'
						:	'opacity-0 invisible max-h-0 -translate-y-2'
					}`}
				>
					{filteredOptions.map(option => (
						<div
							key={option.id}
							onClick={() => handleOptionSelect(option)}
							className='p-2 cursor-pointer hover:bg-gray-100 text-sm text-gray-500'
						>
							{option.value}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
