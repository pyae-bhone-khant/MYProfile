import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Icon Layout အတွက် Lucide React ကို သုံးထားပါတယ် (npm i lucide-react)
import { Home, User, Code, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: User },
  { name: "Technologies", icon: Code },
  { name: "Experience", icon: Briefcase },
  { name: "Projects", icon: Briefcase },
  { name: "Contact", icon: Mail },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const { isDark, toggleTheme } = useTheme();

  // Click နှိပ်ရင် Smooth Scroll ဆင်းသွားဖို့
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.innerHeight / 3;

      for (const item of navItems) {
        const element = document.getElementById(item.name.toLowerCase());

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
            setActiveTab(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* 
      Responsiveness ပြင်ဆင်မှု -
      - Mobile (Default): ဘယ်ဘက် (သို့) ညာဘက်ဘေးမှာ ကပ်ထားမယ် (fixed left-4 top-1/2 -translate-y-1/2)
      - Desktop (md:): အပေါ်အလယ်မှာ ပြန်ပြမယ် (md:top-6 md:left-0 md:right-0 md:translate-y-0)
    */
    <div className="fixed z-50 left-4 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center md:top-6 md:left-0 md:right-0 md:translate-y-0 md:flex-row md:px-4 gap-3 md:gap-2">
      
      {/* 
        Nav Layout ပြင်ဆင်မှု -
        - Mobile: flex-col (ဒေါင်လိုက်)၊ ပတ်ပတ်လည် p-3 
        - Desktop (md:): flex-row (အလျားလိုက်)၊ px-2 py-1.5
      */}
      <nav className={`flex flex-col md:flex-row items-center gap-3 md:gap-1 backdrop-blur-md border p-3 md:px-2 md:py-1.5 rounded-full shadow-xl transition-colors duration-500 ${
        isDark
          ? "bg-[#090d16]/70 border-gray-800/60"
          : "bg-white/80 border-gray-200/80"
      }`}>
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => handleScrollToSection(item.name)}
              /* 
                Button Size ညှိနှိုင်းမှု -
                - Mobile: icon သီးသန့်မို့ width/height တူတူပဲ ပေးထားပါတယ် (w-11 h-11)
                - Desktop (md:): စာသားပြန်ပြမှာမို့ အလျားလိုက် width ပြန်ပေးထားပါတယ် (md:w-28 md:h-auto)
              */
              className={`relative w-11 h-11 md:w-28 md:h-auto md:py-2 flex items-center justify-center text-xs md:text-sm font-medium rounded-full transition-colors duration-300 z-10 group`}
            >
              {/* Mobile မှာပြမယ့် Icon */}
              <span className="block md:hidden">
                <Icon
                  size={20}
                  className={`${
                    isActive
                      ? "text-black"
                      : isDark
                      ? "text-stone-400 group-hover:text-white"
                      : "text-gray-500 group-hover:text-gray-900"
                  }`}
                />
              </span>

              {/* Desktop မှာပြမယ့် စာသား (Text) */}
              <span
                className={`hidden md:block whitespace-nowrap ${
                  isActive
                    ? "text-black"
                    : isDark
                    ? "text-stone-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </span>

              {/* Tooltip - Mobile မှာ Icon ပေါ်တင်ရင် နာမည်လေး ပြပေးဖို့ (Optional) */}
              <span
                className={`absolute left-14 text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 block md:hidden shadow-md border ${
                  isDark
                    ? "bg-gray-900 text-white border-gray-800"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                {item.name}
              </span>

              {/* Framer Motion Active Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#00d8f6] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Day / Night Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle day/night theme"
        className={`relative w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-md border shadow-xl transition-all duration-500 group ${
          isDark
            ? "bg-[#090d16]/70 border-gray-800/60 hover:border-yellow-500/60"
            : "bg-white/80 border-gray-200/80 hover:border-blue-400/60"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Sun
                size={20}
                className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200"
              />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Moon
                size={20}
                className="text-blue-500 group-hover:text-blue-400 transition-colors duration-200"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow ring on hover */}
        <span
          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isDark
              ? "ring-2 ring-yellow-400/40 shadow-[0_0_12px_rgba(250,204,21,0.3)]"
              : "ring-2 ring-blue-400/40 shadow-[0_0_12px_rgba(96,165,250,0.3)]"
          }`}
        />
      </button>
    </div>
  );
}