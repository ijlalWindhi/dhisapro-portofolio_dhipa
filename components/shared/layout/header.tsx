"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

function Header() {
  // initial variables
  const pathname = usePathname();
  const label = navLinks.map((link) => {
    if (link.route === pathname) {
      return link.label;
    }
  });

  return (
    <header className="hidden justify-between bg-white px-6 py-4 dark:bg-gray-900 md:inline-flex">
      <div className="inline-flex items-center gap-3">
        <h1 className="items-center text-lg font-semibold text-primary-500">
          {label}
        </h1>
      </div>
    </header>
  );
}

export default Header;
