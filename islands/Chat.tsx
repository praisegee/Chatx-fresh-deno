export default function Chat() {
  return (
    <div class="p-2 flex flex-col md:chat">
      <ChatContent
        user={{
          id: 1,
          name: "Adesanmi Dayo",
          message:
            "Hello How are you? Hello How are you? Hello How are you? Hello How are you? Hello How are you? ",
        }}
      />
      <ChatContent
        user={{ id: 2, name: "John Down", message: "I'm fine how about you?" }}
      />
      <ChatContent
        user={{ id: 1, name: "Adesanmi Dayo", message: "I'm fine also." }}
      />
    </div>
  );
}

function ChatContent({ user }: { id: number; name: string }) {
  const isMe = user.id === 1;
  return (
    <div
      class={`max-w-full py-1 px-3 flex justify-stretch items-end gap-2 ${
        isMe ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src="images/avater.jpg"
        class="rounded-full h-8 w-8 shadow-md"
        alt="Avater"
      />
      <div
        class={`px-3 pt-2 pb-1 rounded-2xl shadow-md chat-box ${
          isMe ? "rounded-br-none bg-light-100" : "rounded-bl-none"
        } border text-dark-100 text-sm`}
      >
        <p class={`font-semibold text-sm ${isMe ? "text-base-200" : ""}`}>
          {user.name} {isMe && <span>(You)</span>}
        </p>
        <p class="text-slate-600 text-sm pt-1">
          {user.message}
        </p>
        <p class={`text-right text-xs ${isMe ? "text-base-200" : ""}`}>
          Monday 10:21pm
        </p>
      </div>
    </div>
  );
}
