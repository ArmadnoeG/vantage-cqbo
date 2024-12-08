import { Droplet, Users } from 'lucide-react'

// for the color of the unit in the Unit component
export const availability = (estado: string) => {
	switch (estado) {
		case 'available':
			return 'bg-green-500 text-black'
		case 'not_available':
			return 'bg-red-500 text-white'
		case 'not_driver':
			return 'bg-yellow-500 text-black'
		default:
			return 'bg-gray-500 text-white'
	}
}

// for status of the device
export const getStatusColor = (
	signalStrength: 'stable' | 'unstable' | 'disconnected'
) => {
	switch (signalStrength) {
		case 'stable':
			return 'bg-green-400'
		case 'unstable':
			return 'bg-orange-400'
		case 'disconnected':
			return 'bg-red-400'
	}
}

// for the icon of the feature
export function getUnitFeatureIcon(feature: string, styles: string) {
	switch (feature) {
		case 'RESCUE':
			return <Users className={styles} />
		default:
			return <Droplet className={styles} />
	}
}
