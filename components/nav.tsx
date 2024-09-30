"use client";

import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "@/public/logo.svg";

export function Navbar() {
  return (
    <section className="flex justify-between items-center text-white">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Mithril AI Logo"
            className="pb-[2px]"
            width={33}
            height={33}
            priority
          />
          <h1 className="text-3xl font-medium ml-2 tracking-widest">MITHRIL</h1>
        </a>
      </div>
      <div className="flex items-center space-x-4 text-xs font-normal tracking-wider">
        <div className="hidden md:flex space-x-4">
          <a href="/research" className="hover:text-gray-300">
            RESEARCH
          </a>
          <span className="text-[#505050]">/</span>
          <a href="/blog" className="hover:text-gray-300">
            BLOG
          </a>
          <span className="text-[#505050]">/</span>
          <a href="/about" className="hover:text-gray-300">
            ABOUT
          </a>
        </div>
        <span className="text-[#505050] hidden md:inline">/</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-300 h-6 w-6 sm:h-4 sm:w-4"
            >
              <Menu className="mb-[1px]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="border-l border-[#222222] bg-black w-[250px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle className="pl-1 pt-2">
                <Image
                  src={Logo}
                  alt="Mithril AI Logo"
                  width={28}
                  height={28}
                  priority
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-10 flex flex-col gap-10 jet-brains">
              <div className="space-y-4">
                <a
                  href="/research"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">/</span>
                  <h2>RESEARCH</h2>
                </a>
                <a
                  href="/blog"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">/</span>
                  <h2>BLOG</h2>
                </a>
                <a
                  href="/about"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">/</span>
                  <h2>ABOUT</h2>
                </a>
              </div>
              <div className="space-y-4">
                <a
                  href="https://huggingface.co/mithrilai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">\</span>
                  <h2>HUGGING FACE</h2>
                </a>
                <a
                  href="https://x.com/MithrilAI_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">\</span>
                  <h2>TWITTER</h2>
                </a>
                <a
                  href="https://github.com/mithrilai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">\</span>
                  <h2>GITHUB</h2>
                </a>
                <a
                  href="https://discord.gg/jgy376Jyka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">\</span>
                  <h2>DISCORD</h2>
                </a>
                <a
                  href="https://www.linkedin.com/company/mithril-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">\</span>
                  <h2>LINKEDIN</h2>
                </a>
                <a
                  href="https://www.instagram.com/mithrilai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#505050]">\</span>
                  <h2>INSTAGRAM</h2>
                </a>
              </div>
              <div className="text-sm flex flex-col space-y-4">
                <a
                  href="https://discord.gg/jgy376Jyka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black px-6 py-2 text-sm rounded-full hover:bg-gray-200 transition-colors">
                    JOIN US
                  </button>
                </a>
                <a
                  href="mailto:info.mithrilai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black text-[#EDEDED] text-sm border border-solid border-[#2B2B2B] px-6 py-2 rounded-full hover:bg-[#111111] transition-colors">
                    CONTACT
                  </button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
