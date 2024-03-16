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
import { CleaningServiceWithImage } from "@/components/services/cleaning/CleaningServiceWithImage";

const CleaningPage = () => {
  return (
    <div className="my-16">
      <MaxWidthWrapper className="space-y-8">
        <SectionTitle title="服務範圍" />
        <div className="flex flex-col md:flex-row flex-1 md:justify-evenly">
          <div className="py-10 px-6 md:px-20 space-y-10 flex-1">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold ">遺宅清潔</h2>
              <h2 className="text-5xl md:text-7xl font-bold ">遺物整理</h2>
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
              src="/images/services/cleaning-banner.png"
              alt="partner logos"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-theme-third my-8">
        <MaxWidthWrapper className="space-y-16 p-10">
          <h3 className=" font-bold text-4xl">有關遺宅清潔及遺物整理</h3>
          <div className="space-y-4 md:space-y-12">
            <div className="flex flex-wrap gap-4 justify-start  md:justify-around space-y-3 md:space-y-0">
              <CleaningService
                icon={<Accompany size="28" />}
                title="陪伴家屬"
                description="面對至親好友的離世和惡劣的現場環境，少不免會觸景傷情，讓人生事陪伴著你一起面對。"
              />
              <CleaningService
                icon={<CleaningScene size="28" />}
                title="清潔現場"
                description="盡可能徹底地清理現場雜物及妥善整理遺宅，讓家屬重新生活，重新出發。"
              />
              <CleaningService
                icon={<HandleRange size="28" />}
                title="處理污染範圍"
                description="以特殊清潔劑把滲入墻壁或地面的有機物污染清走，避免細菌再次於現場滋生。"
              />
            </div>
            <div className="flex flex-wrap justify-start md:justify-around space-y-3 md:space-y-0">
              <CleaningService
                icon={<Inherit size="28" />}
                title="找出遺物"
                description="協助家屬從惡劣環境中找出家人和自己最後也是最珍貴的回憶，好好保存下來。"
              />
              <CleaningService
                icon={
                  <div className="w-[40px] h-[40px]">
                    <Deodour size="100%" />
                  </div>
                }
                title="清除異味"
                description="現場遺留下的異味往往需要一段時間才能徹底散去，人生事專業團隊會透過特殊氣味清潔劑協助處理。"
              />
              <CleaningService
                icon={<WasteDisposing size="28" />}
                title="處理廢品"
                description="我們會協助清拆受污染之家具及雜物，妥善處理後丟棄或進行回收。"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="px-10 md:px-20 py-10 space-y-14 md:space-y-10">
        <CleaningServiceWithImage
          title="一般遺宅清潔"
          descriptions={[
            "以專業清潔劑清除異味",
            "全屋消毒",
            "徹底清潔污跡",
            "丟棄受污染之物品",
          ]}
          imageUrl="/images/services/general-cleaning.png"
        />
        <CleaningServiceWithImage
          title="全屋清拆"
          descriptions={[
            "以專業清潔劑清除異味",
            "全屋消毒及清拆傢私",
            "清拆傢私",
          ]}
          imageUrl="/images/services/whole-housing.png"
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default CleaningPage;
