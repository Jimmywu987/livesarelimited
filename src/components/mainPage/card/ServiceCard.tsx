import { SERVICES_LIST } from "@/components/mainPage/Services";
import { Button, buttonVariants } from "@/components/ui/buttons/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CardWithBackgroundImage } from "@/components/mainPage/card/CardBackground";

export const ServiceCard = (props: (typeof SERVICES_LIST)[number]) => {
  const { title, description, link } = props;
  return (
    <CardWithBackgroundImage {...props}>
      <h5 className="text-white text-4xl font-black">{title}</h5>
      <p className="py-10 text-white max-w-[330px]">{description}</p>
      <Link className={cn(buttonVariants({ variant: "outline" }))} href={link}>
        了解更多
      </Link>
    </CardWithBackgroundImage>
  );
};
