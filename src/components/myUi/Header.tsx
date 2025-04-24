"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  // Debugging: Log the current path and active checks
  console.log("Current path:", path);

  return (
    <header className="fixed top-0 left-0 right-0 text-foreground bg-background shadow-lg z-50">
      <div className="max-w-[1440px] mx-auto flex justify-around items-center py-4 px-2">
        <Link href="/" className="flex gap-1 font-bold text-foreground">
          <div className="flex gap-2">
            <ShoppingBagIcon /> Jobs
          </div>
          <div className="hidden md:block">Portal</div>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            // Handle null path during initial hydration
            if (!path) return null;

            const isActive =
              link.href === "/" 
                ? path === "/" 
                : path.startsWith(link.href);

            console.log(`Link ${link.href}:`, isActive);  // Debugging

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition duration-300 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>

        <div className="flex gap-2 items-center">
          <ModeToggle />
          <Button variant="ghost">Login</Button>
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

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Jobs", href: "/jobs" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];