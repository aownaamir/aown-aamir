import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div className="relative  w-full h-screen flex flex-col md:flex-col lg:flex-row justify-center items-center">
      <div className="lg:hidden lg:h-full lg:w-[50%] w-full h-[40%] bg-purple-950 flex justify-center items-center">
        <HeroImage />
      </div>
      <div className="lg:h-full md:w-full lg:w-[60%] h-[70%] px-5 bg-slate-950 flex justify-center items-center">
        <div className="flex flex-col text-slate-100 text-center justify-center items-center gap-4">
          <p className="text-2xl">Hi, I&apos;m</p>
          <h1 className="font-bold text-6xl">Aown Aamir</h1>

          <p className="text-lg">
            An engineering student with a passion for software development.
          </p>
          <a href="#start-a-project" htmlFor="start-a-project">
            <button className="w-[160px] h-[50px] text-sm mt-3 bg-purple-950  ">
              Start a project
            </button>
          </a>
        </div>
      </div>
      <div className="hidden lg:flex  lg:h-full lg:w-[40%] w-full h-[50%] bg-purple-950  justify-center items-center">
        <HeroImage />
      </div>
    </div>
  );
}

export default Hero;
