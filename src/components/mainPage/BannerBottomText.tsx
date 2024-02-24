type BannerBottomTextProps = {
  text: string;
};

export const BannerBottomText = ({ text }: BannerBottomTextProps) => {
  return (
    <h3 className="font-bold text-white text-sm md:text-3xl text-center">
      {text}
    </h3>
  );
};
