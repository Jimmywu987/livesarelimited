import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SectionTitle } from "@/components/mainPage/SectionTitle";
import { Paragraph } from "@/components/mainPage/Paragraph";
import { EnquiryButton } from "@/components/ui/buttons/EnquiryButton";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section>
      <MaxWidthWrapper className="space-y-16">
        <SectionTitle title="關於我們" />
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-7/12 space-y-10 text-theme-secondary px-6 md:px-20 py-10 md:py-0">
            <h6 className="font-bold text-4xl">好好告別，是離別的規矩。</h6>
            <Paragraph
              title="清潔現場"
              paragraph="一般的清潔方式其實無法完全把遺體滋生的細菌、有機殘留物及其他痕跡清理乾淨，但人生事專業團隊會根據不同情況，使用特殊的清潔工具和藥水清理現場。"
            />
            <Paragraph
              title="遺物處理"
              paragraph="面對至親好友的離世和惡劣的現場環境，家屬少不免會觸景傷情，我們深信「物品有價，回憶無價」，希望透過遺物整理服務，為家屬找出並整理好那些承載珍貴回憶的物品，透過物品緬懷先人的同時，亦能告別遺憾，打開人生新一頁。"
            />
            <EnquiryButton
              size="lg"
              className="text-lg md:text-xl shadow-lg text-black mt-6"
            >
              查詢服務
            </EnquiryButton>
          </div>
          <div className="w-full md:w-5/12 h-52 md:h-auto relative">
            <Image
              src="/images/main/main-about-us.jpeg"
              alt="About us images"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
