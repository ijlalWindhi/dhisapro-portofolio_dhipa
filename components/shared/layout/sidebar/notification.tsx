import React from "react";
import { Bell, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import notification from "@/mocks/notfication.json";

function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="notification"
        >
          {notification.length > 0 ? (
            <BellDot className="h-5 w-5" />
          ) : (
            <Bell className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="max-w-[100vw] max-h-[50vh] md:max-h-96 overflow-auto lg:max-w-sm"
      >
        {notification.length > 0 ? (
          notification.map((menu) => {
            return (
              <div key={menu.title}>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">{menu?.description}</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </div>
            );
          })
        ) : (
          <p className="text-sm min-w-64 text-center py-2 w-full">
            No notification
          </p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Notification;
