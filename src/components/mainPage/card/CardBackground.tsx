import { SERVICES_LIST } from "@/components/mainPage/Services";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";
const BORDER_RADIUS = "rounded-2xl";
export const CardWithBackgroundImage = ({
  title,
  backgroundImage,
  children,
}: (typeof SERVICES_LIST)[number] & PropsWithChildren) => {
  return (
    <div className={cn(" relative p-10", BORDER_RADIUS)}>
      {children}
      <div
        className={cn(
          " -inset-0 absolute opacity-60 bg-[#0B0706] -z-10",
          BORDER_RADIUS
        )}
      />
      <div className=" -inset-0 absolute -z-20">
        <Image
          fill
          alt={`service ${title} background image`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={backgroundImage}
          className={cn("object-cover  opacity-60", BORDER_RADIUS)}
        />
      </div>
    </div>
  );
};
