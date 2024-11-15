"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import Arrowdown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";


export const HeroSection = ({data}:{data:any}) => {
  return (
    <div
      id="hero"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        >
          {" "}
        </div>

        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>

        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
         <div className="border border-red-400 size-[800px] ">
         <div className="border border-red-500 inline-flex ">
         <StarIcon className="size-28 text-emerald-300"/>
         </div>
         </div>
        </div> */}

        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        {/* <HeroOrbit size={720} rotation={0}>
        <div className="h-[12px] w-[12px] rounded-full text-emerald-100"></div>
        </HeroOrbit> */}
      </div>

      <div className="container ">
        <div className="flex items-center flex-col">
          <Image src={memojiImage} alt="pc" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg gap-4">
            <div className="size-2.5 bg-green-500 rounded-full relative">
              <div className="absolute bg-green-500 rounded-full animate-ping inset-0"></div>
            </div>
            <div className="text-sm font-medium uppercase">
              lets build something together
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            {data.heading}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {data.summary}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl relative z-10"
          >
            <span className="font-semibold">Explore my work</span>
            <Arrowdown className="size-4" />
          </a>

          {/* <a
            href="https://drive.google.com/uc?export=download&id=1gy8obe6nFzA6OMF2-fWyJrmg-NSj_5fF"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a> */}
          <a
  href={data.resumelink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl relative z-10"
>
  Download Resume
</a>


        </div>
      </div>
    </div>
  );
};
