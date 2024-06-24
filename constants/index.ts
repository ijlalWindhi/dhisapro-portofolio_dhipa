import {
  LayoutDashboard,
  SquareCheck,
  ShieldAlert,
  AppWindow,
  Users,
} from "lucide-react";

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
  {
    label: "Error Page",
    route: "/",
    icon: ShieldAlert,
    sub: [
      {
        label: "Not Found",
        route: "/404",
      },
      {
        label: "Internal Server Error",
        route: "/500",
      },
      {
        label: "Maintenance",
        route: "/maintenance",
      },
      {
        label: "Under Development",
        route: "/under-development",
      },
    ],
    isOpen: false,
  },
  {
    label: "App Integration",
    route: "/app-integration",
    icon: AppWindow,
    sub: [],
    isOpen: false,
  },
  {
    label: "User Management",
    route: "/user-management",
    icon: Users,
    sub: [],
    isOpen: false,
  },
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
