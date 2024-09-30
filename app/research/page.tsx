import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Mithril AI Research",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[83vh] text-center px-4 gap-8">
      <h1 className="text-4xl md:text-5xl">Research</h1>
      <p className="text-lg w-full max-w-2xl">
        We believe that open scientific research is essential for enhancing
        transparency and minimizing the risks associated with emerging AI
        technologies.
      </p>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/mithrilai">
          <button className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
            GitHub
          </button>
        </a>
        <a href="https://discord.gg/jgy376Jyka">
          <button className="bg-black text-[#EDEDED] border border-solid border-[#2B2B2B] px-6 py-2 rounded-full text-base font-medium hover:bg-[#111111] transition-colors">
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
}
