import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay ကို ပိုလျှော့လိုက်လို့ တစ်ခုနဲ့တစ်ခု ပိုကပ်သွားပါမယ်
            delayChildren: 0.2
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, x: -30 }, // အကွာအဝေးကို -30 ထိ ထပ်လျှော့ထားပါတယ် (ပိုငြိမ်သွားအောင်)
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
};

const About = () => {
    return (
        <div className="pb-4 mt-10 md:mt-20  pl-10 lg:mb-16">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About me</motion.h2>
            <div className="flex flex-wrap lg:flex-row-reverse">
                <motion.div
                 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=" lg:w-1/2 w-full h-auto px-8 py-4 border border-gray-700  bg-gray-800 space-y-4 rounded-lg">
                    <h1 className=" text-2xl font-semibold text-purple-400/70">How I work</h1>
                    {/* <p className="line-height-3">I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a year of professional experience, I have worked with a variety of technologies, including React, Next.js, PHP, Laravel and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p> */}
                    <p className="leading-relaxed text-gray-400 text-lg">
                        I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a year of professional experience, I have worked with a variety of technologies, including React, Next.js, PHP, Laravel and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-1/2 bg-slate-700 p-4 rounded-lg" >
                            <h1 className=" text-sm font-semibold text-purple-400/70">Strength</h1>
                            <h3 className="text-white/60">Turning messy ideas into clear product flows.</h3>
                        </div>
                        <div className="w-1/2 bg-slate-700 p-4 rounded-lg">
                            <h1 className=" text-sm font-semibold text-purple-400/70">Focus</h1>
                            <h3 className="text-white/60">Fast interfaces, practical backends, and clean handoff.</h3>
                        </div>
                    </div>
                </motion.div>
                <div className=" flex flex-col items-center lg:w-1/2">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center lg:p-8">
                        <motion.img
                            src={aboutImage}
                            alt="profile image"
                            className="w-96 h-auto rounded-3xl border border-gray-700"
                            initial={{ x: -50, opacity: 0 }} // Image ကိုလည်း x offset လျှော့ထားပါတယ်
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;