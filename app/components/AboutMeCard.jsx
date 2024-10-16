import Image from "next/image";

function AboutMeCard({ item }) {
  return (
    <div className="about-card w-[290px] h-[200px] overflow-hidden border border-black bg-pink-950 relative transition-all duration-300">
      <div className="about-info w-full h-full text-center absolute left-0 top-0 z-10 flex flex-col gap-2 text-white justify-center items-center bg-purple-950 opacity-0 px-5 transition-all duration-300">
        <p className="text-sm">{item.description}</p>
      </div>
      <Image src={item.img} alt="Lahore" className="w-full" />
      <div className="w-[100px] h-12 card-tag absolute top-0 left-0 flex justify-center items-center bg-purple-950 transition-all duration-300">
        <i className=" text-slate-200 text-sm">{item.title}</i>
      </div>
    </div>
  );
}

export default AboutMeCard;
