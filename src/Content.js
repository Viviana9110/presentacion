// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import tailwindcss from "./assets/images/Skills/tailwindcss.png"
import html from "./assets/images/Skills/html.png"
import css from "./assets/images/Skills/css.png"
import js from "./assets/images/Skills/js.png"
import Vitejs from "./assets/images/Skills/Vitejs.png"
import ts from "./assets/images/Skills/ts.png"


import services_logo1 from "./assets/images/Services/logo1.png";


import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person1 from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "FrontEnd Developer",
    firstName: "VIVIANA",
    LastName: "LONDOÑO",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: " ' ",
        text: "Desarrolladora FrontEnd React con pasión por crear interfaces de usuario, experiencias y animaciones intuitivas y dinámicas. Mi objetivo siempre es escribir código limpio para asi ofrecer resultados finales excepcionales.",
      },
      {
        count: " ' ",
        text: "¡No dudes en contactarme en cualquier momento y estaré siempre en la mejor disposición de trabajar contigo!",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "HTML",
        para: "",
        logo: html,
      },
      {
        name: "CSS",
        para: "",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "",
        logo: js,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "Vite",
        para: "",
        logo: Vitejs,
      },
      {
        name : "TailwindCSS",
        para: "",
        logo: tailwindcss,
      },
      {
        name : "TypeScript",
        para: "",
        logo: ts,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Services",
    service_content: [
      {
        title: "Web Development",
        para: "Desarrollo de aplicaciones web escalables y de alto rendimiento utilizando React.js y otras tecnologías frontend. Optimización del rendimiento de las aplicaciones para mejorar la experiencia del usuario y reducir los tiempos de carga.",
        logo: services_logo1,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY PROJECTS",
    image: person_project,
    project_content: [
      {
        title: "Quiosco de comida",
        image: project4,
        link: "https://quiosco-next-app-router-eight.vercel.app/order/cafe"
      },      
      {
        title: "Administrador de pacientes de veterinaria",
        image: project1,
        link: "https://whimsical-creponne-2c2ee0.netlify.app/"
      },
      {
        title: "Calculadora de propinas",
        image: project2,
        link: "https://exquisite-brigadeiros-ede1db.netlify.app/"
      },
      {
        title: "Tienda virtual",
        image: project3,
        link: "https://unrivaled-truffle-6e8631.netlify.app/"
      },
      
    ],
  },
  
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person1,
    image2: Hireme_person1,
    para: "Siempre estoy dispuesta a aprender y mantenerme actualizada sobre las últimas tendencias y tecnologías en el mundo del desarrollo web.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "vivianalondononaranjo@gmail.com",
        icon: GrMail,
        link: "mailto:vivianalondononaranjo@gmail.com",
      },
      {
        text: "3137622767",
        icon: MdCall,
        link: "https://wa.me/3137622767",
      },
      {
        text: "Viviana91",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/viviana91/",
      },
      {
        text: "Viviana91",
        icon: BsGithub,
        link: "https://github.com/Viviana9110?tab=repositories",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
