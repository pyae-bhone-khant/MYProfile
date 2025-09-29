
import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"
import project3 from "../assets/projects/project3.png"
import project4 from "../assets/projects/project4.png"
import project5 from "../assets/projects/project5.png"




import image from  "../assets/projects/images.png"

export const HERO_CONTENT = `I am self-taught passionate full stack  developer with a strong sense of responsibility
and organization.I am passionate about modern web
development and have developed skills in creating web applications
using frameworks and library of Javascript and CSS. I'm excited to bring my skills and enthusiasm to a great team.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "My Profile Website",
    image: project1,
    description:
      "A personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies, it features a clean design, responsive layout, and smooth navigation to highlight my work effectively.",
    technologies: [
      
      "React",
       "Tailwind",
       "React-router",
       "framer animation"
    ],
    demo: "#",
  },
  {
    title: "To-Do-List-Pro",
    image: project2,
    description: "A sleek and intuitive to-do list app that helps users organize and track their daily tasks efficiently, with a clean interface. NO Responsive",
    technologies: ["MUI", "Tailwind", "React"],
    demo: "https://to-do-list-pro-pbk.netlify.app",
  },
  {
    title: "Fairway clone",
    image: project5,
    description:
      "The project is not finished yet: I'm still working on it",
    technologies: ["Tailwind", "React", "Express", "MongoDB"],
    demo: "https://fireway-clone.netlify.app",
  },
  {
    title: "CoffeeShop",
    image: project3,
    description:
      "A simple and elegant coffee shop app for browsing menu items and managing orders with ease. NO Mobile Reponsive",
    technologies: ["Tailwind",  "React", "React-router"],
    demo: "https://coffeeshop-1234.netlify.app",
  },

  {
    title: "Game Store",
    image: project4,
    description:
      "The project is not finished yet: I'm still working on it",
    technologies: ["Tailwind", "Typescript", "React", "Express", "MongoDB"],
    demo: "https://github.com/pyae-bhone-khant/Gameapp.git",
  },
  {
    title: "social",
    image: image,
    description:
      "The project is not finished yet: I'm still working on it",
    technologies: ["Tailwind", "React", "Express", "MongoDB"],
    demo: "#",
  },
];

export const CONTACT = {
  address: "7E JLN Baiduri Off JLN San Peng, 55200 ,Kuala Lumpur",
  phoneNo: "+959 982 4255 19 ",
  email: "pyaebhonen4@gmail.com",
};
