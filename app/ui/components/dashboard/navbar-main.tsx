'use client'

import { NAV_ITEMS } from '@/lib/data/navigation'
import Link from 'next/link'
import ProfileManagment from './profile-managment'
import { usePathname } from 'next/navigation'

export default function NavbarMain() {
	const pathname = usePathname()

	return (
		<nav className=' flex items-center w-full h-[80px] bg-sky-600 px-10 justify-between'>
			<ul className='flex items-center gap-10 text-white '>
				{NAV_ITEMS.map(item => (
					<li
						key={item.href}
						className={`text-white px-6 py-2 hover:bg-white/10 rounded-3xl transition-all duration-200 ${
							pathname === item.href ? 'bg-white/20 ' : ''
						}`}
					>
						<Link href={item.href}>{item.label}</Link>
					</li>
				))}
			</ul>

			<ProfileManagment />
		</nav>
	)
}
