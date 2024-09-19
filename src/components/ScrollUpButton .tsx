"use client"
import ScrollToTop from "react-scroll-up"
import { BsFillRocketFill } from "react-icons/bs";

const ScrollUpButton = () => {
  return (
    <div className="relative z-[200]">
        <ScrollToTop showUnder={160}>
        <p className="font-bold text-black border border-emerald-500 rounded-full p-3 text-3xl bg-emerald-300
         hover:bg-emerald-400 transition-colors duration-300 animate-bounce cursor-pointer">
    <BsFillRocketFill />
</p>


        </ScrollToTop>

    </div>
  )
}

export default ScrollUpButton