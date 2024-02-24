import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const FOOTER_ITEM_LIST = [
  {
    mainItem: {
      text: "首頁",
      link: "/",
    },
    subItems: [
      {
        text: "關於我們",
        link: "/about-us",
      },
      {
        text: "服務範圍",
        link: "/services/cleaning",
      },
      {
        text: "媒體採訪",
        link: "/",
      },
      {
        text: "聯絡我們",
        link: "/",
      },
    ],
  },
  {
    mainItem: {
      text: "人生事動態",
      link: "/",
    },
    subItems: [
      {
        text: "未來活動",
        link: "/",
      },
      {
        text: "博客文章",
        link: "/",
      },
    ],
  },
  {
    mainItem: {
      text: "社交媒體",
      link: "/",
    },
    subItems: [
      {
        text: "Instagram",
        link: "/",
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
                <Link href={mainItem.link} className="text-white font-bold">
                  {mainItem.text}
                </Link>
                {subItems.map((item, indx) => (
                  <Link href={item.link} key={indx} className="text-white/60">
                    {item.text}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
