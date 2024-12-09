import { useEffect, useState } from 'react'
import { getDriversForUnit } from '@/lib/db/actions'
import { Drivers } from '@/lib/types'

export function useDrivers(unit: string) {
	const [drivers, setDrivers] = useState<Drivers[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const loadDrivers = async () => {
			setLoading(true)
			const drivers = await getDriversForUnit(unit)
			setDrivers(drivers as Drivers[])
			setLoading(false)
		}
		loadDrivers()
	}, [unit])

	const driversWrapped =
		drivers &&
		drivers.map(driver => ({
			id: driver.id,
			value: `${driver.company_name} - ${driver.driver_name}` || ''
		}))

	return { driversWrapped, loading }
}
