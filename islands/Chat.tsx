export default function Chat() {
  
  return (
    <div class="p-2 flex flex-col chat">
      <ChatContent/>
      <ChatContent/>
      <ChatContent/>
    </div>
  );
}

function ChatContent(){
  const user = {
    id: "23",
    name: "Adesanmi Dayo",
  };

  return <div class="f-full py-1 px-2 flex justify-stretch items-end gap-2">
  <img
    src="images/avater.jpg"
    class="rounded-full h-10 w-10 shadow-md"
    alt="Avater"
  />
  <div class="p-3 rounded-2xl shadow-md w-full rounded-bl-none border text-dark-100 text-sm">
    <p class="font-semibold text-sm">{user.name}</p>
    <p class="text-slate-600 text-sm">
      My message goes here! Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Atque minima accusantium architecto hic, dolor
      voluptatem aliquam optio placeat itaque voluptatum voluptates amet
      soluta exercitationem aspernatur doloribus est eius. Accusantium,
      non.
    </p>
  </div>
</div>
}
