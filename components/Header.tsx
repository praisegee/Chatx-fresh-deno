import { ComponentChildren } from "preact";
import Generic from "./Generic.tsx";

export default function Header({ children }: { children: ComponentChildren }) {
	return (
		<header class="border-2 flex items-center justify-between shadow-sm rounded-md bg-[#fcfcfc] p-1 px-1">
			<div class="flex justify-start gap-2 overflow-hidden">
				{children}
			</div>
			<div class="flex justify-center items-center m-2">
				<Generic>
					<i class="fa-solid fa-magnifying-glass p-1 text-base-200 cursor-pointer">
					</i>
				</Generic>
				<Generic>
					<span class="text-dark-100">
						Conversation
					</span>
					<span class="text-base-200 bg-light-100 px-1 rounded-md text-sm cursor-pointer">
						0
					</span>
				</Generic>
				<Generic>
					<i class="fa-solid fa-message p-1 text-base-200 cursor-pointer"></i>
				</Generic>
				<Generic>
					<i class="fa-solid fa-phone p-1 text-base-200 cursor-pointer"></i>
				</Generic>
				<Generic>
					<i class="fa-solid fa-bell p-1 text-base-200 cursor-pointer"></i>
				</Generic>
				<div class="ml-2 shadow-outline rounded-full h-8 w-8 overflow-hidden cursor-pointer">
					<img
						src="images/avater.jpg"
						class="object-cover h-10 w-10"
						alt="Avater"
					/>
				</div>
			</div>
		</header>
	);
}
