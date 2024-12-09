import { Unit } from '@/lib/types'
import { checkStatus } from '@/lib/conditionants'

interface ButtonBoxProps {
	label: string
	data: Unit
	run?: () => void
}

export default function ButtonButtonBox({ label, data, run }: ButtonBoxProps) {
	return (
		<button
			onClick={run}
			className={`border-[1px] border-gray-300 py-1 px-6 text-sm hover:bg-sky-200 transition-all duration-300
				${checkStatus(label, data) ? 'bg-sky-200 pointer-events-none' : ''}`}
		>
			{label}
		</button>
	)
}
