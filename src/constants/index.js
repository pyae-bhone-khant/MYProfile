import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8 from "../assets/projects/project8.png";
import project9 from "../assets/projects/project9.png";
import project10 from "../assets/projects/project10.png";
import project11 from "../assets/projects/project11.png";
import project12 from "../assets/projects/project12.png";

export const HERO_CONTENT = `I am self-taught passionate full stack  developer with a strong sense of responsibility
and organization.I am passionate about modern web
development and have developed skills in creating web applications
using frameworks and library of Javascript and CSS. I'm excited to bring my skills and enthusiasm to a great team.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025-2025",
    role: " Full Stack Developer (OJT)",
    company: "Untimake Solutions",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },

   {
    year: "2026-present",
    role: " Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
 
];

// export const PROJECTS = [

//   {
//     title: "Zaya Social",

//     image: project12,

//     shortDescription: "Modern social platform with realtime interactions.",

//     description:
//       "A social media platform for connecting with friends and sharing updates. Currently under development.",

//     technologies: [
//       "Shadcn",
//       "Next.js",
//       "Express.js",
//       "Prisma ORM",
//       "PostgreSQL",
//     ],

//     github: "https://github.com/pyae-bhone-khant/Zaya-social-api.git",

//     category: "platform",

//     status: "In Progress",

//     featured: true,
//   },

//   {
//     title: "Zaya Note",

//     image: project11,

//     shortDescription: "Clean and minimal note-taking productivity app.",

//     description:
//       "A note-taking application for organizing thoughts and ideas. Currently under development.",

//     technologies: [
//       "Shadcn",
//       "Next.js",
//       "Express.js",
//       "Prisma ORM",
//       "Neon PostgreSQL",
//     ],

//     github: "https://github.com/pyae-bhone-khant/Note-api.git",

//     category: "platform",

//     status: "In Progress",

//     featured: false,
//   },

//   {
//     title: "Furnicture",

//     image: project10,

//     shortDescription: "Furniture e-commerce platform with modern UI.",

//     description:
//       "An e-commerce website for buying and selling furniture. Currently under development.",

//     technologies: [
//       "Shadcn",
//       "Next.js",
//       "Express.js",
//       "Prisma ORM",
//       "PostgreSQL",
//     ],

//     github: "https://github.com/pyae-bhone-khant/furnicture-api.git",

//     category: "ecommerce",

//     status: "In Progress",

//     featured: true,
//   },

//   {
//     title: "Fashion Website",

//     image: project6,

//     shortDescription: "Modern fashion shopping experience built with React.",

//     description:
//       "A fashion e-commerce website built with React and Tailwind CSS. Currently under development.",

//     technologies: ["React", "Tailwind CSS", "JavaScript"],

//     demo: "https://fashionshop-12.netlify.app",

//     github: "https://github.com/pyae-bhone-khant/fashionshop-12.git",

//     category: "ecommerce",

//     status: "Live",

//     featured: false,
//   },

//   {
//     title: "TMDB MOVIE",

//     image: project9,

//     shortDescription: "Movie discovery platform powered by TMDB API.",

//     description:
//       "A movie discovery platform that allows users to explore popular, trending, and detailed movie information.",

//     technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "TMDB API"],

//     demo: "https://tmdb-movie-pi.vercel.app/",

//     github: "https://github.com/pyae-bhone-khant/tmdb-movie.git",

//     category: "platform",

//     status: "Live",

//     featured: true,
//   },
// ];

export const PROJECTS = [
  {
    title: "Zaya Social",

    image: project12,

    shortDescription:
      "Modern social platform with realtime interactions.",

    description:
      "A social media platform for connecting with friends, sharing updates, creating posts, and building communities with a modern responsive UI.",

    technologies: [
      "Shadcn",
      "Next.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
    ],

    github:
      "https://github.com/pyae-bhone-khant/Zaya-social-api.git",

    category: "platform",

    status: "In Progress",

    featured: true,

    duration: "2026",

    role: "Full Stack Developer",

    team: "Solo Project",

    gradient:
      "from-purple-500 via-pink-500 to-blue-500",
  },

  {
    title: "Zaya Note",

    image: project11,

    shortDescription:
      "Clean and minimal note-taking productivity app.",

    description:
      "A productivity-focused note-taking application for organizing tasks, ideas, and personal workflows with a clean user experience.",

    technologies: [
      "Shadcn",
      "Next.js",
      "Express.js",
      "Prisma ORM",
      "Neon PostgreSQL",
    ],

    github:
      "https://github.com/pyae-bhone-khant/Note-api.git",

    category: "platform",

    status: "In Progress",

    featured: false,

    duration: "2026",

    role: "Frontend + Backend",

    team: "Solo Project",

    gradient:
      "from-cyan-500 to-blue-500",
  },

  {
    title: "Furnicture",

    image: project10,

    shortDescription:
      "Furniture e-commerce platform with modern UI.",

    description:
      "An e-commerce website for browsing, purchasing, and managing furniture products with a premium shopping interface.",

    technologies: [
      "Shadcn",
      "Next.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
    ],

    github:
      "https://github.com/pyae-bhone-khant/furnicture-api.git",

    category: "ecommerce",

    status: "In Progress",

    featured: true,

    duration: "2026",

    role: "Full Stack Developer",

    team: "Solo Project",

    gradient:
      "from-orange-500 to-pink-500",
  },

  {
    title: "Fashion Website",

    image: project6,

    shortDescription:
      "Modern fashion shopping experience built with React.",

    description:
      "A responsive fashion e-commerce website featuring product showcases, category browsing, and a modern shopping experience.",

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    demo:
      "https://fashionshop-12.netlify.app",

    github:
      "https://github.com/pyae-bhone-khant/fashionshop-12.git",

    category: "ecommerce",

    status: "Live",

    featured: false,

    duration: "2025",

    role: "Frontend Developer",

    team: "Solo Project",

    gradient:
      "from-pink-500 to-rose-500",
  },

  {
    title: "TMDB MOVIE",

    image: project9,

    shortDescription:
      "Movie discovery platform powered by TMDB API.",

    description:
      "A movie discovery platform that allows users to explore trending movies, ratings, trailers, and detailed movie information using TMDB API.",

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TMDB API",
    ],

    demo:
      "https://tmdb-movie-pi.vercel.app/",

    github:
      "https://github.com/pyae-bhone-khant/tmdb-movie.git",

    category: "platform",

    status: "Live",

    featured: true,

    duration: "2025",

    role: "Frontend Developer",

    team: "Solo Project",

    gradient:
      "from-violet-500 to-indigo-500",
  },
];
export const CONTACT = {
  address: "Hlaing Township, Yangon, Myanmar",
  phoneNo: "+959 982 4255 19 ",
  email: "pyaebhonen4@gmail.com",
};
