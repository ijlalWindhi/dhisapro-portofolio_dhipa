import { FiHome } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const navLinks: INavLink[] = [
  {
    label: "Home",
    route: "/",
    icon: FiHome,
    sub: [],
    isOpen: false,
  },
  {
    label: "Project",
    route: "/project",
    icon: IoDocumentTextOutline,
    sub: [
      {
        label: "Internal",
        route: "/project",
      },
    ],
    isOpen: false,
  },
];
