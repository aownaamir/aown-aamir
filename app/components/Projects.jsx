import { summarizedProjects } from "../data/data";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div className="bg-purple-950 py-20 px-5 flex flex-col justify-center items-center gap-20">
      <div className={`flex flex-col justify-center items-center gap-20 `}>
        <h1 className="text-4xl text-white font-bold capitalize">
          My Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-20">
          {summarizedProjects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
