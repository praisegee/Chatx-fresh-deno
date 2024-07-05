import { useState } from "preact/hooks";

export default function Tag() {
  const [tags, setTags] = useState([
    "delivery",
    "simple_ticket",
    "order_ticket",
  ]);
  return (
    <div class="py-2 my-2">
      <h3 class="text-sm">Tags</h3>
      <div class="min-h-20 my-1 py-1 flex flex-wrap justify-start gap-1 items-start border-2 p-1 rounded-md shadow-sm">
        {tags.map((tag) => (
          <div class="text-xs shadow-md text-base-200 bg-light-100 flex gap-2 rounded-full px-2 py-1">
            <p>
              {tag}
            </p>
            <span
              onClick={() => setTags((tgs) => tgs.filter((t) => t !== tag))}
              class="text-[8px] text-red-300 cursor-pointer"
            >
              &#10060;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
