export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[83vh] text-center px-4 gap-10">
      <h1 className="text-3xl md:text-5xl">Open Science AI Research Lab</h1>
      <p className="text-[19px] leading-7 max-w-sm font-[family-name:var(--font-geist-mono)]">
        Understanding the universe
      </p>
      <div className="flex gap-4 items-center font-[family-name:var(--font-geist-mono)] tracking-[1.5px] text-[14px] font-normal">
        <a href="https://github.com/mithrilai">
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            GITHUB
          </button>
        </a>
        <a href="https://discord.gg/jgy376Jyka">
          <button className="bg-black text-[#EDEDED] border border-solid border-[#2B2B2B] px-6 py-2 rounded-full hover:bg-[#111111] transition-colors">
            JOIN US
          </button>
        </a>
      </div>
    </div>
  );
}
