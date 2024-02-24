type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="space-x-5 flex items-center">
      <span className="h-0.5 w-14 bg-theme-secondary" />
      <h2 className="text-theme-secondary text-lg font-bold">{title}</h2>
    </div>
  );
};
