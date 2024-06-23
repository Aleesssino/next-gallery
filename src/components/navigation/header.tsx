import Image from "next/image";
import Link from "next/link";
import ActionNavbar from "./actionNavbar";
import { navLinks } from "./navigationLinks";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 md:px-52 px-4 border-b border-b-stone-800 bg-opacity-55">
      <Link href="/">
        <Image
          src="/Logo.jpeg"
          alt="Logo"
          width="35"
          height="35"
          className="w-[35px] h-[35px] rounded-md"
        />
      </Link>

      <nav>
        <ul className=" gap-x-5 text-[14px] hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-stone-400">
                <Button variant="action"> {link.label}</Button>
              </Link>
            </li>
          ))}
        </ul>
        <ActionNavbar />
      </nav>
    </header>
  );
}
