import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { MoveUpRight } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
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

const Hero = () => {
  return (
    <div className="pb-4  pl-10 lg:mb-8">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className=" flex flex-col items-center lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profileImage}
              alt="profile image"
              className="w-96 h-auto rounded-3xl border border-gray-700"
              initial={{ x: 50, opacity: 0 }} // Image ကိုလည်း x offset လျှော့ထားပါတယ်
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <div className="text-center lg:text-left bg-gray-800 p-2 rounded-lg border border-gray-700">
              <p>Designing clean, responsive interfaces with React and Next.js</p>
            </div>
            <div className="text-center lg:text-left bg-gray-800 p-2 rounded-lg border border-gray-700">
              <p>Building maintainable Node.js and MySQL backends for real products</p>
            </div>
            <div className="text-center lg:text-left bg-gray-800 p-2 rounded-lg border border-gray-700">
              <p>Turning ideas into polished MVPs with strong product thinking</p>
            </div>
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
              className="pb-2 text-6xl tracking-tighter font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Pyae Bhone Khant
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r mt-8 from-gray-300 to-gray-400 bg-clip-text text-7xl tracking-tight text-transparent"
            >
              Building polished web experiences with full-stack depth.
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-gray-300"
            >
            I build responsive, scalable web apps with React, Next.js, Node.js, and MySQL. I care about clean product experiences, reliable backend architecture, and turning ideas into polished features that people actually enjoy using.
            </motion.p>
            
            {/* Card အုပ်စု - ဒီနေရာမှာ အကုန်လုံး တစ်ပြိုင်တည်း ပေါ်စေချင်ရင် containerVariants ထဲက stagger ကို လျှော့သုံးတာ ပိုကောင်းပါတယ် */}
            <motion.div variants={childVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                href="/PyaeBhoneKhant.pdf"
                className="group relative overflow-hidden text-2xl rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                <span className="relative z-10">9+ <br /> Shipped projects</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/PyaeBhoneKhant.pdf"
                className="group relative overflow-hidden text-2xl rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                <span className="relative z-10">2 <br /> Product teams</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/PyaeBhoneKhant.pdf"
                className="group relative overflow-hidden text-2xl rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                <span className="relative z-10">Full stack <br /> UI to APIs</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            <motion.div variants={childVariants} className="flex gap-2">
              <a
                href="/PyaeBhoneKhant.pdf"
                className="mb-10  flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-2xl text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                <span>Explore Project</span>
                <MoveUpRight />
              </a>
              <a
                href="/PyaeBhoneKhant(CL).pdf"
                className="mb-10  flex items-center gap-2 rounded-full bg-gray-600 hover:bg-purple-600 p-4 text-2xl text-white transition-colors duration-300"
              >  
              <span>View GitHub</span>
               <ArrowDownToLine />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;