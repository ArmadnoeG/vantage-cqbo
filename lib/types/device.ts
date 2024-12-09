export interface DeviceStatus {
	power: boolean
	batteryLevel: number
	gpsSignal: 'stable' | 'unstable' | 'disconnected'
	wifiSignal: 'stable' | 'unstable' | 'disconnected'
}

export interface DeviceStatusProps {
	deviceStatus: DeviceStatus
}
