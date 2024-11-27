import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex gap-3 p-4 bg-white text-black font-bold  text-xl text-bold items-center justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};
export default Navigation;
