import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex gap-3 p-4 bg-white text-black font-bold  text-xl text-bold items-center justify-center">
      <Link
        href="/"
        className="p-2 hover:bg-black rounded-md hover:text-white duration-100 ease-out"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="p-2 hover:bg-black rounded-md hover:text-white duration-100 ease-out"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="p-2 hover:bg-black rounded-md hover:text-white duration-100 ease-out"
      >
        Contact
      </Link>
      <Link
        href="/posts"
        className="p-2 hover:bg-black rounded-md hover:text-white duration-100 ease-out"
      >
        Posts
      </Link>

    </nav>
  );
};
export default Navigation;
