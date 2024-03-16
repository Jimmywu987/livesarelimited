import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const FOOTER_ITEM_LIST = [
  {
    mainItem: {
      children: "首頁",
      href: "/",
    },
    subItems: [
      {
        children: "關於我們",
        href: "/about-us",
      },
      {
        children: "服務範圍",
        href: "/services/cleaning",
      },
      // {
      //   children: "媒體採訪",
      //   href: "/",
      // },
      {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfWCVI-rnwQ0GjFOQEb_NUhlqgdAQW9t3GktMWaE1_7QMRvcw/viewform?pli=1",
        children: "聯絡我們",
        target: "_blank",
      },
    ],
  },
  // {
  //   mainItem: {
  //     children: "人生事動態",
  //     href: "/",
  //   },
  //   subItems: [
  //     {
  //       children: "未來活動",
  //       href: "/",
  //     },
  //     {
  //       children: "博客文章",
  //       href: "/",
  //     },
  //   ],
  // },
  {
    mainItem: {
      children: "社交媒體",
      href: "/",
    },
    subItems: [
      {
        children: "Instagram",

        href: "https://www.instagram.com/livesare/?r=nametag",
        target: "_blank",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0B0706] py-12">
      <MaxWidthWrapper className="flex flex-col md:flex-row space-y-6 md:space-y-0">
        <div className="space-y-0 md:space-y-6 w-full md:w-2/12">
          <h6 className="text-white font-bold text-lg">人生事有限公司</h6>
          <Image
            src="/images/logo.png"
            className="aspect-auto object-contain w-auto h-auto"
            alt="Live are limited logo"
            width={120}
            height={60}
          />
        </div>
        <div className="flex w-10/12 justify-evenly">
          {FOOTER_ITEM_LIST.map((each, index) => {
            const { mainItem, subItems } = each;
            return (
              <div key={index} className="flex flex-col space-y-4">
                <Link {...mainItem} className="text-white font-bold" />
                {subItems.map((item, indx) => (
                  <Link {...item} key={indx} className="text-white/60" />
                ))}
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
