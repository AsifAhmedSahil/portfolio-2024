import memojiImage from "@/assets/images/memoji-computer.png"
import Arrowdown from "@/assets/icons/arrow-down.svg"
import Image from "next/image";


export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container ">
        <div className="flex items-center flex-col">
        <Image src={memojiImage} alt="pc" className="size-[100px]"/>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg gap-4">
          <div className="size-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-sm font-medium uppercase">
          lets build something together
          </div>
        </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="mt-4 text-center text-white/60">I specialize in transforming designs into functional, high-performing web applications. Lets discuss your next project</p>
        <div className="flex flex-col items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <Arrowdown className="size-4"/>
          </button>
        
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 mt-4 h-12 px-6 rounded-xl">
            <span className="font-semibold">Download Resume</span>
            
          </button>
          
        </div>
      </div>
    </div>
  );
};
