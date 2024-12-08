import { Unit } from './unit'
import { FeaturesUnit } from './features'
import { DeviceStatus } from './device'

export interface UnitDetailsProps {
	features: FeaturesUnit
	deviceStatus: DeviceStatus
}
export interface ModalProps {
	isOpen: boolean
	onClose: () => void
	data: Unit
}
export interface FormModalProps<T> {
	state: T
	unit: string
}
