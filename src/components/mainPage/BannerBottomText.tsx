type BannerBottomTextProps = {
  text: string;
};

export const BannerBottomText = ({ text }: BannerBottomTextProps) => {
  return (
    <h3 className="font-bold text-white text-[10px] md:text-3xl text-center whitespace-nowrap">
      {text}
    </h3>
  );
};
