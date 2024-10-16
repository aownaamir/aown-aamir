function ExperienceCard({ item }) {
  return (
    <div className=" w-[320px] lg:w-[460px] h-32 flex justify-between items-center">
      <div>
        <item.svg className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] fill-white" />
      </div>
      <div className="w-[240px]  lg:w-[360px] flex flex-col gap-2">
        <h2 className="text-white text-xl font-semibold whitespace-nowrap">
          {item.title}
        </h2>
        <p className="text-white text-sm italic text-justify">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
