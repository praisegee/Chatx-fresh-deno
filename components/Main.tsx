import MessageDetail from "./MessageDetail.tsx";
import Chat from "../islands/Chat.tsx";
import Profile from "./Profile.tsx";

export default function Main() {
	return (
		<div class="flex flex-start w-full mt-2 items-start">
			<MessageDetail />
			<Chat />
			<Profile />
		</div>
	);
}
