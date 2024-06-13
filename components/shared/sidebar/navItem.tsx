import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";
import Link from "next/link";

type NavItemProps = {
  navLink: INavLink;
  isMinimize: boolean;
  setNavLinks: React.Dispatch<React.SetStateAction<INavLink[]>>;
  navLinks: INavLink[];
  togglMinimize: (isMinimize: boolean) => void;
};

function NavItem({
  navLink,
  isMinimize,
  setNavLinks,
  navLinks,
  togglMinimize,
}: NavItemProps) {
  const router = useRouter();
  const IconComponent = navLink.icon;

  return (
    <div key={navLink.label} className="cursor-pointer">
      <div
        key={navLink.label}
        onClick={() => {
          !navLink.sub?.length ? router.push(navLink.route) : null;
          togglMinimize(false);
          navLink.sub?.length &&
            setNavLinks(
              navLinks.map((link) => ({
                ...link,
                isOpen: !link.isOpen,
              })),
            );
        }}
        className={`flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 hover:bg-primary-foreground dark:hover:bg-secondary ${
          isMinimize ? "justify-center" : "justify-between"
        }`}
      >
        <div className="flex flex-row items-center gap-2">
          <IconComponent className="w-6 h-6 text-primary" />
          {isMinimize ? null : (
            <span className="text-sm font-semibold capitalize text-primary">
              {navLink.label}
            </span>
          )}
        </div>
        {!isMinimize && !navLink.isOpen && navLink.sub?.length ? (
          <FiChevronDown className="text-primary h-5 w-5" />
        ) : !isMinimize && navLink.isOpen && navLink.sub?.length ? (
          <FiChevronUp className="text-primary h-5 w-5" />
        ) : null}
      </div>
      {navLink.isOpen && !isMinimize && navLink.sub?.length ? (
        <div className="flex flex-col gap-2">
          {navLink.sub.map((subLink) => (
            <Link
              key={subLink.label}
              href={subLink.route}
              className="flex w-full flex-row ml-4 items-center gap-2 rounded-lg px-4 py-2.5 hover:bg-primary-foreground dark:hover:bg-secondary"
            >
              <GoDotFill className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold capitalize text-primary">
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
