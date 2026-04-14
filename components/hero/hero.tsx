"use client"

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import Link from "next/link";


const Hero = () => {
  return (
    <>
      <div
        className="mx-auto px-4 py-4 space-y-2 "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex  flex-col items-start mb-8 mt-10">
          <div className="flex items-center justify-center mx-auto mb-3 border-1.5 bg-black/25 backdrop-blur-xl px-5 rounded-md">
            <h1 className="text-white/50 select-none">
              Your trustable partner in AI solutions
            </h1>
          </div>
          <h2 className="text-white text-3xl lg:text-5xl font-bold tracking-tight lg:max-w-270 2xl:text-[54px] leading-tight text-center text-shadow-2xs select-none max-w-5xl mx-auto">
            Developing innovative AI solutions that will transform your business
          </h2>
        </div>
        <div className="flex items-center justify-center mt-4 mb-4 gap-7">
          <Button
            variant="outline"
            className="rounded-md px-4 h-10 text-[14px] cursor-pointer"
          >
            Our services
          </Button>
          <Link href="/pricing" className="bg-purple-800 rounded-md px-4  h-10 text-[14px] text-center cursor-pointer text-white hover:bg-black/40 flex items-center justify-center gap-2">
            Choose Plan <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
      {/* about fahhh */}
      <div className="relative w-full h-px my-8 mt-7">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

    
    </>
  );
};

export default Hero;
