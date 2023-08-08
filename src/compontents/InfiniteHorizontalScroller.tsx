import InfiniteHorizontalScrollWrapper from "./InfiniteHorizontalScrollWrapper";
import Tag from "./Tag";
import { random } from "../helper/random";
import { shuffle } from "../helper/shuffle";

type Props = {
  duration?: number;
  rows?: number;
  tags: string[];
  tagsPerRow?: number;
};

const InfiniteHorizontalScroller = ({
  duration = 15000,
  rows = 5,
  tags,
  tagsPerRow,
}: Props) => {
  return (
    <div className="w-[30rem] max-w-[90vw] flex flex-col shrink-0 gap-y-4 relative py-6 overflow-hidden">
      {[...new Array(rows)].map((_, i) => (
        <InfiniteHorizontalScrollWrapper
          key={i}
          duration={random(duration - 5000, duration + 5000)}
          reverse={Boolean(i % 2)}
        >
          {shuffle(tags)
            .slice(0, tagsPerRow)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteHorizontalScrollWrapper>
      ))}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#1e293b,transparent_30%,transparent_70%,#1e293b)]" />
    </div>
  );
};

export default InfiniteHorizontalScroller;
