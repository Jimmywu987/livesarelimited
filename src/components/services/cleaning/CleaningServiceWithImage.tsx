import { EnquiryButton } from "@/components/ui/buttons/EnquiryButton";
import Image from "next/image";

type CleaningServiceWithImageProps = {
  descriptions: string[];
  title: string;
  imageUrl: string;
};
export const CleaningServiceWithImage = ({
  descriptions,
  title,
  imageUrl,
}: CleaningServiceWithImageProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-evenly md:items-center ">
      <div className=" px-0 md:px-0 space-y-6 w-full md:w-5/12 mt-10 md:mt-0">
        <h5 className="font-bold text-3xl md:text-6xl">{title}</h5>
        <div className="space-y-1">
          {descriptions.map((description) => {
            return (
              <div key={description} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-black" />
                <p className="text-xl md:text-2xl">{description}</p>
              </div>
            );
          })}
        </div>
        <EnquiryButton
          size="lg"
          className="text-2xl shadow-lg font-bold px-3 py-5 ml-10"
        >
          查詢服務
        </EnquiryButton>
      </div>
      <div className="relative w-full md:w-5/12 h-[320px] md:h-[280px]">
        <Image
          src={imageUrl}
          alt={`${title}圖`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
