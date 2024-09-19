import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge"

export const CardHeader = ({title,description,className}:{title:string,description:string,className?:string}) =>{
    return (
        <div className={twMerge("flex flex-col  md:py-2 md:px-4",className)}>
            <div className="inline-flex items-center gap-2">

            <StarIcon className="size-9 text-emerald-300 "/>
            <h3 className="text-3xl font-serif">{title}</h3>
            </div>
            <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
            </div>
    )
}