import Image from "next/image";
import Paint from "../svgs/Paint";
import Web from "../svgs/Web";
import Internet from "../svgs/Internet";
import Engineer from "../svgs/Engineer";
import Freelancer from "../svgs/Freelancer";

function Experience() {
  return (
    <div className="py-20 px-7 bg-slate-950 flex justify-center items-center flex-col gap-20">
      <h1 className="text-4xl font-bold text-white text-center">
        My Work Experience
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
        <div className=" w-[320px] lg:w-[460px] h-32 flex justify-between items-center">
          <div>
            <Paint className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] fill-white" />
          </div>
          <div className="w-[240px]  lg:w-[360px] flex flex-col gap-2">
            <h2 className="text-white text-xl font-semibold whitespace-nowrap">
              Lead Frontend Engineer
            </h2>
            <p className="text-white text-sm italic text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
              facilisis augue. Nullam dignissim porta leo, a dictum nibh
              dignissim bibendum.
            </p>
          </div>
        </div>

        <div className="w-[320px] lg:w-[460px] h-32 flex justify-between items-center">
          <div>
            <Web className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] fill-white" />
          </div>
          <div className="w-[240px]  lg:w-[360px] flex flex-col gap-2">
            <h2 className="text-white text-xl font-semibold whitespace-nowrap">
              MERN Developer Intern
            </h2>
            <p className="text-white text-sm italic text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
              facilisis augue. Nullam dignissim porta leo, a dictum nibh
              dignissim bibendum.
            </p>
          </div>
        </div>
        <div className="w-[320px] lg:w-[460px] h-32 flex justify-between items-center">
          <div>
            <Freelancer className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] fill-white" />
          </div>
          <div className="w-[240px]  lg:w-[360px] flex flex-col gap-2">
            <h2 className="text-white text-xl font-semibold whitespace-nowrap">
              Freelance Web Developer
            </h2>
            <p className="text-white text-sm italic text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
              facilisis augue. Nullam dignissim porta leo, a dictum nibh
              dignissim bibendum.
            </p>
          </div>
        </div>
        <div className="w-[320px] lg:w-[460px] h-32 flex justify-between items-center">
          <div>
            <Engineer className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] fill-white" />
          </div>
          <div className="w-[240px]  lg:w-[360px] flex flex-col gap-2">
            <h2 className="text-white text-xl font-semibold whitespace-nowrap">
              Power Engineer Intern
            </h2>
            <p className="text-white text-sm italic text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
              facilisis augue. Nullam dignissim porta leo, a dictum nibh
              dignissim bibendum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
