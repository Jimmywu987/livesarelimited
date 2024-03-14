import Link, { LinkProps } from "next/link";

export const NavDrawerItem = (props: LinkProps) => {
  return <Link {...props} className="text-lg text-text-second font-bold" />;
};
