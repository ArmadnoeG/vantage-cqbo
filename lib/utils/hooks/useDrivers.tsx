import { useEffect, useState } from 'react'
import { getDriversForUnit } from '@/lib/db/actions'
import { Drivers } from '@/lib/types'

export function useDrivers(unit: string) {
	const [drivers, setDrivers] = useState<Drivers[]>([])

	useEffect(() => {
		const loadDrivers = async () => {
			const drivers = await getDriversForUnit(unit)
			setDrivers(drivers)
		}
		loadDrivers()
	}, [unit])

	const driversWrapped =
		drivers &&
		drivers.map(driver => ({
			label: `${driver.company_name} - ${driver.driver_name}` || '',
			value: `${driver.company_name} - ${driver.driver_name}` || ''
		}))

	return driversWrapped
}
