import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";





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
    year : "2026" ,
    role : "Full Stck Developer",
    company : "Mahar(abc contant solutions)",
    description : "Developed and maintained web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
    technologies : ["Javascript", "React.js", "Next.js", "express.js", "nest.js"]
  }

];


export const PROJECTS = [
  {
    title: "COOKCRAFT",
    image: project4,
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
    image: project7,
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
    // demo: "https://cook-recipe-tawny.vercel.app/",
    gradient:
      "from-purple-500 via-pink-500 to-blue-500",
  },
  {
      title: "Meeting Room Booking",
      image: project6,
      shortDescription:
        "Meeting room booking system with real-time availability.",
      description:
        "Real-time reservation platform featuring live availability updates via WebSockets and secure multi-provider authentication.",
      technologies: [
        "Shadcn",
        "Next.js",
        "Express.js",
        "Prisma ORM",
        "Neon PostgreSQL",
        "Better-auth",
      ],
      page : ["Dashboard" , "Booking" , "Room Management" , "User Management"],
      github:
        "https://github.com/pyae-bhone-khant/Meeting-Room_Booking_System-api.git",
      category: "platform",
      status: "Completed",
      featured: true,
      duration: "2026",
      role: "Full Stack Developer",
      team: "UI UX - Judith",
      gradient:
      "from-orange-500 to-pink-500",
    },
    {
      title: "Furnicture",
      image: project5,
      shortDescription:
        "Furniture e-commerce platform with modern UI.",
      description:
        "An e-commerce website for browsing, purchasing, and managing furniture products with a premium shopping interface.",
      technologies: [
       "Next.js", "Zustand", "TanStack Query", "Express", "Prisma", "Redis", "BullMQ", "Jest", "Supertest"
      ],
      page : [ "Product List" , "Product Detail" ,  "Checkout" , "Order History"],
      github:
        "https://github.com/pyae-bhone-khant/furnicture-api.git",
      category: "ecommerce",
      status: "Completed",
      featured: true,
      duration: "2026",
      role: "Full Stack Developer",
      team: "Solo Project",
      gradient:
        "from-orange-500 to-pink-500",
    },
  {
    title: "Zaya Social",
    image: project3,
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
    page : [ "Profile" , "Chat" , "Notification" , "Settings"],
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
    title: "TMDB MOVIE",
    image: project1,
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

    page : [ "Movie List" , "Movie Detail" , "Search" , "Rating"],

    demo:
      "https://tmdb-movie-pi.vercel.app/",
    github:
      "https://github.com/pyae-bhone-khant/Movie-Website.git",
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
