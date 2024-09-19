const words = [
  "Innovate",
  "Interactive",
  "Responsive",
  "Maintainable",
  
  "Create",
  "Inspire",
  "Design",
  "Imagine",
  "Explore",
  "Connect",
  "Craft",
  "Transform",
  "Engage"
];

import StarIcon from "@/assets/icons/star.svg"


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none gap-4 py-3">
      {
        words.map((word)=>(
          <div key={word} className="inline-flex gap-8 items-center">
            <span className="text-sm text-gray-900 uppercase font-extrabold">{word}</span>
            <StarIcon className="size-6 text-gray-900 -rotate-12"/>
             
          </div>
        ))
      }
      </div>
      </div>
      </div>
    </div>
  );
};
