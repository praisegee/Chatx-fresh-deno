import MessageDetail from "./MessageDetail.tsx";
import Chat from "../islands/Chat.tsx";

export default function Main() {
	return (
		<div class="main-grid">
			<MessageDetail />
			<Chat />
			<MessageDetail />
		</div>
	);
}
