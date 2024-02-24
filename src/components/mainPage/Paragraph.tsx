type ParagraphProps = {
  title: string;
  paragraph: string;
};

export const Paragraph = ({ title, paragraph }: ParagraphProps) => {
  return (
    <div>
      <p className="text-lg">「{title}」</p>
      <p className="text-lg">{paragraph}</p>
    </div>
  );
};
