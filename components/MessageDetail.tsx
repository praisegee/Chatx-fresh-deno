import Tag from "../islands/Tag.tsx";
import AdsCard from "../islands/AdsCard.tsx";

export default function MessageDetail() {
  return (
    <aside class="border-2 shadow-sm rounded-md bg-[#fcfcfc] p-1 px-3 min-w-[300px]">
      <h2 class="border-b py-2 block">Message Details</h2>
      <div class="border-b py-2 mb-2">
        <MessageForm
          label={"Requester"}
          users={[
            { avater: "images/avater.jpg", name: "Adesanmi Dayo" },
          ]}
          required={false}
        />
        <MessageForm
          label={"Assignee"}
          users={[{ avater: "images/avater.jpg", name: "Adesanmi Dayo" }]}
          required={true}
        />
        <MessageForm
          label={"Followers"}
          required={false}
        />
      </div>
      <Tag />
      <div class="flex justify-start gap-2 items-center w-full mb-4">
        <div class="w-1/2">
          <p class="mb-1">Type</p>
          <select name="type" class="w-full input">
            <option value="-">-</option>
          </select>
        </div>
        <div class="w-1/2">
          <p class="mb-1">Priority</p>
          <select name="type" class="w-full input">
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>
      <AdsCard />
    </aside>
  );
}

interface MessageFormProps {
  label: string;
  users?: { avater: string; name: string }[];
  required: boolean;
}

function MessageForm({ label, users, required }: MessageFormProps) {
  return (
    <div class="border-slate-800 py-2">
      <p class="my-1 text-sm text-dark-100">
        {label}
        {required && <span>*</span>}
      </p>
      <div class="py-1 flex flex-wrap justify-start gap-1 items-center border-2 p-1 rounded-md shadow-sm min-h-10">
        {users &&
          users.map((user) => (
            <div class="flex justify-start gap-1 items-center border-2 rounded-full p-1 shadow-sm">
              <img
                src={user.avater}
                class="h-4 w-4 rounded-full"
                alt="Adesanmi Dayo"
              />
              <p class="text-xs text-slate-600">{user.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
