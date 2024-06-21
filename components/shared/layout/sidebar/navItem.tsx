import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";
import { useLayout } from "@/store/layout";

// types
type NavItemProps = {
  navLink: INavLink;
};

function NavItem({ navLink }: NavItemProps) {
  // initial variables
  const router = useRouter();
  const pathname = usePathname();
  const { setNavLinks, toggleMinimize, isMinimize, navLinks } = useLayout();
  const IconComponent = navLink.icon;
  const url = new URL(navLink.route, "http://localhost:3000");

  // state
  const activeClass = `${pathname === url.pathname ? "bg-primary-foreground dark:bg-secondary" : ""}`;

  // handler
  const handleClickMenu = () => {
    !navLink.sub?.length ? router.push(navLink.route) : null;
    toggleMinimize(false);
    navLink.sub?.length &&
      setNavLinks(
        navLinks.map((link) => ({
          ...link,
          isOpen: !link.isOpen,
        })),
      );
  };

  return (
    <div key={navLink.label} className="cursor-pointer">
      {/* Main Item */}
      <div
        key={navLink.label}
        onClick={handleClickMenu}
        className={`flex flex-row items-center gap-2 rounded-md px-4 py-2.5 hover:bg-primary-foreground dark:hover:bg-secondary ${activeClass} ${isMinimize ? "justify-center" : "justify-between"}`}
      >
        <div className="flex flex-row items-center gap-2">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          {isMinimize ? null : (
            <span className="text-sm font-medium capitalize text-primary">
              {navLink.label}
            </span>
          )}
        </div>
        {!isMinimize && !navLink.isOpen && navLink.sub?.length ? (
          <ChevronDown className="text-primary h-5 w-5" />
        ) : !isMinimize && navLink.isOpen && navLink.sub?.length ? (
          <ChevronUp className="text-primary h-5 w-5" />
        ) : null}
      </div>

      {/* Sub Item */}
      {navLink.isOpen && !isMinimize && navLink.sub?.length ? (
        <div className="flex flex-col gap-2 mt-2.5">
          {navLink.sub.map((subLink) => (
            <Link
              key={subLink.label}
              href={subLink.route}
              className={`flex w-full flex-row md:ml-3 items-center gap-2 rounded-lg px-4 py-2.5 hover:bg-primary-foreground dark:hover:bg-secondary ${activeClass}`}
            >
              <Dot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium capitalize text-primary">
                {subLink.label}
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default NavItem;
