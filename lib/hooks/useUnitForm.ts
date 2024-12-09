import { Unit } from '@/lib/types/unit'
import { states } from '@/lib/utils/definitions'
import { useDrivers } from '@/lib/utils/hooks/useDrivers'

export function useUnitDrivers(unit: Unit) {
	const { driversWrapped, loading } = useDrivers(unit.nombre)
	const selectedDriver = driversWrapped?.find(
		driver => driver.label === unit.driver
	)
	return { driversWrapped, loading, selectedDriver }
}

export function useUnitState(unit: Unit) {
	const selectedState = states.find(state => state.value === unit.estado)
	return { selectedState }
}
