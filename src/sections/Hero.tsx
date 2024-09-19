import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import Arrowdown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 -z-30 opacity-5 " style={{
        backgroundImage: `url(${grainImage.src})`
      }}>  </div>

        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">

        </div>
        <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">

        </div>
        <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">

        </div>
        <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">

        </div>

        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
         <div className="border border-red-400 size-[800px] ">
         <div className="border border-red-500 inline-flex ">
         <StarIcon className="size-28 text-emerald-300"/>
         </div>
         </div>
        </div> */}

        <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>

    
      <div className="container ">
        <div className="flex items-center flex-col">
          <Image src={memojiImage} alt="pc" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg gap-4">
            <div className="size-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-sm font-medium uppercase">
              lets build something together
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Lets discuss your next project
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <Arrowdown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900  h-12 px-6 rounded-xl">
            <span className="font-semibold">Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
