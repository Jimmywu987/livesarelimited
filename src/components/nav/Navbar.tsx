import Image from "next/image";
import { Button } from "@/components/ui/buttons/Button";
import { NavItem } from "@/components/nav/NavItem";
import { NavDrawer } from "@/components/nav/NavDrawer";
import Link from "next/link";

export const LINKS = [
  {
    url: "/about-us",
    itemText: "關於我們",
  },
  {
    url: "/",
    itemText: "服務範圍",
  },
  {
    url: "/",
    itemText: "文章及採訪",
  },
  {
    url: "/",
    itemText: "聯絡我們",
  },
];

export const Navbar = () => {
  return (
    <header className="bg-white flex justify-between items-center px-4 h-21 border-b border-b-[#00000066]">
      <Link className="flex items-center space-x-1 " href="/">
        <Image
          src="/images/logo.png"
          alt="Live are limited logo"
          width={100}
          height={60}
          className="aspect-auto object-contain w-auto h-auto"
        />
        <p className="font-black heading-10 text-lg whitespace-nowrap">
          人生事有限公司
        </p>
      </Link>
      <div className=" space-x-9 whitespace-nowrap hidden lg:flex">
        {LINKS.map((link) => (
          <NavItem {...link} key={link.itemText} />
        ))}
      </div>
      <Button
        className="text-white bg-theme-secondary hover:bg-theme-one/90 font-medium hidden lg:flex"
        size="lg"
      >
        查詢服務
      </Button>
      <div className="flex lg:hidden">
        <NavDrawer />
      </div>
    </header>
  );
};
