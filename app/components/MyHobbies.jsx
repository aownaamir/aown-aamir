import { hobbies } from "../data/data";
import QuestionAnswerBox from "./QuestionAnswerBox";

function MyHobbies() {
  return (
    <div
      className={`lg:h-screen bg-purple-950 flex justify-center items-center flex-col gap-20`}
    >
      <h1 className="text-5xl mt-28 lg:mt-20 font-bold text-slate-300 text-center">
        What do I like doing ?
      </h1>
      <div className="flex gap-24 flex-col lg:flex-row my-20 lg:my-0">
        {hobbies.map((item, i) => (
          <QuestionAnswerBox key={i} text={item} />
        ))}
      </div>
    </div>
  );
}

export default MyHobbies;
