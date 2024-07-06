export default function SideMenu() {
	return (
		<nav class="fixed top-0 left-0 h-screen w-16 border py-6 hidden md:block">
			<ul class="flex flex-col justify-around items-center gap-10">
				<li>
					<i class="brand fa-brands fa-phoenix-squadron brand-active">
					</i>
				</li>
				<li>
					<i class="brand fa-solid fa-house-user text-2xl">
					</i>
				</li>
				<li>
					<i class="brand fa-solid fa-users-viewfinder">
					</i>
				</li>
				<li>
					<i class="brand fa-solid fa-chart-pie text-2xl">
					</i>
				</li>
				<li>
					<i class="brand fa-solid fa-users text-2xl">
					</i>
				</li>
				<li>
					<i class="brand fa-solid fa-gear text-2xl">
					</i>
				</li>
			</ul>
		</nav>
	);
}
