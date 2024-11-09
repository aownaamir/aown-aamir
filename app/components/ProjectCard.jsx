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
          className="text-xs text-white italic underline underline-offset-8"
        >
          Visit live site &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
