import { CircleUser, Settings } from 'lucide-react'

export const NAV_ITEMS = [
	{
		label: 'Unidades',
		href: '/dashboard/units'
	},
	{
		label: 'Despachos',
		href: '/dashboard/dispatch'
	},
	{
		label: 'Personal',
		href: '/dashboard/personal'
	},
	{
		label: 'Administracion',
		href: '/dashboard/administration'
	},
	{
		label: 'Estadisticas',
		href: '/dashboard/statistics'
	},
	{
		label: 'Operador',
		href: '/dashboard'
	}
]
export const PROFILE_ITEMS = [
	{
		label: 'perfil',
		href: '/dashboard/profile',
		icon: CircleUser
	},
	{
		label: 'Configuraciones',
		href: '/dashboard/settings',
		icon: Settings
	}
]
