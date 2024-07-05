export default function AdsCard() {
  return (
    <figure class="overflow-hidden rounded-md border-2 shadow-md my-4 mt-16 flex flex-col items-center p-4 gap-7 bg-gradient-to-t from-[#ef50f5] via-light-100 to-white">
      <h3 class="font-semibold text-center text-dark-100">
        Upgrade to Pro Unlock the full power of AI!
      </h3>
      <p class="text-white text-sm bg-base-100 w-[150%] my-4 flex py-1 -rotate-6 items-center justify-between">
        * Get Full Access * Get Full Access * Get Full Access *
      </p>
      <button class="text-dark-100 bg-white border-2 shadow-md rounded-md w-full font-semibold text-sm py-1">
        Upgrade Now
      </button>
    </figure>
  );
}
