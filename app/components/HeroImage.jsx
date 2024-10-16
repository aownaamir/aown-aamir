import Image from "next/image";
import profilePic from "@/public/images/Aown.jpg";

function HeroImage() {
  return (
    <div className="w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] relative">
      <div className="w-[200px] h-[200px] lg:w-[330px] lg:h-[330px] absolute bottom-0 right-0 bg-slate-950"></div>
      <Image
        src={profilePic}
        alt="Aown"
        className="w-[200px] h-[200px] lg:w-[330px] lg:h-[330px] absolute top-0 left-0"
      />
    </div>
  );
}

export default HeroImage;
