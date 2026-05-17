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
          <motion.div  
           variants={childVariants}
           className="inline-flex items-center gap-2.5 px-5 py-2.5   shadow-lg  shadow-[#00cce6]/30 rounded-full border border-[#00cce6]/30 bg-[#04121a] shadow-[inset_0_1px_12px_rgba(0,204,230,0.05)]">
      {/* Sparkle Icon */}
      <svg
        className="w-4 h-4 text-[#00cce6]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 21L8.188 15.904L3.102 15L8.188 14.096L9 9L9.813 14.096L14.898 15L9.813 15.904Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.071 4.929l-.395 2.449-.396-2.449-2.449-.395 2.449-.396.396-2.449.395 2.449 2.449.396-2.449.395z"
        />
      </svg>

      {/* Text */}
      <span className="text-sm font-normal tracking-wide text-[#00cce6] font-['Inter']">
        Available for product-focused full-stack work
      </span>
    </motion.div>
            <motion.span
              variants={childVariants}
              className="bg-linear-to-r mt-4 from-gray-300 to-gray-400 bg-clip-text text-7xl tracking-tight text-transparent"
            >
              Building polished web experiences with full-stack depth.
            </motion.span>
        
            <div className="flex flex-col mt-6">
            <motion.h2
              variants={childVariants}
              className=" nt-8 text-2xl tracking-tighter font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            > 
            <div className="flex gap-4">
           <span>PYAE </span>  <span>BHONE</span> <span>KHANT</span> <span>.</span> <span>FULL</span> <span>STACK</span> <span>DEVELOPER</span>
            </div>
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-4 text-xl leading-relaxed tracking-tighter text-gray-300"
            >
            I build responsive, scalable web apps with React, Next.js, Node.js, and MySQL. I care about clean product experiences, reliable backend architecture, and turning ideas into polished features that people actually enjoy using.
            </motion.p>
            </div>
            
            {/* Card အုပ်စု - ဒီနေရာမှာ အကုန်လုံး တစ်ပြိုင်တည်း ပေါ်စေချင်ရင် containerVariants ထဲက stagger ကို လျှော့သုံးတာ ပိုကောင်းပါတယ် */}
            <motion.div variants={childVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                href="/PyaeBhoneKhant.pdf"
                className="group relative overflow-hidden text-2xl rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                <span className="relative z-10">9+ <br /> Shipped projects</span>
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/PyaeBhoneKhant.pdf"
                className="group relative overflow-hidden text-2xl rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                <span className="relative z-10">2 <br /> Product teams</span>
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/PyaeBhoneKhant.pdf"
                className="group relative overflow-hidden text-2xl rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                <span className="relative z-10">Full stack <br /> UI to APIs</span>
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            <motion.div variants={childVariants} className="flex gap-2">
              <a
                href="/PyaeBhoneKhant.pdf"
                className="mb-10  flex items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-blue-600 p-4 text-2xl text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                <span>Explore Project</span>
                <MoveUpRight />
              </a>
              <a
                href="https://github.com/pyae-bhone-khant"
                target="_blank"
                rel="noopener noreferrer"
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