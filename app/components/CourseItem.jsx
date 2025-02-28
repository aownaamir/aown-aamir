function CourseItem({ course }) {
  return (
    <div className="w-[320px] lg:w-[420px] h-[150px] flex gap-5 p-7 justify-center items-center border-l-2 border-t-2 border-slate-950 project-shadow-slate">
      <course.svg className="w-16 h-16" />
      <div className="flex flex-col gap-3 text-white">
        <p className="text-lg">{course.title}</p>
        <p className="text-sm capitalize italic">By {course.instructor}</p>
      </div>
    </div>
  );
}

export default CourseItem;
