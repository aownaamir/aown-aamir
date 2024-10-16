import { footerItems } from "../data/data";

function Footer() {
  return (
    <div className="h-screen lg:h-[50vh] px-5 bg-purple-950 flex flex-col lg:flex-row justify-center items-center gap-36 text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 lg:gap-2 text-white">
          <h1 className="font-bold text-7xl">Lagger&apos;s Lab</h1>
          {/* <p className="text-center lg:text-right text-lg">Web Developer</p> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex flex-col justify-center items-center lg:items-start gap-2">
          {footerItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-center items-center gap-2"
            >
              <span className="text-3xl text-white">
                <item.icon />
              </span>
              <span className="text-lg text-white">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
