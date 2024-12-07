import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { PROFILE_ITEMS } from '@/lib/data/navigation'

export default function ProfileManagement() {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div
				ref={menuRef}
				className='flex items-center gap-2 group hover:bg-white/10 h-full px-2 text-sm'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='flex flex-col gap-1 items-end '>
					<h3 className='text-white '>Bomberos Coquimbo</h3>
					<span className=' text-orange-300 text-xs  py-1 px-2 border-2 border-orange-300 rounded-full w-fit'>
						Centralista
					</span>
				</div>
				<Image
					src='/profile.jpg'
					alt='logo'
					width={50}
					height={50}
					className='rounded-full'
				/>
				<ChevronDown
					className={`text-white size-7 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/10 rounded-full p-1 ${isOpen ? 'rotate-180' : ''}`}
				/>
				<div
					role='menú'
					aria-label='menú perfil'
					className={`absolute top-20 right-10 bg-white rounded-md w-[250px] overflow-hidden transition-all duration-300 ease-in-out z-50 ${
						isOpen ? 'max-h-[400px]' : 'max-h-0'
					}`}
				>
					<ul className='flex flex-col text-gray-500 py-2'>
						{PROFILE_ITEMS.map(item => {
							const Icon = item.icon
							return (
								<li
									key={item.label}
									className=' py-3 pl-4 border-b border-gray-500 w-full hover:text-blue-500 hover:bg-blue-500/10'
								>
									<Link
										href={item.href}
										className='flex items-center gap-2'
									>
										<Icon className='w-5 h-5' /> {item.label}
									</Link>
								</li>
							)
						})}
						<li className='flex justify-between items-center py-3 hover:bg-blue-500/10 '>
							<p className='pl-4 flex items-center gap-2'>
								Estado del servicio
							</p>
							<div className='flex items-center gap-2'>
								<span className='text-green-500 text-xs'>Estable</span>
								<div className='w-2 h-2 rounded-full bg-green-500 shadow-2xl shadow-green-500/50 animate-pulse animate-infinite animate-ease-in-out animate-duration-[500ms] mr-5' />
							</div>
						</li>
						<li className='flex justify-center'>
							<button className='bg-red-400 my-5 w-[70%] mx-auto py-2 px-4 rounded-lg text-white hover:bg-red-500'>
								Cerrar Sesion
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
