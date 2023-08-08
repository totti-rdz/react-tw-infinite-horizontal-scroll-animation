type Props = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center m-4">
      <h1 className="font-semibold text-4xl md:text-5xl mb-2">{title} </h1>
      <p className="text-[#94a3b8]">{subtitle}</p>
    </div>
  );
};

export default Title;
