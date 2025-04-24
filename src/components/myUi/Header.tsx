"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";

import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
const Header = () => {
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 text-background bg-foreground shadow-lg z-50">
      <div className="max-w-[1440px] mx-auto flex justify-around items-center py-4 px-2 ">
        <Link href="/" className="  flex gap-1 font-bold text-background">
          <div className="flex gap-2">
            <ShoppingBagIcon /> Jobs
          </div>
          <div className="hidden md:block">Portal</div>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {nanLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`  text-background/60 ${
                path.split("/").includes(link.href)
                  ? " text-background "
                  : " hover:text-background "
              }   transition duration-300 px-3 py-2 rounded-lg`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <ModeToggle />

          <Button variant={"ghost"}>Login</Button>

          <Button>Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

interface NavLink {
  name: string;
  href: string;
}

const nanLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Jobs",
    href: "/jobs",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];
