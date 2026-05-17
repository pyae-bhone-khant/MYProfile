import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-12 border-t border-neutral-800/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-light tracking-wide text-center sm:text-left"
          style={{ color: "var(--text-muted)" }}
        >
          &copy; {currentYear}{" "}
          <span className="font-medium text-white font-['Space_Grotesk']">
            Pyae Bhone Khant
          </span>
          . All rights reserved.
        </motion.div>

        {/* Right Side: Status / Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold"
          style={{ color: "var(--text-muted)" }}
        >
          <span>Handcrafted with precision</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;