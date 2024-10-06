import lahore from "@/public/images/Lahoresq.jpg";
import islamabad from "@/public/images/Islamabadsq.jpg";
import nust from "@/public/images/NUSTsq.jpg";
import gcu from "@/public/images/GCUsq.jpg";
import Image from "next/image";

function WhatILike() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:h-[100vh] lg:w-[70%] py-20  lg:py-20 px-5 bg-slate-950 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black relative transition-all duration-300">
            <div className="about-info w-full h-full text-center absolute left-0 top-0 z-10 flex flex-col gap-2 text-white justify-center items-center bg-purple-950 opacity-0 px-5 transition-all duration-300">
              <p className="text-sm">
                I Was born and raised in an ancient city called Lahore. Majority
                part of my life is spent living in Lahore.
              </p>
            </div>
            <Image src={lahore} alt="Lahore" className="w-full" />
            <div className="w-[100px] h-12 card-tag absolute top-0 left-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">Lahore</i>
            </div>
          </div>
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <div className="about-info w-full h-full text-center absolute left-0 top-0 z-10 flex flex-col gap-2 text-white justify-center items-center bg-purple-950 opacity-0 px-5 transition-all duration-300">
              <p className="text-sm">
                I Was born and raised in an ancient city called Lahore. Majority
                part of my life is spent living in Lahore.
              </p>
            </div>
            <Image src={gcu} alt="Lahore" className="w-full" />
            <div className="w-[100px] h-12 card-tag absolute top-0 left-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">GCU</i>
            </div>
          </div>
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <div className="about-info w-full h-full text-center absolute left-0 top-0 z-10 flex flex-col gap-2 text-white justify-center items-center bg-purple-950 opacity-0 px-5 transition-all duration-300">
              <p className="text-sm">
                I Was born and raised in an ancient city called Lahore. Majority
                part of my life is spent living in Lahore.
              </p>
            </div>
            <Image src={nust} alt="Lahore" className="w-full" />
            <div className="w-[100px] h-12 card-tag absolute top-0 left-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">NUST</i>
            </div>
          </div>
          <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
            <div className="about-info w-full h-full text-center absolute left-0 top-0 z-10 flex flex-col gap-2 text-white justify-center items-center bg-purple-950 opacity-0 px-5 transition-all duration-300">
              <p className="text-sm">
                I Was born and raised in an ancient city called Lahore. Majority
                part of my life is spent living in Lahore.
              </p>
            </div>
            <Image src={islamabad} alt="Lahore" className="w-full" />
            <div className="w-[100px] h-12 card-tag absolute top-0 left-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
              <i className=" text-slate-200 text-sm">Islamabad</i>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default WhatILike;
