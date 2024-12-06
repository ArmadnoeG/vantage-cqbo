export interface Unit {
	estado: 'available' | 'not_available' | 'not_driver'
	nombre: string
	id: string
	tipo: 'pumps' | 'rescuepumps' | 'rescue' | 'hazmat' | 'tanker' | 'tank'
}
