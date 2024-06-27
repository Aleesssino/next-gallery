"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignRight } from "lucide-react";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActionNavbar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex text-lg flex-col items-start space-y-5 mt-10">
                  <nav>
                    <ul>
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>
                            <Button
                              variant={
                                pathname === link.href ? "active" : "link"
                              }
                              size="lg"
                            >
                              {link.label}
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
