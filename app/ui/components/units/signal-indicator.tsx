const getStatusColor = (
	signalStrength: 'stable' | 'unstable' | 'disconnected'
) => {
	switch (signalStrength) {
		case 'stable':
			return 'bg-green-400'
		case 'unstable':
			return 'bg-orange-400'
		case 'disconnected':
			return 'bg-red-400'
	}
}

function SignalIndicator({
	icon,
	status
}: {
	icon: React.ReactNode
	status: 'stable' | 'unstable' | 'disconnected'
}) {
	return (
		<div className='flex gap-2 items-center'>
			{icon}
			<div
				className={`w-2 h-2 ${getStatusColor(status)} animate-pulse animate-iteration-count-infinite rounded-full animate-duration-400`}
			/>
		</div>
	)
}

export default SignalIndicator
