import Link from "next/link";
const NAVIGATION = [
  { to: "Home", href: "/" },
  { to: "About", href: "/about" },
  { to: "Contact", href: "/contact" },
  { to: "Posts", href: "/posts" },
  { to: "Shop", href: "/shop" },
];
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
const Navigation = () => {
  return (
    <nav className="flex justify-between gap-3 p-4 bg-white text-black font-bold  text-xl text-bold items-center">
      <div>
        {NAVIGATION.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="p-2 hover:bg-black rounded-md hover:text-white duration-100 ease-out"
          >
            {link.to}
          </Link>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <SignedOut>
          <div className="border border-black p-2 rounded-md hover:text-white hover:bg-black duration-150">
            <SignInButton mode="modal" />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default Navigation;
