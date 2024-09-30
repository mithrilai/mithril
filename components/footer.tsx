import React from "react";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <section className="flex flex-col justify-center items-center md:flex-row md:justify-between">
      <div className="text-sm font-normal text-[#999999] mb-6 md:mb-0">
        <p>© {YEAR} Mithril AI, Inc.</p>
      </div>
      <div className="flex flex-wrap space-x-4 text-[10px] md:text-xs font-normal tracking-wider">
        <a
          href="https://x.com/MithrilAI_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          X
        </a>
        <span className="text-[#505050]">/</span>
        <a
          href="https://github.com/mithrilai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          GITHUB
        </a>
        <span className="text-[#505050]">/</span>
        <a
          href="https://huggingface.co/mithrilai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          HF
        </a>
        <span className="text-[#505050]">/</span>
        <a
          href="https://discord.gg/jgy376Jyka"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          DISCORD
        </a>
        <span className="text-[#505050]">/</span>
        <a
          href="mailto:info.mithrilai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
}
