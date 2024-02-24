import { Details } from "@/components/aboutUs/Details";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SectionTitle } from "@/components/mainPage/SectionTitle";
import { EnquiryButton } from "@/components/ui/buttons/EnquiryButton";
import Image from "next/image";
import { CleaningService } from "@/components/services/cleaning/CleaningService";
import {
  Accompany,
  CleaningScene,
  Deodour,
  HandleRange,
  Inherit,
  WasteDisposing,
} from "@/components/svg";
import { Partners } from "@/components/Partners";

import { ServiceCard } from "@/components/mainPage/card/ServiceCard";
export const EDUCATIONS_LIST = [
  {
    title: "到校講座",
    description:
      "提供貼合青少年成長階段所需要學會的生命價值觀，透過分享不同的生命故事讓青少年從中獲得反思，並為自己的生命找到更多不同的意義和可能性",
    link: "/",
    backgroundImage: "/images/services/school.png",
  },
  {
    title: "機構講座",
    description:
      "針對不同機構的受眾而度身訂造生死教育活動，曾為信義會/浸信會/青協等不同機構提供服務，讓參加者透過了解死亡這個終點重新探索人生不同時期所面對的議題，反思生命的意義及產生改變的動力。",
    link: "/",
    backgroundImage: "/images/services/organization.png",
  },
  {
    title: "本土殯儀業導賞",
    description:
      "想知道人死後會有什麼選擇？紅磡殯儀業CBD又有多繁華？殯儀館背後有什麼故事？讓人生事帶大家穿梭紅磡——認識他們的、也是我們的死後世界。",
    link: "/",
    backgroundImage: "/images/services/tour.png",
  },
];

const EducationPage = () => {
  return (
    <div className="my-16 space-y-16">
      <MaxWidthWrapper className="space-y-8">
        <SectionTitle title="服務範圍" />
        <div className="flex flex-col md:flex-row flex-1 md:justify-evenly">
          <div className="py-10 px-20 space-y-10 flex-1">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold ">分享</h2>
              <h2 className="text-5xl font-bold ">我們從每個遺宅學到的</h2>
              <h2 className="text-5xl font-bold ">生命故事</h2>
            </div>
            <EnquiryButton
              size="main"
              className="text-2xl md:text-4xl shadow-lg font-bold"
            >
              查詢服務
            </EnquiryButton>
          </div>
          <div className="relative w-full md:flex-1 h-[320px]">
            <Image
              src="/images/services/education.png"
              alt="partner logos"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="space-y-16 px-10">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10 space-y-10 md:space-y-0">
          {EDUCATIONS_LIST.map((education) => (
            <ServiceCard {...education} key={education.title} />
          ))}
        </div>
      </MaxWidthWrapper>
      <Partners />
    </div>
  );
};

export default EducationPage;
