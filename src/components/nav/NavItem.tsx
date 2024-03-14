import Link, { LinkProps } from "next/link";

export const NavItem = (props: LinkProps) => {
  return <Link {...props} className="text-lg text-text-second font-bold" />;
};
