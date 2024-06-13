import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

interface IBadgeUser {
  minimize: boolean;
  isMinimize: boolean;
  toggleMinimize: (isMinimize: boolean) => void;
  className?: string;
}

function BadgeUser({
  minimize,
  isMinimize,
  toggleMinimize,
  className,
}: IBadgeUser) {
  //   state
  const router = useRouter();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  //   function
  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("bg-light");
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("bg-light");
  }, []);
  return (
    <div
      className={`flex-col rounded-t-lg flex bg-primary-foreground dark:bg-secondary h-fit w-full px-4 pt-3 md:px-0 ${className}`}
    >
      <div
        className={`flex w-full cursor-pointer items-center gap-3 ${minimize ? "justify-center" : "justify-start"}`}
        onClick={() => {
          router.push("/profile");
          toggleMinimize(!isMinimize);
        }}
      >
        <Image
          src="/assets/images/logo.png"
          className="rounded-full object-cover object-center md:h-10 md:w-10"
          alt="user profile"
          width={40}
          height={40}
        />
        {!minimize && (
          <p className="flex w-full font-semibold flex-col font-sans text-primary dark:text-secondary-foreground">
            Admin
          </p>
        )}
      </div>
      {!minimize && (
        <div
          className="flex w-full gap-2 mt-4 cursor-pointer shadow-md items-center justify-center rounded-t-lg bg-secondary p-2 text-primary dark:bg-primary-foreground dark:text-primary"
          onClick={changeTheme}
        >
          <div
            className={`p-2 w-full rounded-xl ${theme === "light" && "bg-secondary shadow"}`}
          >
            <IoMdSunny className="mx-auto relative h-5 w-5" />
          </div>
          <div
            className={`p-2 rounded-xl w-full ${theme === "dark" && `bg-secondary shadow-md`}`}
          >
            <IoMdMoon className="relative mx-auto h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  );
}

export default BadgeUser;
