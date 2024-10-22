import { FaLocationDot } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";

function ExperienceCard({ item }) {
  return (
    <div className="w-[320px]  lg:w-[460px] h-44 flex justify-between items-center">
      <div>
        <item.svg className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] fill-white" />
      </div>
      <div className="w-[240px]  lg:w-[360px] flex flex-col gap-2">
        <h2 className="text-white text-xl font-semibold whitespace-nowrap">
          {item.title}
        </h2>
        <p className="text-white text-sm italic text-left">
          {item.description}
        </p>
        <div className=" text-slate-400 italic text-xs right-10 bottom-0 flex gap-1">
          <p className="text-xs">
            <FaLocationDot />
          </p>
          <p>{item.institute},</p>
          <p className="text-[13.5px]">{item.location}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
