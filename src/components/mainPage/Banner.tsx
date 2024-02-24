import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { EnquiryButton } from "@/components/ui/buttons/EnquiryButton";
import { BannerBottomText } from "@/components/mainPage/BannerBottomText";

export const Banner = () => {
  return (
    <section className="bg-main-page-background h-[500px] md:h-[600px] flex flex-col justify-center md:flex-row items-center bg-center bg-cover bg-no-repeat relative">
      <MaxWidthWrapper className="space-y-3">
        <h1 className="flex flex-col text-4xl md:text-7xl text-white font-black leading-tight">
          <span>在舊址裡，</span>
          <span>重新出發，重新生活</span>
        </h1>
        <EnquiryButton
          size="main"
          className="text-xl md:text-4xl shadow-lg font-bold"
        >
          查詢服務
        </EnquiryButton>
      </MaxWidthWrapper>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex pb-10 items-end space-x-3 md:whitespace-nowrap w-full justify-center px-2 md:px-0">
        <h4 className="text-white text-center text-xs md:text-medium">
          死亡的百貨公司
        </h4>
        <div className="flex space-x-3 border-white border-b px-3 md:px-10 py-6 mb-1">
          <BannerBottomText text="遺宅清潔" />{" "}
          <span className="text-white text-lg md:text-3xl">|</span>
          <BannerBottomText text="禮儀規劃" />{" "}
          <span className="text-white text-lg md:text-3xl">|</span>
          <BannerBottomText text="另類生死教育" />
        </div>
        <h4 className="text-white text-center text-xs md:text-medium ">
          人生是人生事
        </h4>
      </div>
    </section>
  );
};
