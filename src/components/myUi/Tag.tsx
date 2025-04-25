import { cn } from "#/src/lib/utils";
import Link from "next/link";
import React from "react";

const Tag: React.FC<{
  children: React.ReactNode;
  classNames?: string;
  href?: string;
}> = ({ children, classNames, href = "#" }) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-1 bg-secondary hover:text-background rounded-full text-sm hover:bg-primary transition-colors",
        classNames
      )}
    >
      {children}
    </Link>
  );
};

export default Tag;
