import { FaRegStar } from "react-icons/fa";
import StarRating from "./StarRating";
import Star from "./Star";

function ContactForm() {
  return (
    <form>
      <div className="flex flex-col gap-16 justify-center items-center">
        <input
          type="text"
          className="w-[270px] lg:w-[340px] h-[30px] text-[16px] text-white placeholder:text-slate-200 placeholder:italic bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-b-2 border-white pb-2 overflow-hidden"
          placeholder="Name"
          required
        />

        <input
          type="text"
          className="w-[270px] lg:w-[340px] h-[30px] text-[16px] text-white placeholder:text-slate-200 placeholder:italic bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-b-2 border-white pb-2 overflow-hidden"
          placeholder="Email"
          required
        />

        <textarea
          className="w-[270px] lg:w-[340px] h-[30px] text-[16px] text-white placeholder:text-slate-200 placeholder:italic bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-b-2 border-white pb-2 overflow-hidden"
          placeholder="Write me a message"
          required
        ></textarea>
        <div className="w-[270px] lg:w-[340px] h-[30px] flex gap-0 lg:gap-2 justify-start items-center">
          <label htmlFor="" className="text-white italic text-[16px]">
            Rate my website
          </label>
          <StarRating />
        </div>
        <button className="w-[100px] h-[40px] border-2 border-white text-white">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
