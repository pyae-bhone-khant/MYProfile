import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="py-12 border-t border-neutral-800/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Section Header */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="section-title text-4xl font-bold font-['Space_Grotesk'] mb-12"
        >
          Contact Me
        </motion.h2>

        {/* Reconstructed Two-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Premium Pitch Card (Spans 7 out of 12 columns) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            className="card lg:col-span-7 p-10 md:p-12 flex flex-col justify-between items-start gap-8"
          >
            <div className="space-y-4">
              <span 
                className="text-xs font-bold uppercase tracking-widest block"
                style={{ color: "var(--accent-color)" }}
              >
                Let's Build
              </span>
              <h3 className="text-2xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight max-w-xl">
                Looking for a developer who can shape both the interface and the system behind it.
              </h3>
              <p 
                className="text-base md:text-lg leading-relaxed font-light pt-2 max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                I enjoy working on products that need thoughtful UX, solid engineering decisions, and 
                steady delivery. If you have a feature, MVP, or internal tool in mind, I'd love to hear about it.
              </p>
            </div>

            {/* Custom Interactive Action Button */}
            <a 
              href={`mailto:${CONTACT.email}`}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "var(--accent-color)" }}
            >
              <span>Start a conversation</span>
              <span className="text-xl font-light">↗</span>
            </a>
          </motion.div>

          {/* Right Column: Structured Context Rows Container (Spans 5 out of 12 columns) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            className="card lg:col-span-5 p-8 flex flex-col justify-center gap-4"
          >
            
            {/* Row 1: Location */}
            <div className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
              <div className="text-2xl" style={{ color: "var(--accent-color)" }}>
                📍
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Location
                </span>
                <span className="text-base font-medium mt-0.5" style={{ color: "var(--text-primary)" }}>
                  {CONTACT.address}
                </span>
              </div>
            </div>

            {/* Row 2: Phone */}
            <div className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
              <div className="text-2xl" style={{ color: "var(--accent-color)" }}>
                📞
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Phone
                </span>
                <span className="text-base font-medium tracking-wide mt-0.5" style={{ color: "var(--text-primary)" }}>
                  {CONTACT.phoneNo}
                </span>
              </div>
            </div>

            {/* Row 3: Email */}
            <a 
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[--accent-color]/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color: "var(--accent-color)" }}>
                ✉️
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Email
                </span>
                <span className="text-base font-medium mt-0.5 group-hover:underline decoration-1" style={{ color: "var(--text-primary)" }}>
                  {CONTACT.email}
                </span>
              </div>
            </a>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;