import { Button, ButtonProps } from "@/components/ui/buttons/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const EnquiryButton = (props: ButtonProps) => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSfWCVI-rnwQ0GjFOQEb_NUhlqgdAQW9t3GktMWaE1_7QMRvcw/viewform?pli=1"
      target="_blank"
    >
      <Button
        {...props}
        style={{
          textShadow: "0px 4px 4px #00000040",
        }}
        className={cn("bg-[#F7DB67] text-white", props.className)}
      />
    </Link>
  );
};
