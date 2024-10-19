import lahore from "/public/Lhr.jpg";
import islamabad from "/public/Isb.jpg";
import nust from "/public/NUST.jpg";
import gcu from "/public/GCU.jpg";
import taha from "/public/taha.jpg";
import attique from "/public/attique.jpeg";
import abdullah from "/public/abdullah.jpeg";
import tahaAamir from "/public/tahaaamir.png";
import hospital from "/public/hospital.png";
import iphone from "/public/iphone.png";
import tracklib from "/public/tracklib.png";
import hostel from "/public/hostel.png";
import portfolio from "/public/portfolio.png";
import React from "../svgs/React";
import Web from "../svgs/Web";
import Freelancer from "../svgs/Freelancer";
import Engineer from "../svgs/Engineer";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";

const hobbies = ["swimming", "coding", "horse riding"];

const aboutMe = [
  {
    id: 0,
    title: "Lahore",
    description:
      "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
    img: lahore,
  },
  {
    id: 1,
    title: "GCU",
    description:
      "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
    img: gcu,
  },
  {
    id: 2,
    title: "NUST",
    description:
      "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
    img: nust,
  },
  {
    id: 3,
    title: "Islamabad",
    description:
      "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
    img: islamabad,
  },
  // {
  //   id: 4,
  //   title: "Islamabad",
  //   description:
  //     "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
  //   img: islamabad,
  // },
  // {
  //   id: 5,
  //   title: "Islamabad",
  //   description:
  //     "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
  //   img: islamabad,
  // },
];

const workExperience = [
  {
    id: 0,
    title: "Lead Frontend Engineer",
    description:
      "Developed frontend for various sites which are currently live, making sites ready to become fully suitable for backend implementation.",
    svg: React,
    location: "Islamabad, Pakistan",
  },
  {
    id: 2,
    title: "MERN Developer Intern",
    description:
      "Focused on both front-end and back-end technologies like React.js, Node.js and Next.js. Worked on web scraping, web crawling, and web animations.",
    svg: Web,
    location: "Islamabad, Pakistan",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    description:
      "Providing web development services to both local and global clients. Passionate about creating fully client satisfied products.",
    svg: Freelancer,
    location: "Remote, Pakistan",
  },
  {
    id: 4,
    title: "Power Engineer Intern",
    description:
      "Conducted research on various topics related to electrical circuits and designed an electrical power component using AutoCAD 3D modeling.",
    svg: Engineer,
    location: "Lahore, Pakistan",
  },
];

const projects = [
  {
    id: "one",
    title: "frontend",
    color: "purple",
    list: [
      {
        id: 0,
        title: "Taha's Portfolio",
        description:
          "A complete frontend design showcasing Taha's previous experience in the industry. Also featuring a fully functional contact form using nodemailer",
        url: "",
      },
      {
        id: 1,
        title: "Holy Family Hospital",
        description:
          "A landing page with sections detailing the hospital's history, departments, and doctor profiles. Also features a book an appointment section.",
        url: "",
      },
      {
        id: 2,
        title: "Attique's Portfolio",
        description:
          "Converted Attique's own figma desin to practical implementation. Showing Attique's abilities in the world of UI/UX design.",
        url: "",
      },
    ],
  },
  {
    id: "two",
    title: "backend",
    color: "slate",
    list: [
      {
        id: 3,
        title: "Amazon Webscrapper",
        description:
          "The tool extracts all relevant data from a provided Amazon product URL and stores the information in a database for further analysis.",
        url: "",
      },
      {
        id: 4,
        title: "Web-Crawler",
        description:
          "It extracts all links and sub-links from a given URL, providing a comprehensive view of the site's structure.",
        url: "",
      },
      {
        id: 5,
        title: "Patient Management System",
        description:
          "Used Next.js, Appwrite, and Tailwind CSS. The system allows patients to register, select a doctor, upload medical reports, and book appointments. ",
        url: "",
      },
    ],
  },
  {
    id: "three",
    title: "fullstack",
    color: "purple",
    list: [
      {
        id: 6,
        title: "Natours - Book Tours",
        description:
          "A learning project with RESTfull API integration using Node.js with MongoDB. Includes authentication, secutiry, server side rendering and a lot more.",
        url: "",
      },
      {
        id: 7,
        title: "Amazon Webscrapper",
        description:
          "The tool extracts all relevant data from a provided Amazon product URL and stores the information in a database for further analysis.",
        url: "",
      },
      {
        id: 8,
        title: "Patient Management System",
        description:
          "Used Next.js, Appwrite, and Tailwind CSS. The system allows patients to register, select a doctor, upload medical reports, and book appointments. ",
        url: "",
      },
    ],
  },
];

const summarizedProjects = [
  {
    id: 0,
    title: "Taha's Portfolio",
    description:
      "A complete frontend design showcasing Taha's previous experience in the industry. Also featuring a fully functional contact form using nodemailer",
    url: "https://taha-aamir.vercel.app/",
    img: tahaAamir,
  },
  {
    id: 1,
    title: "Holy Family Hospital",
    description:
      "A landing page with sections detailing the hospital's history, departments, and doctor profiles. Also features a book an appointment section.",
    url: "https://holy-family-hospital.vercel.app/",
    img: hospital,
  },
  {
    id: 2,
    title: "iPhone 15 Website Clone",
    description:
      "A fully animated website developed using Next.js, GSAP along with Three.js. It features 3D models of iPhone 15 with beautifull transitions.",
    url: "https://iphone15-eight.vercel.app/",
    img: iphone,
  },
  {
    id: 3,
    title: "Amazon Webscrapper",
    description:
      "The tool extracts all relevant data from a provided Amazon product URL and stores the information in a database for further analysis.",
    url: "https://tracklib-pro.vercel.app/",
    img: tracklib,
  },
  {
    id: 4,
    title: "Hostel Management System",
    description:
      "A system consisting of two portals: one for students and another for hostel management, designed to streamline essential operations.",
    url: "",
    img: hostel,
  },
  {
    id: 5,
    title: "Portfolio Web app",
    description:
      "An animated portfolio website using Next.js. The site features a wide range of animations, including an interactive 3D globe. ",
    url: "https://lagger-s-portfolio.vercel.app/",
    img: portfolio,
  },
];

const testimonials = [
  {
    id: 0,
    name: "Taha Aamir",
    img: taha,
    review:
      "I love how Aown created a simple yet captivating website that perfectly parallels my professional ethic and style. The attention to detail, combined with simplicity, was truly amazing. Highly recommend!",
    rating: "",
  },
  {
    id: 1,
    name: "Muhammad Attique",
    img: attique,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo",
    rating: "",
  },
  // {
  //   id: 2,
  //   name: "Muhammad Abdullah",
  //   img: abdullah,
  //   review:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo",
  //   rating: "",
  // },
];

const footerItems = [
  {
    id: 0,
    title: "Instagram",
    text: "aownaamir007",
    icon: FaInstagram,
    url: "https://www.linkedin.com/in/aown-aamir/",
  },
  {
    id: 1,
    title: "website",
    text: "aown-aamir.vercel.app",
    icon: TbWorld,
    url: "https://aown-aamir.vercel.app",
  },
  {
    id: 2,
    title: "gmail",
    text: "aown.seecs@gmail.com",
    icon: IoMailOutline,
    url: "https://www.linkedin.com/in/aown-aamir/",
  },
  {
    id: 3,
    title: "linkedin",
    text: "aown.seecs@gmail.com",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/aown-aamir/",
  },
];

export {
  hobbies,
  aboutMe,
  workExperience,
  projects,
  summarizedProjects,
  testimonials,
  footerItems,
};
