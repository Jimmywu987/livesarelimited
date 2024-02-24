import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";

export const Partner = () => {
  return (
    <section className="pb-14">
      <MaxWidthWrapper className="space-y-24">
        <div className="flex items-center space-x-20">
          <h4 className="whitespace-nowrap">合作夥伴</h4>
          <div className=" flex-1 h-0.5 bg-[#E5E5E5]" />
        </div>
        <div className="relative w-full h-32 md:h-[320px]">
          <Image
            src="/images/partner-banner.jpeg"
            alt="partner logos"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
