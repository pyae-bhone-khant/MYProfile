import { FaFacebook, FaGithub, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          aria-label="Home"
          className="font-serif text-4xl font-bold text-white"
        >
          Pyae Bhone Khant 
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
         href="https://www.linkedin.com/in/pyae-bhone-naing-b87292387"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/pyae-bhone-khant"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/share/1ERWwBhj1a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://t.me/Pyae_123445"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
