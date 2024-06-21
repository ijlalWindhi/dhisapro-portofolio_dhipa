import { LayoutDashboard, SquareCheck } from "lucide-react";

export const navLinks: INavLink[] = [
  {
    label: "Dashboard",
    route: "/",
    icon: LayoutDashboard,
    sub: [],
    isOpen: false,
  },
  {
    label: "Task",
    route: "/task",
    icon: SquareCheck,
    sub: [],
    isOpen: false,
  },
  // {
  //   label: "Project",
  //   route: "/project",
  //   icon: File,
  //   sub: [
  //     {
  //       label: "Internal",
  //       route: "/project",
  //     },
  //   ],
  //   isOpen: false,
  // },
];

export const profileMenu: IProfileMenu[] = [
  {
    label: "My Account",
    route: null,
    type: "label",
  },
  {
    label: null,
    route: null,
    type: "separator",
  },
  {
    label: "Settings",
    route: "/settings",
    type: "item",
  },
  {
    label: "Support",
    route: "/support",
    type: "item",
  },
  {
    label: null,
    route: null,
    type: "separator",
  },
  {
    label: "Logout",
    route: "/logout",
    type: "item",
  },
];
