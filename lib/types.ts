export interface Unit {
	estado: 'available' | 'not_available' | 'not_driver'
	nombre: string
	id: string
	tipo: 'pumps' | 'rescuepumps' | 'rescue' | 'hazmat' | 'tanker' | 'tank'
}

export interface Vehicle {
	id: string
	tipo: string
	nombre: string
	numero: string
	estado: 'available' | 'not_available' | 'not_driver'
	ubicacion: string
}

export interface Units {
	pumps: Vehicle[]
	rescuepumps: Vehicle[]
	rescue: Vehicle[]
	hazmat: Vehicle[]
	tanker: Vehicle[]
	tank: Vehicle[]
	command: Vehicle[]
}
