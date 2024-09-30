function AboutMe() {
  return (
    <div className=" flex flex-col lg:flex-row">
      <div className="w-full lg:h-[100vh] lg:w-[40%]  h-[50vh] px-12 bg-purple-950 flex justify-center items-center">
        <div className="text-slate-200 text-center flex flex-col gap-7">
          <h1 className="font-bold text-4xl">About Me</h1>
          <ul>
            Was born in Lahore, Pakistan. Passed my metriculation from UGI and
            FSC Pre-Engineering from GCU-Lahore. Currently pursuing engineering
            degree from National University of Sciences and Technology Islamabad
          </ul>
        </div>
      </div>
      <div className="w-full lg:h-[100vh] lg:w-[60%] py-20  lg:py-20 px-5 bg-pink-950 flex justify-center items-center">
        <div className="w-[250px] h-[1350px] lg:w-[400px] lg:h-[450px] grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5">
          <div className=" border border-black bg-slate-950"></div>
          <div className=" border border-black bg-slate-950"></div>
          <div className=" border border-black bg-slate-950"></div>
          <div className=" border border-black bg-slate-950"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
