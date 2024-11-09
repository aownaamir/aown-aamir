import Image from "next/image";
import lhr from "/public/Lahoresq.jpg";

function ProjectCard({ item }) {
  return (
    <div
      className={`w-[290px]  bg-purple-950 p-4 flex flex-col items-center gap-3 `}
    >
      <div
        className={`w-full h-[150px] overflow-hidden border-4 border-stone-500`}
      >
        <Image src={item.img} alt="" className="w-full" />
      </div>
      <div className="mt-3 flex flex-col gap-3 justify-center items-center">
        <h2 className="text-white text-lg font-semibold ">{item.title}</h2>
        <p className="text-[13px] text-white text-center">{item.description}</p>
        <a
          href={`${item.url}`}
          target="_blank"
          className="visit text-xs text-white italic underline-offset-8 flex justify-center items-center flex-col  transition-all duration-300"
        >
          <p>Visit live site &rarr;</p>
          <div className="line w-0  mt-1 border border-purple-950  transition-all duration-300"></div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
