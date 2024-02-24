import { Button, ButtonProps } from "@/components/ui/buttons/Button";
import { cn } from "@/lib/utils";

export const EnquiryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      style={{
        textShadow: "0px 4px 4px #00000040",
      }}
      className={cn("bg-[#F7DB67] text-white", props.className)}
    />
  );
};
