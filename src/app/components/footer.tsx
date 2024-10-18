import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const PortfolioFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-white">Areeba Sadiq</h2>
          <p className="text-sm">© 2024 All Rights Reserved</p>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com/AreebaSadiq23" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={30} className="hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/areeba-sadiq-05a499315" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} className="hover:text-white transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
