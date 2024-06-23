import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/smth",
    label: "smth",
  },
];

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
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-stone-400">
                <button className="w-auto h-auto  rounded-md py-[2px] px-[10px] hover:bg-zinc-800">
                  {link.label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
