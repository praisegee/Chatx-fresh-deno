import { useState } from "preact/hooks";

const initTickets = [
  { id: 1, name: "simple ticket", active: true },
];

export default function TicketTab() {
  const [tickets, setTickets] = useState(initTickets);

  return (
    <>
      {tickets.map((ticket) => (
        <div
          class={`flex justify-center min-w-52 items-center gap-4 py-2 px-4 cursor-pointer border rounded-md ${
            ticket.active && "active"
          }`}
        >
          <i class="fa-solid fa-print text-slate-500"></i>
          <div>
            <p class="text-xs uppercase">{ticket.name}: O...</p>
            <p class="text-sm font-semibold">#{ticket.id}</p>
          </div>
          <i
            onClick={() =>
              setTickets((tiks) => tiks.filter((tik) => tik.id !== ticket.id))}
            class="fa-regular fa-circle-xmark text-[16px] drop-shadow-md  cursor-pointer"
          >
          </i>
        </div>
      ))}
    </>
  );
}
