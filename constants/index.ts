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
    label: "Projects",
    route: "/projects",
    icon: IoDocumentTextOutline,
    sub: [],
    isOpen: false,
  },
];
