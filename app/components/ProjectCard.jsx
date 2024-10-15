import Image from "next/image";
import lhr from "@/public/images/Lahoresq.jpg";

function ProjectCard({ item, color }) {
  return (
    <div
      className={`w-[290px]  bg-${color}-950 p-4 flex flex-col items-center gap-3 `}
    >
      <div className="w-[268px] h-[268px] relative">
        <div
          className={`w-[258px] h-[258px] absolute bottom-0 right-0 bg-${
            color === "slate" ? "purple" : "slate"
          }-950`}
        ></div>
        <div
          className={`w-[258px] h-[258px] absolute left-0 top-0 overflow-hidden `}
        >
          <Image src={lhr} alt="" />
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-3 justify-center items-center">
        <h2 className="text-white text-lg font-semibold ">{item.title}</h2>
        <p className="text-[13px] text-white text-justify">
          {item.description}
        </p>
        <a href={`${item.url}`} className=" italic text-xs text-white">
          Visit live site &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
