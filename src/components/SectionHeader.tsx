export const SectionHeader = ({title,eyebrow,description}:{title:string,eyebrow:string,description:string}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif mt-6 text-3xl md:text-5xl text-center">
        {title}
      </h2>
      <p className="mt-4 text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60">
        {description}
      </p>
    </>
  );
};
