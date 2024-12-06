'use server'

import { db } from './supabase'

export async function getUnidades() {
	const { data, error } = await db.from('units').select('*')
	if (error) {
		console.error('Error al consultar unidades:', error)
		throw error
	}
	return data
}
