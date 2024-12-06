// for the color of the unit in the Unit component
export const availability = (unit: string) => {
	switch (unit) {
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
