"use client";

import Image from "next/image";
import Link from "next/link";
import ActionNavbar from "./actionNavbar";
import { navLinks } from "./navLinks";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Logo from "../../../public/Logo.jpeg";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-2 md:px-52 px-4 border-b border-b-stone-800  sticky top-0 bg-opacity-55 backdrop-blur-lg">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width="35"
          height="35"
          className="w-[35px] h-[35px] rounded-md"
          priority={true}
        />
      </Link>

      <nav>
        <ul className=" gap-x-5 text-[14px] hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <Button variant={pathname === link.href ? "active" : "link"}>
                  {link.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <ActionNavbar />
      </nav>
    </header>
  );
}
