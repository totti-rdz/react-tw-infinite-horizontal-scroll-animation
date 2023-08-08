type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => (
  <div className="flex items-center gap-x-1 leading-none text-[#e2e8f0] text-base bg-[#334155] rounded-md px-4 py-3 mr-4 shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.2),0_0.1rem_0.5rem_rgba(0,0,0,0.3),0_0.2rem_1.5rem_rgba(0,0,0,0.4)]">
    <span className="text-[#64748b] text-lg font-bold leading-none">#</span>
    <span>{text}</span>
  </div>
);

export default Tag;
