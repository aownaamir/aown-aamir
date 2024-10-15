import Image from "next/image";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div className=" ">
      {projects.map((stack) => (
        <div
          key={stack.id}
          className={`bg-purple-950 py-20 px-5 flex flex-col justify-center items-center gap-20 bg-${stack.color}-950`}
        >
          <div className={`flex flex-col justify-center items-center gap-20 `}>
            <h1 className="text-4xl text-white font-bold capitalize">
              {stack.title} Projects
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-20">
              {stack.list.map((item) => (
                <ProjectCard key={item.id} item={item} color={stack.color} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
