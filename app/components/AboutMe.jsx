import { aboutMe } from "../data/data";
import AboutMeCard from "./AboutMeCard";

function AboutMe() {
  return (
    <div className=" flex flex-col lg:flex-row">
      <div className="w-full lg:h-[100vh] lg:w-[30%]  h-[50vh] px-12 bg-purple-950 flex justify-center items-center">
        <div className="text-slate-200 text-center flex flex-col gap-7">
          <h1 className="font-bold text-4xl">About Me</h1>
          <p>
            I was born in an ancient city, did my metriculation from
            middle-class school and FSC Pre-Engineering from a well recognized
            college. Currently residing in a new city and pursuing an
            engineering degree from a Pakistan&apos;s well known university
          </p>
        </div>
      </div>
      <div className="w-full lg:h-[100vh] lg:w-[70%] py-20  lg:py-20 px-5 bg-slate-950 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {aboutMe.map((item) => (
            <AboutMeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
