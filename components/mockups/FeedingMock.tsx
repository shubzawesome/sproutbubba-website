import { HeartIcon } from "../icons";

export default function FeedingMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#fff7ef] text-[#4f3c34]">
      <div className="px-4 pt-12">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#9bc9d7] text-[13px] font-bold text-white">
            M
          </span>
          <span className="text-[18px] font-bold text-[#4f3c34]">Maya</span>
        </div>

        <p className="mb-2 text-[11px] font-bold text-[#9b9b9b]">Feed timer</p>

        <div className="rounded-[1.6rem] bg-[#e6f1e6] p-3.5 shadow-[0_16px_28px_-24px_rgba(79,60,52,0.28)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-bold text-[#9a9a9a]">
              Breast - left
            </span>
            <span className="rounded-full bg-white/55 px-2 py-1 text-[10px] font-bold text-[#e9835d]">
              Live
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative grid h-16 w-16 place-items-center rounded-full bg-[#f6e8dc]">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#f08a61 0deg 74deg, transparent 74deg 360deg)",
                }}
              />
              <div className="relative grid h-12 w-12 place-items-center rounded-full bg-[#e6f1e6] text-[#f08a61]">
                <HeartIcon className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-2.5 text-[38px] font-bold leading-none tracking-normal text-[#4f3c34]">
              18:52
            </div>
            <div className="mt-1 text-[12px] font-semibold text-[#9a9a9a]">
              remaining
            </div>
            <div className="mt-1 text-[10px] font-bold text-[#a5a5a5]">
              target 6:13 PM
            </div>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_0.72fr] gap-2">
            <button className="rounded-2xl bg-[#f08a61] py-2.5 text-[12px] font-bold text-white shadow-[0_10px_18px_-14px_rgba(240,138,97,0.9)]">
              Stop & log
            </button>
            <button className="rounded-2xl border border-[#f08a61] bg-[#eef6ec] py-2.5 text-[12px] font-bold text-[#d16742]">
              Pause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
