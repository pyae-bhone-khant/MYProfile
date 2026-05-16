
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"
import project7 from "../assets/projects/project7.png"
import project8 from "../assets/projects/project8.png"
import project9 from "../assets/projects/project9.png"
import project10 from "../assets/projects/project10.png"
import project11 from "../assets/projects/project11.png"
import project12 from "../assets/projects/project12.png"

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
    title: "Zaya Social",
    image: project12,
    description:
      "A social media platform for connecting with friends and sharing updates. Currently under development.",
    technologies: ["Shadcn", "Next.js" , "Express.js" , "Prisma ORM" , "PostgreSQL"],
    // demo: "https://github.com/pyae-bhone-khant/Zaya-social-api.git",
    github: "https://github.com/pyae-bhone-khant/Zaya-social-api.git",
    category: "platform"
  },
   {
    title: "Zaya Note",
    image: project11,
    description:
      "A note-taking application for organizing thoughts and ideas. Currently under development.",
    technologies: ["Shadcn", "Next.js" , "Express.js" , "Prisma ORM" , "Neon PostgreSQL"],
    // demo: "https://github.com/pyae-bhone-khant/Note-api.git",
    github: "https://github.com/pyae-bhone-khant/Note-api.git",
    category: "platform"
  },
   {
    title: "Furnicture",
    image: project10,
    description:
      "An e-commerce website for buying and selling furniture. Currently under development.",
    technologies: ["Shadcn", "Next.js" , "Express.js" , "Prisma ORM" , "PostgreSQL"],
    // demo: "https://github.com/pyae-bhone-khant/furnicture-api.git",
    github: "https://github.com/pyae-bhone-khant/furnicture-api.git",
    category: "ecommerce"
  },
 
  {
    title: "FashionWebsite",
    image: project6,
    description:
      "A fashion e-commerce website built with React and Tailwind CSS. Currently under development.",
    technologies: ["Tailwind", "React"],
    demo: "https://fashionshop-12.netlify.app",
    github: "https://github.com/pyae-bhone-khant/fashionshop-12.git",
    category: "ecommerce"
  },

  {
    title: "TMDB MOVIE",
    image: project9,
    description:
      "A movie discovery platform that allows users to explore popular, trending, and detailed movie information. Currently under development.",
    technologies: ["Nextjs", "Tailwinds", "Shadcn ui" , "TMDB API", ],
    demo: "https://tmdb-movie-pi.vercel.app/",
    github: "https://github.com/pyae-bhone-khant/tmdb-movie.git",
    category: "platform"
  },
];

export const CONTACT = {
  address: "Hlaing Township, Yangon, Myanmar",
  phoneNo: "+959 982 4255 19 ",
  email: "pyaebhonen4@gmail.com",
};
