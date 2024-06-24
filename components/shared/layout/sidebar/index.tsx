"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, AlignJustify } from "lucide-react";
import NavItem from "@/components/shared/layout/sidebar/navItem";
import { Button } from "@/components/ui/button";
import { useLayout } from "@/store/layout";
import useIsMobile from "@/hook/useIsMobile";
import ThemeToggle from "@/components/shared/layout/sidebar/themeToggle";
import Notification from "@/components/shared/layout/sidebar/notification";
import Profile from "@/components/shared/layout/sidebar/profile";

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
            {/* Logo */}
            <Image
              src="/assets/images/logo.png"
              className={`cursor-pointer bg-primary dark:bg-background rounded-full ${isMinimize ? "mb-2 ml-0" : "md:ml-6"}`}
              alt="Logo"
              width={60}
              height={60}
              onClick={() => router.push("/")}
            />
            <Button
              variant="outline"
              type="button"
              size="icon"
              className="hidden md:inline-flex"
              onClick={() => toggleMinimize(!isMinimize)}
              aria-label="Toggle Sidebar"
            >
              {isMinimize ? (
                <ChevronRight className="w-6 h-6" />
              ) : (
                <ChevronLeft className="w-6 h-6" />
              )}
            </Button>
            {/* Show when in mobile screen */}
            <div className="flex items-center gap-4 sm:gap-6 md:hidden">
              <div className="flex justify-between gap-2 px-4">
                <ThemeToggle />
                <Notification />
                <Profile />
                <Button
                  variant="outline"
                  type="button"
                  size="icon"
                  className="rounded-lg border p-2"
                  onClick={() => toggleShow(!isShow)}
                  aria-label="Toggle Sidebar"
                >
                  <AlignJustify className="w-6 h-6 text-primary" />
                </Button>
              </div>
            </div>
          </header>
          {isMobile ? (
            isShow && (
              <div className="absolute left-0 top-20 flex h-fit w-screen flex-col gap-3 bg-secondary py-4 dark:bg-primary-foreground">
                {navLinks.map((navLink) => (
                  <NavItem key={navLink.label} navLink={navLink} />
                ))}
              </div>
            )
          ) : (
            <>
              <div className="h-full flex-col gap-4 flex">
                {navLinks.map((navLink) => (
                  <NavItem key={navLink.label} navLink={navLink} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Index;
