import lahore from "@/public/images/Lahoresq.jpg";
import islamabad from "@/public/images/Islamabadsq.jpg";
import nust from "@/public/images/NUSTsq.jpg";
import gcu from "@/public/images/GCUsq.jpg";
import Paint from "../svgs/Paint";
import Web from "../svgs/Web";
import Freelancer from "../svgs/Freelancer";
import Engineer from "../svgs/Engineer";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import profilePic from "@/public/images/Aown.jpg";

const hobbies = ["swimming", "coding", "horse riding"];

const aboutMe = [
  {
    id: 0,
    title: "Lahore",
    description:
      "I Was born and raised in an ancient city called Lahore. Majority part of my life is spent living in Lahore.",
    img: profilePic,
    lahore,
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
];

const workExperience = [
  {
    id: 0,
    title: "Lead Frontend Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
    svg: Paint,
  },
  {
    id: 2,
    title: "MERN Developer Intern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
    svg: Web,
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
    svg: Freelancer,
  },
  {
    id: 4,
    title: "Power Engineer Intern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
    svg: Engineer,
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
      {
        id: 1,
        title: "Attique's Portfolio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
      {
        id: 2,
        title: "Holy Family Hospital",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
      {
        id: 4,
        title: "Web-Crawler",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
      {
        id: 5,
        title: "Patient Management System",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
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
        title: "Patient Management System",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
      {
        id: 7,
        title: "Natours - Book Tours",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
      {
        id: 8,
        title: "Amazon Webscrapper",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo, a dictum nibh dignissim bibendum.",
        url: "",
      },
    ],
  },
];

const testimonials = [
  {
    id: 0,
    name: "Taha Aamir",
    img: profilePic,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo",
    rating: "",
  },
  {
    id: 1,
    name: "Muhammad Attique",
    img: profilePic,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo",
    rating: "",
  },
  {
    id: 2,
    name: "Muhammad Abdullah",
    img: profilePic,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis augue. Nullam dignissim porta leo",
    rating: "",
  },
];

const footerItems = [
  { id: 0, title: "Instagram", text: "aownaamir007", icon: FaInstagram },
  { id: 0, title: "website", text: "aown-aamir.vercel.app", icon: TbWorld },
  { id: 0, title: "gmail", text: "aown.seecs@gmail.com", icon: IoMailOutline },
  { id: 0, title: "linkedin", text: "aown.seecs@gmail.com", icon: FaLinkedin },
];

export {
  hobbies,
  aboutMe,
  workExperience,
  projects,
  testimonials,
  footerItems,
};
