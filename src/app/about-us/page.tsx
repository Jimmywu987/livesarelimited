import { Details } from "@/components/aboutUs/Details";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SectionTitle } from "@/components/mainPage/SectionTitle";
import { EnquiryButton } from "@/components/ui/buttons/EnquiryButton";
import Image from "next/image";
import { Partners } from "@/components/Partners";

const AboutUs = () => {
  return (
    <div className="my-16">
      <MaxWidthWrapper className="space-y-8">
        <SectionTitle title="關於我們" />
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          <h2 className="text-3xl md:text-7xl font-bold flex-1 leading-tight px-10 md:px-20">
            我們是死亡的 百貨公司
          </h2>
          <p className="text-2xl font-bold flex-1 px-10 md:px-20">
            人生是人生事，讓我們在人生的最後一件事為你延續愛，整理好與逝者的回憶和物品，重新出發。
          </p>
        </div>
        <div className="relative w-full h-32 md:h-[320px]">
          <Image
            src="/images/about-us/about-us-banner.png"
            alt="partner logos"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
        <div className=" hidden md:flex justify-center">
          <EnquiryButton
            size="main"
            className="text-xl md:text-4xl shadow-lg font-bold"
          >
            查詢服務
          </EnquiryButton>
        </div>
      </MaxWidthWrapper>
      <div className="bg-theme-third my-8">
        <MaxWidthWrapper className="space-y-16 px-0 md:p-10">
          <p className="text-2xl md:text-4xl px-20 pt-10 md:pt-0">
            以專業、細心和體貼的精神服務每一單遺宅清潔及遺物整理個案。每一個遺宅對我們而言，都是一段獨一無二的生命軌跡，我們未必能完全理解逝者背後的故事，但我們會陪著逝者和家屬好好告別，一起走最後一段路。
          </p>
          <div className="flex flex-col md:flex-row md:justify-center p-10 md:p-0 md:space-x-36 bg-white md:bg-theme-third space-y-16 md:space-y-0 ">
            <Details
              className="pr-20 md:pr-0"
              title="我們的想法"
              description="人生事是一個處理遺物及遺宅清潔、提供另類生死教育的社會企業，期望能讓喪親者家屬在舊址裡重新出發，重新生活；更能與各位一起帶著自己的故事，去探索人生該如何走下去，或者人生該是什麼，活出屬於自己的人生。"
            />
            <Details
              className="flex flex-col items-end md:items-start pl-20 md:pl-0"
              title="我們的故事"
              description="死亡從不是一個蓋棺後就下定論的事情，皆因生命的延續性是由在世者為其寫下更多篇章。一個茶杯、一支筆、一部相機，千言萬語地連結著我們與逝者的故事，整理好每一件物品便是梳理好每一個故事，讓美好的愛和回憶好好地留在心裡。"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="flex md:hidden justify-center">
        <EnquiryButton
          size="main"
          className="text-xl md:text-4xl shadow-lg font-bold"
        >
          查詢服務
        </EnquiryButton>
      </div>
      <Partners />
    </div>
  );
};

export default AboutUs;
