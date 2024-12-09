export interface Unit {
	estado: 'available' | 'not_available' | 'not_driver'
	nombre: string
	id: string
	tipo: 'pumps' | 'rescuepumps' | 'rescue' | 'hazmat' | 'tanker' | 'tank'
	modelVehicle: string
	feature: string
	traction: string
	batteryPercent: number
	gpsStatus: 'stable' | 'unstable' | 'disconnected'
	InternetStatus: 'stable' | 'unstable' | 'disconnected'
	power: boolean
	driver: string
}
