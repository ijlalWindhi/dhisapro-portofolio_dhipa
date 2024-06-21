type IconComponentProps = {
  className?: string;
};

type MenuOverview = {
  title: string;
  icon: React.FC<IconComponentProps>;
  value: string;
  description: string;
};

interface INavLink {
  label: string;
  route: string;
  icon: React.FC<IconComponentProps>;
  sub?: {
    label: string;
    route: string;
  }[];
  isOpen: boolean;
}

interface IProfileMenu {
  label?: string | null;
  route?: string | null;
  type: "label" | "item" | "separator";
}
