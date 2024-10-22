import { hobbies } from "../data/data";
import QuestionAnswerBox from "./QuestionAnswerBox";

function MyHobbies() {
  return (
    <div
      className={`pb-28 bg-purple-950 flex justify-center items-center flex-col gap-20 px-5`}
    >
      <h1 className="text-5xl mt-28 lg:mt-20 font-bold text-slate-300 text-center">
        What do I like doing ?
      </h1>
      <p className="text-white lg:w-[400px] text-center">
        When I&apos;m not coding, you can find me exploring new hobbies, maybe
        even geeking out about the latest trends in tech.
      </p>
      <div className="flex gap-24 md:gap-10 lg:gap-20 flex-col md:flex-row my-20 md:my-0">
        {hobbies.map((item, i) => (
          <QuestionAnswerBox key={i} text={item} />
        ))}
      </div>
    </div>
  );
}

export default MyHobbies;
