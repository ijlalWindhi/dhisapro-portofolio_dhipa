"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiAlignJustify,
} from "react-icons/fi";
import NavItem from "@/components/shared/layout/sidebar/navItem";
import BadgeUser from "@/components/shared/layout/sidebar/badgeUser";
import { useLayout } from "@/store/layout";
import useIsMobile from "@/hook/useIsMobile";

function Index() {
  //  initial variables
  const router = useRouter();
  const { isMinimize, isShow, navLinks, toggleMinimize, toggleShow } =
    useLayout();
  const isMobile = useIsMobile();

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
              className="hidden rounded-lg bg-primary-foreground dark:bg-secondary p-2 md:block"
              onClick={() => toggleMinimize(!isMinimize)}
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
          {isMobile ? (
            isShow && (
              <div className="absolute left-0 top-24 flex h-fit w-screen flex-col gap-3 bg-secondary py-4 dark:bg-primary-foreground">
                {navLinks.map((navLink) => (
                  <NavItem key={navLink.label} navLink={navLink} />
                ))}
                <BadgeUser />
              </div>
            )
          ) : (
            <>
              <div className="h-full flex-col gap-4 flex">
                {navLinks.map((navLink) => (
                  <NavItem key={navLink.label} navLink={navLink} />
                ))}
              </div>
              <BadgeUser />
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Index;
