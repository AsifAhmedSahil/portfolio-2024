export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full z-10  top-3">
      
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur">
        <a href="" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">Home</a>
        <a href="" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">About</a>
        <a href="" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">Project</a>
        <a href="" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold bg-black  text-white hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
      
    </div>
  );
};
