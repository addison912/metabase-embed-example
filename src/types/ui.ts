export type MenuItem = {
  name: string;
  icon: React.ElementType;
  href?: string;
  after?: React.ReactNode;
  onClick?: (() => void | undefined) | undefined;
  separator?: boolean;
};
