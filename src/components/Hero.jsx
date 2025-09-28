import { motion } from "framer-motion";

import { HERO_CONTENT } from "../constants/index.js";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="  lg:w-1/2">
          <div className="  flex justify-center lg:p-8">
          <motion.img
  src="https://img.freepik.com/premium-photo/anime-programmer-working-code_1282444-264422.jpg"
  alt="profile image"
  className="w-96  h-96 rounded-3xl border border-stone-900"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-10 flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-6xl tracking-tighter font-bold  text-sky-400"
            >
              Pyae Bhone Khant
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/PBK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mb-10 rounded-full bg-white p-4 text-sm text-stone-800"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
