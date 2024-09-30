import Image from "next/image";
import lahore from "@/public/images/Lahoresq.jpg";
import islamabad from "@/public/images/Islamabadsq.jpg";
import nust from "@/public/images/NUSTsq.jpg";
import gcu from "@/public/images/GCUsq.jpg";

function AboutMe() {
  return (
    <div className=" flex flex-col lg:flex-row">
      <div className="w-full lg:h-[100vh] lg:w-[30%]  h-[50vh] px-12 bg-purple-950 flex justify-center items-center">
        <div className="text-slate-200 text-center flex flex-col gap-7">
          <h1 className="font-bold text-4xl">About Me</h1>
          <p>
            I was born in Lahore, Pakistan. I did my metriculation from UGI and
            FSC Pre-Engineering from GCU-Lahore. Currently residing in Islamabad
            and pursuing an engineering degree from National University of
            Sciences and Technology Islamabad
          </p>
        </div>
      </div>
      <div className="w-full lg:h-[100vh] lg:w-[70%] py-20  lg:py-20 px-5 bg-slate-950 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-x-10 lg:gap-y-10">
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <Image src={lahore} alt="Lahore" className="w-full" />
            <div className="w-full h-12 card-tag absolute bottom-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">Lahore</i>
            </div>
          </div>
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <Image src={gcu} alt="Lahore" className="w-full" />
            <div className="w-full h-12 card-tag absolute bottom-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">GCU</i>
            </div>
          </div>
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <Image src={nust} alt="Lahore" className="w-full" />
            <div className="w-full h-12 card-tag absolute bottom-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">NUST</i>
            </div>
          </div>
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <Image src={islamabad} alt="Lahore" className="w-full" />
            <div className="w-full h-12 card-tag absolute bottom-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">Islamabad</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
