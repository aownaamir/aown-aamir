import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
function QuestionAnswerBox({ text }) {
  return (
    <div className="w-[250px] h-[250px] hobby-card overflow-hidden px-3 border-4 border-slate-950 flex flex-col justify-center items-center relative transition-all duration-300">
      <div className="flex justify-center items-center">
        <h3 className="text-[27px] text-slate-300 font-bold capitalize">
          {text}
        </h3>
      </div>

      <div className="right-angle-triangle-tl absolute top-0 left-0 transition-all duration-300"></div>
      <div className="right-angle-triangle-br absolute bottom-0 right-0 transition-all duration-300"></div>
      <div className="right-angle-triangle-tr absolute top-0 right-0 transition-all duration-300"></div>
      <div className="right-angle-triangle-bl absolute bottom-0 left-0 transition-all duration-300"></div>
      <div
        className={`q-mark w-full h-full absolute flex items-center justify-center text-[130px] font-bold text-pink-700 transition-all duration-300 ${playfairDisplay.className}`}
      >
        ?
      </div>
    </div>
  );
}

export default QuestionAnswerBox;
