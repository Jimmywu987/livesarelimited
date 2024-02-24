import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SectionTitle } from "@/components/mainPage/SectionTitle";
import { ServiceCard } from "@/components/mainPage/card/ServiceCard";

export const SERVICES_LIST = [
  {
    title: "遺宅清潔",
    description:
      "盡可能把遺體滋生的細菌、有機殘留物及其他痕跡清理乾淨，人生事專業團隊亦會根據不同情況，使用特殊的清潔工具和藥水清理現場。",
    link: "/services/cleaning",
    backgroundImage: "/images/main/cleaning.png",
  },
  {
    title: "禮儀規劃",
    description:
      "人生的最後一件事，我們期望為家屬提供適合的告別禮禮儀規劃服務，透過了解先人與家屬的需求而策劃完善的個人化告別禮禮儀規劃。",
    link: "/services/planning",
    backgroundImage: "/images/main/planning.png",
  },
  {
    title: "生死教育",
    description:
      "一個茶杯、一支筆、一部相機，千言萬語地連結著我們與逝者的故事，整理好每一件物品便是梳理好每一個故事，讓美好的愛和回憶好好地留在心裡。",
    link: "/services/education",
    backgroundImage: "/images/main/education.png",
  },
];

export const Services = () => {
  return (
    <section>
      <MaxWidthWrapper className="space-y-16">
        <SectionTitle title="服務範圍" />
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10 space-y-10 md:space-y-0">
          {SERVICES_LIST.map((service) => (
            <ServiceCard {...service} key={service.title} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
