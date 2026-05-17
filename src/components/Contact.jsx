import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="py-12 border-t border-neutral-800/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* HEADER */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="section-title text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-10 lg:mb-12 text-center lg:text-left"
        >
          Contact Me
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT SIDE */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            className="card lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between items-start gap-8 rounded-3xl"
          >

            <div className="space-y-4">

              <span
                className="text-xs font-bold uppercase tracking-widest block"
                style={{ color: "var(--accent-color)" }}
              >
                Let's Build
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight max-w-xl">
                Looking for a developer who can shape both the interface and the system behind it.
              </h3>

              <p
                className="hidden sm:block text-base md:text-lg leading-relaxed font-light pt-2 max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                I enjoy working on products that need thoughtful UX, solid
                engineering decisions, and steady delivery. If you have a
                feature, MVP, or internal tool in mind, I'd love to hear about it.
              </p>
            </div>

            {/* BUTTON */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              style={{ backgroundColor: "var(--accent-color)" }}
            >
              {/* MOBILE */}
              <span className="sm:hidden text-xl">✉️</span>

              {/* DESKTOP */}
              <span className="hidden sm:flex items-center gap-2">
                <span>Start a conversation</span>
                <span className="text-xl font-light">↗</span>
              </span>
            </a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            className="card lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-row lg:flex-col justify-center gap-4 rounded-3xl"
          >

            {/* LOCATION */}
            <div className="flex-1 flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">

              <div
                className="text-2xl"
                style={{ color: "var(--accent-color)" }}
              >
                📍
              </div>

              {/* HIDE TEXT ON MOBILE */}
              <div className="hidden sm:flex flex-col">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Location
                </span>

                <span
                  className="text-base font-medium mt-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {CONTACT.address}
                </span>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex-1 flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">

              <div
                className="text-2xl"
                style={{ color: "var(--accent-color)" }}
              >
                📞
              </div>

              {/* HIDE TEXT ON MOBILE */}
              <div className="hidden sm:flex flex-col">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Phone
                </span>

                <span
                  className="text-base font-medium tracking-wide mt-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {CONTACT.phoneNo}
                </span>
              </div>
            </div>

            {/* EMAIL */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex-1 flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[--accent-color]/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >

              <div
                className="text-2xl group-hover:scale-110 transition-transform duration-300"
                style={{ color: "var(--accent-color)" }}
              >
                ✉️
              </div>

              {/* HIDE TEXT ON MOBILE */}
              <div className="hidden sm:flex flex-col">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Email
                </span>

                <span
                  className="text-base font-medium mt-0.5 group-hover:underline decoration-1"
                  style={{ color: "var(--text-primary)" }}
                >
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