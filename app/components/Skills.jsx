import { skills } from "../data/data";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="py-20 px-7 bg-slate-950 flex justify-center items-center flex-col gap-20">
      <h1 className="text-4xl font-bold text-white text-center">My Skillset</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-20 gap-y-10">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
