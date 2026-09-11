import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";





export const HERO_CONTENT = `I am self-taught passionate full stack  developer with a strong sense of responsibility
and organization.I am passionate about modern web
development and have developed skills in creating web applications
using frameworks and library of Javascript and CSS. I'm excited to bring my skills and enthusiasm to a great team.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025-2026",
    role: " Full Stack Developer ",
    company: "Untimake Solutions",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js",  "NestJS",  "prisma", "neon Postgres", "mongoDB"],
  }, 
  {
    year : "2026 - PRESENT " ,
    role : "Full Stack Developer",
    company : "Mahar(abc contant solutions)",
    description : "Developed and maintained web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
    technologies : ["Javascript", "React.js", "Next.js", "express.js", "nest.js"]
  }

];


export const PROJECTS = [
  {
    title: "Next Estate",
    image: project3,
    shortDescription:
      "Modern real estate marketplace for discovering and managing properties.",
    description:
      "A full-stack real estate platform where users can browse property listings, explore the marketplace, manage their profiles, and update property information through a secure and intuitive interface.",
    technologies: [
      "Next.js",
      "React 19 ",
      "Prisma ",
     "MySQL",
    "Better Auth",
    ], 
    page : [ "Home" , "MarketPlace" , "Properties" , "Edit Profile"] ,
    github:
      "https://github.com/pyae-bhone-khant/NextEaste.git",
    category: "platform",
    status: "Completed",
    featured: true,
    duration: "2026",
    role: "Full Stack Developer",
    team: "Solo Project",
    demo: "https://nexteaste.onrender.com/",
    gradient:
      "from-purple-500 via-pink-500 to-blue-500",
  }, 
  {
    title: "COOKCRAFT",
    image: project2,
    shortDescription:
      "A cooking recipe sharing platform",
    description:
      "Secure full-stack cooking-log application featuring complex database relations, data visualization, and real-time features.",
    technologies: [
      "Next.js",
      "React 19 ",
      "Prisma ",
     "MySQL",
    "Next-Auth",
    "MUI",
    "Socket.io",
    "Chart.js"
    ], 
    page : ["Kitchen sync" , "Post Recipe" , "Recipe Detail"] ,
    github:
      "https://github.com/pyae-bhone-khant/CookRecipe",
    category: "platform",
    status: "Completed",
    featured: true,
    duration: "2026",
    role: "Full Stack Developer",
    team: "Solo Project",
    demo: "https://cook-recipe-tawny.vercel.app/",
    gradient:
      "from-purple-500 via-pink-500 to-blue-500",
  }, 
  {
    title: "SkillHub MM",
    image: project1,
    shortDescription:
      "Decoupled video learning platform ",
    description:
      "Decoupled video learning platform built with an asynchronous background queue system and dynamic progress tracking",
    technologies: [
      "Next.js",
      "Redux",  
      "Tanstack Queary",
      "Shadcn-ui",
      "Prisma",
      "PostgreSQL (Neon DB)",
      "Redis",
      "BullMQ"
    ], 
    page : ["Level test" , "Dashboard" , "Blogs" , "course"] ,
    github:
      "https://github.com/pyae-bhone-khant/MYProfile.git",
    category: "platform",
    status: "Processing",
    featured: true,
    duration: "2026",
    role: "Full Stack Developer",
    team: "Solo Project",
    demo: "https://skillset-mm-app.vercel.app/",
    gradient:
      "from-purple-500 via-pink-500 to-blue-500",
  },
 
];
export const CONTACT = {
  address: "Hlaing Township, Yangon, Myanmar",
  phoneNo: "+959 982 4255 19 ",
  email: "pyaebhonen4@gmail.com",
};
