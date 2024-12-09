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
		console.error('Error al obtener los conductores de la unidad', error)
		return {
			success: false,
			message:
				'Hubo un problema con la base de datos en la obtencion de datos (conductores)'
		}
	}
	return data
}
export async function updateDriversAndState(
	unit: string,
	driverSelected: string
) {
	const { error } = await db
		.from('units-cqbo')
		.update({ driver: driverSelected, estado: 'available' })
		.eq('nombre', unit)

	if (error) {
		return {
			success: false,
			message: 'No fue posible actualizar el conductor'
		}
	}
	return {
		success: true,
		message: 'Conductor actualizado correctamente'
	}
}
