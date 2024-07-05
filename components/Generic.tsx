import { ComponentChildren } from "preact";

export default function Generic({ children }: { children: ComponentChildren }) {
    return (
        <div class="shadow-sm border-2 rounded-md px-2 py-1 flex gap-1 justify-center items-center mx-1">
            {children}
        </div>
    );
}
