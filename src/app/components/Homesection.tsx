import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-6 md:mt-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 md:w-3 md:h-3 bg-teal-600 rounded-full animate-bounce ${
            index % 3 === 1 ? "delay-200" : index % 3 === 2 ? "delay-400" : ""
          }`}
        />
      ))}
    </div>
  );
};

const DecorativeCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`absolute bg-teal-600 rounded-full opacity-30 animate-float ${
            index === 0
              ? "w-16 h-16 md:w-32 md:h-32 animation-delay-1000"
              : index === 1
              ? "w-24 h-24 md:w-48 md:h-48 opacity-20 animation-delay-500"
              : index === 2
              ? "w-12 h-12 md:w-24 md:h-24 opacity-40 animation-delay-1500"
              : "w-20 h-20 md:w-36 md:h-36 animation-delay-2000"
          }`}
        ></div>
      ))}
    </div>
  );
};

const HomeSection: React.FC = () => {
  return (
    <div className="relative h-screen">
      <DecorativeCircles />
      <div
        id="home"
        className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-900 p-4 md:p-6"
      >
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4 relative z-10 md:ml-24 mt-16 md:mt-0">
          <h2 className="text-lg md:text-3xl lg:text-4xl text-white animate-fadeIn">
            Frontend Developer
          </h2>
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-slate-400 font-bold animate-fadeIn animate-delay-200">
            Hi I&apos;m <br /> <span className="text-teal-600">Areeba Sadiq</span>
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl max-w-xs md:max-w-md text-gray-50 font-mono animate-fadeIn animate-delay-400">
            I create beautiful and functional web applications. Let&apos;s bring your ideas to life!
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/AreebaSadiq23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full hover:bg-gray-400 transition duration-300 hover:scale-105"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/areeba-sadiq-05a499315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full hover:bg-gray-400 transition duration-300 hover:scale-105"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
          <DecorativeDots />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 relative z-10">
          <div className="relative w-36 h-36 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg flex justify-center items-center animate-bounceIn">
            <Image
              src="/img1.png"
              alt="Profile"
              className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
              width={600}
              height={600}
            />
            <div className="absolute inset-0 border-2 md:border-4 border-dashed border-teal-600 rounded-full animate-spin-slow pointer-events-none"></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-cover bg-center opacity-30 animation-background"></div>
      </div>
    </div>
  );
};

export default HomeSection;
