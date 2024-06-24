import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { profileMenu } from "@/constants";

function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            className="bg-primary dark:bg-background rounded-full"
            src="/assets/images/logo.png"
            alt="User profile picture"
          />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {profileMenu.map((menu, index) => {
          if (menu.type === "label") {
            return (
              <DropdownMenuLabel key={index}>{menu.label}</DropdownMenuLabel>
            );
          }
          if (menu.type === "separator") {
            return <DropdownMenuSeparator key={index} />;
          }
          return (
            <Link key={index} href={menu.route || ""}>
              <DropdownMenuItem>{menu.label}</DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
