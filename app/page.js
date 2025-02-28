import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyHobbies from "./components/MyHobbies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import StartAProject from "./components/StartAProject";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <MyHobbies />
      <Experience />
      <Projects />
      <Skills />
      <Courses />
      <StartAProject />
      <Footer />
    </div>
  );
}
