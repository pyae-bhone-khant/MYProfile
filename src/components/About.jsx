import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="pb-4 mt-10 md:mt-20 px-4 lg:pl-10 lg:mb-16 overflow-hidden">

      {/* TITLE */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 lg:my-20 text-center text-3xl sm:text-4xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        About me
      </motion.h2>

      {/* MAIN SECTION */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-10">

        {/* TEXT SECTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            lg:w-[48%]
            w-full
            px-5 sm:px-6
            py-5
            mb-12
            border border-gray-700
            bg-gray-800/80
            space-y-5
            rounded-2xl
            self-center
          "
        >

          {/* HEADING */}
          <motion.h1
            variants={childVariants}
            className="text-2xl font-semibold text-purple-400/70"
          >
            How I work
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={childVariants}
            className="
              leading-8
              text-gray-300
              text-sm sm:text-base lg:text-lg
            "
          >
            I am a dedicated and versatile full-stack developer with a passion
            for creating efficient and user-friendly web applications.

            <br />
            <br />

            With experience building modern applications using React, Next.js,
            Node.js, Express.js, NestJS, and MySQL, I focus on writing clean,
            scalable, and maintainable code.

            <br />
            <br />

            I enjoy turning complex ideas into simple product experiences and
            collaborating with teams to ship polished digital products.

            <br />
            <br />

            Outside of coding, I enjoy exploring new technologies, improving my
            design thinking, and contributing to meaningful projects.
          </motion.p>

          {/* INFO CARDS */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >

            {/* CARD 1 */}
            <div className="w-full sm:w-1/2 bg-slate-700/70 border border-slate-600 p-4 rounded-xl">
              <h1 className="text-sm font-semibold text-purple-400/70 mb-2">
                Strength
              </h1>

              <h3 className="text-white/70 text-sm sm:text-base leading-6">
                Turning messy ideas into clear product flows.
              </h3>
            </div>

            {/* CARD 2 */}
            <div className="w-full sm:w-1/2 bg-slate-700/70 border border-slate-600 p-4 rounded-xl">
              <h1 className="text-sm font-semibold text-purple-400/70 mb-2">
                Focus
              </h1>

              <h3 className="text-white/70 text-sm sm:text-base leading-6">
                Fast interfaces, practical backends, and clean handoff.
              </h3>
            </div>

          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <div className="flex flex-col items-center lg:w-1/2 w-full">

          {/* IMAGE */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:p-0"
          >
            <motion.img
              src={aboutImage}
              alt="about image"
              className="w-72 sm:w-80 lg:w-[420px] h-auto rounded-3xl border border-gray-700 object-cover"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </motion.div>

          {/* DESKTOP EXTRA BOXES */}
          <div className="hidden lg:flex flex-col gap-4 mt-6 w-full max-w-md">

            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-4">
              <p className="text-gray-300 text-base leading-7">
                I enjoy building products that feel smooth and intuitive.
              </p>
            </div>

            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-4">
              <p className="text-gray-300 text-base leading-7">
                I care about maintainable systems and long-term scalability.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;