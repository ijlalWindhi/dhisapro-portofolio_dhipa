"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiAlignJustify,
} from "react-icons/fi";
import { navLinks as navLinksConstants } from "@/constants";
import NavItem from "@/components/shared/sidebar/navItem";
import BadgeUser from "@/components/shared/sidebar/badgeUser";

function Index() {
  //  state
  const [isMinimize, setIsMinimize] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [navLinks, setNavLinks] = useState<INavLink[]>(navLinksConstants);
  const router = useRouter();

  //   function
  const togglMinimize = (isMinimize: boolean) => {
    setIsMinimize(isMinimize);
  };

  const toggleShow = (isShow: boolean) => {
    setIsShow(isShow);
  };

  return (
    <aside className="z-50 w-full md:h-full md:w-fit lg:relative lg:z-0">
      <div
        className={`flex h-full w-full flex-col overflow-y-auto border-r border-primary-foreground bg-secondary transition duration-300 ease-in-out dark:border-secondary dark:bg-primary-foreground ${
          isMinimize
            ? " transition duration-300 ease-in-out md:w-fit"
            : " md:w-[16rem]"
        }`}
      >
        <div className="flex h-full w-full flex-col justify-between gap-6 px-4 py-4 md:pb-8 md:pt-6">
          <header
            className={`inline-flex h-fit w-full items-center gap-2.5 ${isMinimize ? "flex-col justify-center" : "flex-row justify-between"}`}
          >
            <Image
              src="/assets/images/logo.png"
              className={`cursor-pointer ${isMinimize ? "mb-2 ml-0" : "md:ml-6"}`}
              alt="Logo"
              width={70}
              height={70}
              onClick={() => router.push("/")}
            />
            <button
              className="hidden rounded-lg border p-2 md:block dark:border-primary"
              onClick={() => togglMinimize(!isMinimize)}
            >
              {isMinimize ? (
                <FiChevronsRight className="w-6 h-6 text-primary" />
              ) : (
                <FiChevronsLeft className="w-6 h-6 text-primary" />
              )}
            </button>
            <div className="flex items-center gap-4 sm:gap-6 md:hidden">
              <button
                className="rounded-lg border p-2"
                onClick={() => toggleShow(!isShow)}
              >
                <FiAlignJustify className="w-6 h-6 text-primary" />
              </button>
            </div>
          </header>
          <div className="hidden h-full flex-col gap-4 md:flex">
            {navLinks.map((navLink) => (
              <NavItem
                key={navLink.label}
                navLink={navLink}
                isMinimize={isMinimize}
                setNavLinks={setNavLinks}
                navLinks={navLinks}
                togglMinimize={togglMinimize}
              />
            ))}
          </div>
          {isShow ? (
            <div className="absolute left-0 top-24 flex h-fit w-screen flex-col gap-3 bg-secondary py-4 dark:bg-primary-foreground md:hidden">
              {navLinks.map((navLink) => (
                <NavItem
                  key={navLink.label}
                  navLink={navLink}
                  isMinimize={isMinimize}
                  setNavLinks={setNavLinks}
                  navLinks={navLinks}
                  togglMinimize={togglMinimize}
                />
              ))}
            </div>
          ) : null}
          <BadgeUser
            minimize={isMinimize}
            isMinimize={isMinimize}
            toggleMinimize={togglMinimize}
          />
        </div>
      </div>
    </aside>
  );
}

export default Index;
