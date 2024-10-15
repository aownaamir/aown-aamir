import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-screen lg:h-[50vh] px-5 bg-slate-950 flex flex-col lg:flex-row justify-center items-center gap-36 text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 lg:gap-2 text-white">
          <h1 className="font-bold text-7xl">Lagger&apos;s Lab</h1>
          <p className="text-center lg:text-right text-lg">Web Developer</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex flex-col justify-center items-center lg:items-start gap-2">
          <li className="flex justify-center items-center gap-2">
            <span className="text-3xl text-white">
              <FaInstagram />
            </span>
            <span className="text-lg text-white">aownaamir007</span>
          </li>
          <li className="flex justify-center items-center gap-2">
            <span className="text-3xl text-white">
              <TbWorld />
            </span>
            <span className="text-lg text-white">aownaamir.vercel.app</span>
          </li>
          <li className="flex justify-center items-center gap-2">
            <span className="text-3xl text-white">
              <IoMailOutline />
            </span>
            <span className="text-lg text-white">
              aownaamir.seecs@gmail.com
            </span>
          </li>
          <li className="flex justify-center items-center gap-2">
            <span className="text-3xl text-white">
              <FaLinkedin />
            </span>
            <span className="text-lg text-white">
              aownaamir.seecs@gmail.com
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
