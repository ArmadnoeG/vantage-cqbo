import { availability } from '@/lib/conditionants'
import FormModal from './form-modal'
import { ModalProps } from '@/lib/types/index'

const ModalUnits = ({ isOpen, onClose, data }: ModalProps) => {
	const unit = data.nombre.trim()
	if (!isOpen) return null

	addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			onClose()
		}
	})

	return (
		<article
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 flex-col gap-2'
			onClick={onClose}
		>
			<div
				className={`flex flex-col w-[880px] h-[500px] bg-white rounded-lg shadow-lg p-6 relative animate-duration-200 animate-fade-in`}
				onClick={e => e.stopPropagation()}
			>
				<div
					className={`w-24 h-16 ${availability(data.estado)} mx-auto flex items-center justify-center`}
				>
					<h2 className='text-white text-2xl font-bold'>{data.nombre}</h2>
				</div>

				{'modelVehicle' in data && (
					<FormModal
						state={data}
						unit={unit}
					/>
				)}
			</div>
		</article>
	)
}

export default ModalUnits
