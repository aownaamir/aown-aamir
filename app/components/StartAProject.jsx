import { testimonials } from "../data/data";
import ReviewCard from "./ReviewCard";
import ContactForm from "./ContactForm";

function StartAProject() {
  return (
    <div className="py-20 px-5 bg-slate-950 flex flex-col justify-center items-center gap-20">
      <h1 className="text-4xl text-white text-center font-bold capitalize">
        Start a project with me!
      </h1>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full h-[400x] lg:w-[500px] lg:h-[520px] xl:w-[1000px] flex justify-center items-center">
          <div className="w-full  grid grid-cols-1 xl:grid-cols-2 gap-5">
            {testimonials.map((item) => (
              <ReviewCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div
          id="contact"
          className="w-full h-[600px] lg:w-[500px] lg:h-[520px] flex justify-center items-center "
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default StartAProject;
