import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-6 sm:py-8 max-w-screen-2xl mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-white">Areeba Sadiq</h2>
          <p className="text-sm">© {currentYear} All Rights Reserved</p>
        </div>

        <div className="flex space-x-4 justify-center md:justify-end">
          <a
            href="https://github.com/AreebaSadiq23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={36}
              className="hover:text-white transition duration-300"
            />
          </a>
          <a
            href="https://discord.com/users/1253033429021364279"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord
              size={40}
              className="hover:text-white transition duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/areeba-sadiq-934a09351"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={40}
              className="hover:text-white transition duration-300"
            />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
