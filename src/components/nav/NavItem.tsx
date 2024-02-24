import Link from "next/link";
import { LINKS } from "@/components/nav/Navbar";

export const NavItem = ({ url, itemText }: (typeof LINKS)[number]) => {
  return (
    <Link href={url} className="text-lg text-text-second font-bold">
      {itemText}
    </Link>
  );
};
