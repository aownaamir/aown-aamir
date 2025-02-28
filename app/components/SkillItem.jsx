function SkillItem({ skill }) {
  console.log(skill.color);
  return (
    <div className="w-32 h-32 flex justify-center items-center">
      {/* <p>{skill.title}</p> */}
      <skill.svg className={`w-28 h-28 fill-[#ffffff]`} />
    </div>
  );
}

export default SkillItem;
