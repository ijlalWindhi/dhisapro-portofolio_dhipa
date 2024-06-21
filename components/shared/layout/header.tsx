"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/shared/layout/sidebar/themeToggle";
import { navLinks } from "@/constants";
import Notification from "@/components/shared/layout/sidebar/notification";
import Profile from "@/components/shared/layout/sidebar/profile";

function Header() {
  // initial variables
  const pathname = usePathname();
  const label = navLinks.map((link) => {
    if (link.route === pathname) {
      return link.label;
    }
  });

  return (
    <header className="hidden justify-between bg-secondary px-6 py-4 dark:bg-primary-foreground md:inline-flex">
      <div className="inline-flex items-center justify-between gap-3 w-full">
        <h1 className="items-center text-lg font-semibold text-primary-500">
          {label}
        </h1>
        <div className="flex gap-4 items-center">
          {/* Toggle Theme */}
          <ThemeToggle />

          {/* Notification  */}
          <Notification />

          {/* Profile */}
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
