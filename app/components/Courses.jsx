import { courses } from "../data/data";
import CourseItem from "./CourseItem";

function Courses() {
  return (
    <div className="py-20 px-7 bg-purple-950 flex justify-center items-center flex-col gap-20">
      <h1 className="text-4xl font-bold text-white text-center">My Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 justify-center items-center pb-[10px]">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
