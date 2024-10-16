import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

function ReviewCard({ item }) {
  return (
    <div className="w-full px-3 lg:px-0 lg:w-[430px] flex h-[160px] justify-center items-center gap-5  rounded-lg">
      <div className="h-full mt-16">
        <Image
          src={item.img}
          alt="Taha Aamir"
          className="w-14 h-14 rounded-full"
        />
      </div>
      <div className="w-[270px] flex flex-col gap-1">
        <h2 className="text-white font-bold text-md">{item.name}</h2>
        <p className="text-white italic text-sm">{item.review}</p>
        <p className="flex text-white gap-[2px]">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
