type IconComponentProps = {
  className?: string;
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
