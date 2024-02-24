type CleaningServiceProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};
export const CleaningService = ({
  icon,
  title,
  description,
}: CleaningServiceProps) => {
  return (
    <div className="flex space-x-6">
      {icon}
      <div className="max-w-[330px] space-y-3">
        <h6 className="text-xl font-bold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};
