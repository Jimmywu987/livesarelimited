import { cn } from "@/lib/utils";

type DetailsProps = {
  title: string;
  description: string;
  className?: string;
};

export const Details = ({ title, description, className }: DetailsProps) => {
  return (
    <div className={cn("space-y-6 flex-1 font-bold", className)}>
      <h6 className="text-xl md:text-2xl md:text-md">{title}</h6>
      <p className="text-lg md:text-xl">{description}</p>
    </div>
  );
};
