import { aboutMe } from "../data/data";
import AboutMeCard from "./AboutMeCard";

function AboutMe() {
  return (
    <div className="flex flex-col bg-slate-950 py-32 gap-20 justify-center items-center">
      <h1 className="font-bold text-4xl text-white">About Me</h1>
      <div className="w-full  px-5 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {aboutMe.map((item) => (
            <AboutMeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
