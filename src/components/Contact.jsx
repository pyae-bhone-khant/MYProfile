import { motion } from "framer-motion";

import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-t border-gray-700 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -150 }}
        transition={{ duration: 0.7 }}
        className="my-10 text-center text-4xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-gray-300"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-gray-300"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b border-purple-400 text-gray-300 hover:text-white transition-colors duration-300">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
