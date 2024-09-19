import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full z-10  top-3">
      <nav className="flex gap-1 p-0.5 border border-white/5 rounded-full bg-white/5 backdrop:blur">
        <Link
          href={"/"}
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          Home
        </Link>

        <Link
          href={"/#about"}
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          About
        </Link>

        <Link
          href={"/#projects"}
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          Project
        </Link>
        <Link
          href={"/#contact"}
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold bg-white  text-black hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
