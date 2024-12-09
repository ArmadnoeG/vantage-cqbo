import NavbarMain from '@/app/ui/components/dashboard/navbar-main'

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<NavbarMain />
			<section>{children}</section>
		</>
	)
}
