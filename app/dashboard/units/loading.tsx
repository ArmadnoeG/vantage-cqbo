import React from 'react'
import { Loader } from 'lucide-react'

export default function Loading() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<Loader className='size-10 animate-spin animate-iteration-count-infinite animate-linear animate-duration-1000' />
		</div>
	)
}
