import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Partners } from "@/components/Partners";

export const Partner = () => {
  return (
    <section>
      <MaxWidthWrapper className="space-y-24">
        <div className="flex items-center space-x-20">
          <h4 className="whitespace-nowrap">合作夥伴</h4>
          <div className=" flex-1 h-0.5 bg-[#E5E5E5]" />
        </div>
      </MaxWidthWrapper>
      <Partners />
    </section>
  );
};
