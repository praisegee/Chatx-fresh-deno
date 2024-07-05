import Header from "../../components/Header.tsx";
import Main from "../../components/Main.tsx";
import SideMenu from "../../components/SideMenu.tsx";
import TicketTab from "../../islands/TicketTab.tsx";

export default function Dashboard() {
	return (
		<div class="main p-2">
			<SideMenu />
			<Header>
				<TicketTab />
				<TicketTab />
			</Header>
			<Main />
		</div>
	);
}
