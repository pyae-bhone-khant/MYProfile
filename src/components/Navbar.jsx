import { FaFacebook, FaGithub, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          aria-label="Home"
          className="font-serif text-sm font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
        >
         <span className="text-white"> Hi, I'm </span> <span className="ml-2"> Pyae Bhone Khant </span> <br />
          <span className="text-gray-400"> Full-stack developer crafting thoughtful web products.</span>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a
         href="https://www.linkedin.com/in/pyae-bhone-naing-b87292387"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/pyae-bhone-khant"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/share/1ERWwBhj1a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://t.me/Pyae_123445"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
