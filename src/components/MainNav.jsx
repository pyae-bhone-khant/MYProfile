import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Technologies", "Projects", "Contact"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

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
        const element = document.getElementById(item.toLowerCase());
        
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
            setActiveTab(item);
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
    // မျက်နှာပြင်အလယ်မှာ အနေတော် အရွယ်အစား ဖြစ်စေဖို့ top-6 နဲ့ px-4 ပြန်ညှိထားပါတယ်
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">
      {/* UI ပြင်ဆင်ချက် -
        - px-2 py-1.5 နဲ့ အမြင့်/အကျယ်ကို အလတ်စား (Medium) ပြန်လုပ်ထားပါတယ်
        - gap-1 ပဲ ထားပြီး ခလုတ်တွေ စနစ်တကျ ကပ်နေအောင် စီစဉ်ထားပါတယ်
      */}
      <nav className="flex items-center gap-1 bg-[#090d16]/70 backdrop-blur-md border border-gray-800/60 px-2 py-1.5 rounded-full shadow-xl">
        {navItems.map((item) => {
          const isActive = activeTab === item;
          return (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              // w-24 သို့မဟုတ် w-28 ပေးခြင်းဖြင့် Item တိုင်းရဲ့ Width ကို ကွက်တိ ညီညာစေပါတယ်
              className={`relative w-24 md:w-28 py-2 text-xs md:text-sm font-medium text-center rounded-full transition-colors duration-300 z-10 whitespace-nowrap ${
                isActive ? "text-black" : "text-stone-400 hover:text-white"
              }`}
            >
              {item}
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
    </div>
  );
}