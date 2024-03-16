import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SectionTitle } from "@/components/mainPage/SectionTitle";
import { CleaningService } from "@/components/services/cleaning/CleaningService";
import { Accompany, Inherit } from "@/components/svg";
import { EnquiryButton } from "@/components/ui/buttons/EnquiryButton";
import Image from "next/image";

const PlanningPage = () => {
  return (
    <div className="mt-16 space-y-14">
      <MaxWidthWrapper className="space-y-8">
        <SectionTitle title="服務範圍" />
        <div className="flex flex-col md:flex-row flex-1 md:justify-evenly">
          <div className="py-10 px-6 md:px-20 space-y-10 flex-1">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold ">禮儀規劃</h2>
            </div>
            <EnquiryButton
              size="main"
              className="text-2xl md:text-4xl shadow-lg font-bold mt-6"
            >
              查詢服務
            </EnquiryButton>
          </div>
          <div className="relative w-full md:flex-1 h-[320px]">
            <Image
              src="/images/services/planning.png"
              alt="partner logos"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-theme-third h-[520px] md:h-[320px]">
        <MaxWidthWrapper className="space-y-12 p-10">
          <h3 className=" font-bold text-4xl">禮儀規劃</h3>
          <div className="space-y-4 md:space-y-12">
            <div className="flex flex-col md:flex-row justify-start  md:justify-evenly space-y-12 md:space-y-0">
              <div className="flex space-x-6">
                <Accompany size="28" />
                <div className="max-w-[380px] space-y-3">
                  <h6 className="text-2xl font-bold">基本禮儀規劃</h6>
                  <p className="text-lg">
                    我們會與持牌殯葬商永福殯儀合作策劃基本告別儀式，以專業及細心的態度提供服務。
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <Inherit size="28" />
                <div className="max-w-[380px] space-y-3">
                  <h6 className="text-2xl font-bold">個性化禮儀規劃</h6>
                  <p className="text-lg">
                    協助家屬透過個性化的告別儀式修補遺憾，梳理先人的生命故事，好好告別。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default PlanningPage;
