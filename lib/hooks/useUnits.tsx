import { useEffect, useState } from 'react'
import { db } from '@/lib/db/supabase'

export function useUnits() {
	const [units, setUnits] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchUnits = async () => {
			const { data } = await db.from('units-cqbo').select('*')
			if (data) {
				const filterUnits = (unitType: string) =>
					data.filter(unit => unit.tipo === unitType)

				setUnits({
					pumps: filterUnits('ENGINE'),
					rescuepumps: filterUnits('ENGINE&RESCUE'),
					rescue: filterUnits('RESCUE'),
					hazmat: filterUnits('HAZMAT'),
					tanker: filterUnits('TANKER'),
					tank: filterUnits('TANK'),
					command: filterUnits('COMMAND')
				})
				setLoading(false)
			}
		}

		fetchUnits()

		const subscription = db
			.channel('units-channel')
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',

					table: 'units-cqbo'
				},
				async () => {
					await fetchUnits()
				}
			)
			.subscribe()

		return () => {
			subscription.unsubscribe()
		}
	}, [])

	return { units, loading }
}
