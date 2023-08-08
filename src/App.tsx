import SkillsScroller from "./compontents/SkillsScroller";
import Title from "./compontents/Title";

function App() {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
     <Title title="Infinite Horizontal Scroll Animation" subtitle=" tailwind CSS, content independent, bi-directional, customizable" />
      <SkillsScroller/>
    </main>
  );
}

export default App;
