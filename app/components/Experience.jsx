import { workExperience } from "../data/data";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="py-20 px-7 bg-slate-950 flex justify-center items-center flex-col gap-20">
      <h1 className="text-4xl font-bold text-white text-center">
        My Work Experience
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-10">
        {workExperience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
