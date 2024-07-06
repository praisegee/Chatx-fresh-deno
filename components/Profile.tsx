import Generic from "./Generic.tsx";

export default function Profile() {
  return (
    <aside class="border-2 shadow-sm rounded-md bg-[#fcfcfc] p-1 px-2 min-w-[300px] hidden sm:block">
      <header class="flex justify-center items-center p-2 border-b">
        <div class="flex justify-between items-center border-2 shadow-sm rounded-md text-slate-500 gap-1 p-1 text-sm bg-slate-50">
          <div class="flex justify-center items-center gap-1 px-1 border-2 shadow-sm rounded-md bg-white cursor-pointer">
            <i class="fa-solid fa-user"></i>
            <p>Profile</p>
          </div>
          <div class="flex justify-around items-center gap-1 px-1">
            <i class="fa-solid fa-book p-1 cursor-pointer"></i>
          </div>
          <div class="flex justify-around items-center gap-1 px-1">
            <i class="fa-brands fa-rocketchat p-1 cursor-pointer"></i>
          </div>
          <div class="flex justify-around items-center gap-1 px-1">
            <i class="fa-solid fa-code-branch p-1 cursor-pointer"></i>
          </div>
        </div>
      </header>
      <div class="flex justify-center items-center flex-col gap-1 m-5">
        <img
          src="images/avater.jpg"
          class="rounded-full h-10 w-10"
          alt="Avater"
        />
        <p class="text-sm text-dark-100">Adesanmi Dayo</p>
      </div>
      <ProfileDetail />
      <InteractionHistory />
    </aside>
  );
}

function ProfileDetail() {
  return (
    <div class="p-1 text-dark-100 text-xs border-b mb-2">
      <div class="flex justify-between items-center mb-2">
        <p>Email</p>
        <p class="text-blue-600">dayopraisegod@outlook.com</p>
      </div>
      <div class="flex justify-between items-center my-2">
        <p>Local Time</p>
        <p>Mon, 15:20 GMT+7</p>
      </div>
      <div class="flex justify-between items-center my-2">
        <p>Language</p>
        <p>English (US)</p>
      </div>
      <div class="mt-1">
        <p class="text-sm mb-1">Notes</p>
        <textarea
          name="note"
          class="resize-none border-2 rounded-md w-full outline-none min-h-20 p-1"
          id=""
        >
        </textarea>
      </div>
    </div>
  );
}

function InteractionHistory() {
  return (
    <div class="p-2 ">
      <div class="flex justify-between items-center text-sm">
        <p>Interaction History</p>
        <div class="flex justify-center items-center">
          <Generic>
            <i class="fa-solid fa-rotate-right cursor-pointer"></i>
          </Generic>
          <Generic>
            <i class="fa-solid fa-angle-up cursor-pointer"></i>
          </Generic>
        </div>
      </div>
    </div>
  );
}
