import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLayout } from "@/store/layout";
import ThemeToggle from "@/components/shared/sidebar/themeToggle";

interface IBadgeUser {
  className?: string;
}

function BadgeUser({ className }: IBadgeUser) {
  // initial variables
  const router = useRouter();
  const { toggleMinimize, isMinimize } = useLayout();

  return (
    <div
      className={`rounded-lg flex items-center justify-between bg-primary-foreground dark:bg-secondary h-fit w-full px-4 py-3 ${className}`}
    >
      <div
        className={`flex cursor-pointer items-center gap-3 ${isMinimize ? "justify-center" : "justify-start"}`}
        onClick={() => {
          router.push("/profile");
          isMinimize && toggleMinimize(!isMinimize);
        }}
      >
        <Image
          src="/assets/images/logo.png"
          className="rounded-full object-cover object-center md:h-10 md:w-10"
          alt="user profile"
          width={40}
          height={40}
        />
        {!isMinimize && (
          <p className="flex w-full font-semibold flex-col font-sans text-primary dark:text-secondary-foreground">
            Admin
          </p>
        )}
      </div>
      {!isMinimize && <ThemeToggle />}
    </div>
  );
}

export default BadgeUser;
