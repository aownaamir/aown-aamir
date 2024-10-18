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
      <p className="text-white lg:w-[550px] text-center">
        I was born in an ancient city, did my metriculation from middle-class
        school and FSC Pre-Engineering from a well recognized college. Currently
        residing in a new city and pursuing an engineering degree from a
        Pakistan&apos;s well known university
      </p>
      <div className="flex gap-24 flex-col lg:flex-row my-20 lg:my-0">
        {hobbies.map((item, i) => (
          <QuestionAnswerBox key={i} text={item} />
        ))}
      </div>
    </div>
  );
}

export default MyHobbies;
