'use server'

import { db } from './supabase'

export async function getDriversForUnit(unit: string) {
	const unitTrim = unit.trim()
	console.log('buscando conductor para' + unit)
	if (!unit) {
		throw new Error('El nombre de la unidad es obligatorio')
	}
	const { data, error } = await db
		.from('drivers_units')
		.select('*')
		.eq('unit', unitTrim)

	if (error) {
		throw new Error(error.message)
	}
	return data
}
