import { create } from "zustand";
import { navLinks as navLinksConstants } from "@/constants";

export interface ILayoutType {
  isMinimize: boolean;
  isShow: boolean;
  navLinks: INavLink[];
  theme: string;
  toggleMinimize: (isMinimize: boolean) => void;
  toggleShow: (isShow: boolean) => void;
  toggleTheme: () => void;
  setNavLinks: (navLinks: INavLink[]) => void;
}

export const useLayout = create<ILayoutType>()((set) => ({
  isMinimize: false,
  isShow: false,
  navLinks: navLinksConstants,
  theme:
    typeof window != "undefined"
      ? localStorage.getItem("theme") ?? "light"
      : "light",
  toggleMinimize: (isMinimize: boolean) => set({ isMinimize }),
  toggleShow: (isShow: boolean) => set({ isShow }),
  toggleTheme: () => {
    if (typeof window != "undefined") {
      const theme =
        localStorage.getItem("theme") === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      set({ theme });
    }
  },
  setNavLinks: (navLinks: INavLink[]) => set({ navLinks }),
}));
