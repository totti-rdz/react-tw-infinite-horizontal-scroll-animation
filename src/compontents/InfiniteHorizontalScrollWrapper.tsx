type Props = {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
};

const InfiniteHorizontalScrollWrapper = ({
  children,
  duration,
  reverse = false,
}: Props) => {
  return (
    <div
      className="flex w-fit"
      style={{
        animation: `loop ${duration}ms linear infinite ${
          reverse ? "reverse" : "normal"
        }`,
      }}
    >
      {children}
      {children}
    </div>
  );
};

export default InfiniteHorizontalScrollWrapper;
