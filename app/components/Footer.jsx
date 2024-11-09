"use client";

import { footerItems } from "../data/data";

function Footer() {
  function handleCopyMail(e, title) {
    if (title !== "gmail") return;
    const email = "aown.seecs@gmail.com";
    console.log(e);
    e.preventDefault();
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  }
  return (
    <div className="h-screen lg:h-[50vh] px-5 bg-purple-950 flex flex-col lg:flex-row justify-center items-center gap-36 text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 lg:gap-2 text-white">
          <h1 className="font-bold text-7xl">Lagger&apos;s Lab</h1>
          {/* <p className="text-center lg:text-right text-lg">Web Developer</p> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex flex-col justify-center items-center lg:items-start gap-1">
          {footerItems.map((item) => (
            <a
              href={item.url}
              target={"_blank"}
              key={item.id}
              onClick={(e) => handleCopyMail(e, item.title)}
            >
              <li className="flex flex-col link items-center">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-3xl text-white">
                    <item.icon />
                  </span>
                  <span className="text-lg text-white">{item.text}</span>
                </div>
                <div className="link-line w-0 mt-[4px] border border-purple-950 transition-all duration-300"></div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
