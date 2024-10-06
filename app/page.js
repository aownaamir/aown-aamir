import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import MyHobbies from "./components/MyHobbies";
import WhatILike from "./components/WhatILike";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      {/* <WhatILike /> */}
      <MyHobbies />
      <Experience />
    </div>
  );
}
