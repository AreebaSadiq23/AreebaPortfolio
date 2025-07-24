"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaGithub, FaLink } from "react-icons/fa";
import "aos/dist/aos.css";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
    </div>
  );
};

interface Projects {
  id: number;
  name: string;
  description: string;
  language: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Projects[] = [
  {
    id: 1,
    name: "E-Commerce-Website",
    description:
           "I have designed and developed this e-commerce website using Next.js and Tailwind CSS, ensuring a modern UI/UX with full responsiveness. The project is optimized for fast performance and a smooth user experience. It includes product listing, a search feature, a wishlist system, a cart system, and an interactive UI. Additionally, Sanity CMS is integrated for efficient and dynamic content management, making the website scalable and easy to update. This project highlights a powerful, efficient, and user-friendly approach to e-commerce solutions.",
    language: "Next.js, Sanity, Framer Motion , Tailwind CSS",
    image: "/project4.png",
    githubUrl: "https://github.com/AreebaSadiq23/e-commerce-web-project",
    liveUrl: "https://e-commerce-web-project-one.vercel.app/",
  }, 
  {
    id: 2,
    name: "Seasoned_Hip-Website",
    description:
    "Seasoned Hip is a stylish, fully responsive website built with Next.js and Tailwind CSS, delivering a sleek and modern user interface. Designed with performance and user experience in mind, the site offers clean navigation, fast loading times, and mobile-first responsiveness. The tech stack ensures scalability and maintainability, making it suitable for both brand promotion and user engagement.",
    language: "NextJS & Tailwind CSS",
    image: "/p3.png",
    githubUrl: "https://github.com/AreebaSadiq23/seasoned_hip.git",
    liveUrl: "https://seasoned-hip.vercel.app/",
  }, 
  {
    id: 3,
    name: "RIbuild-Website",
    description:
    "This project features a clean and modern UI/UX, fully responsive across all devices. Built using Next.js for robust performance and Tailwind CSS for rapid and consistent styling, the application ensures a seamless user experience with optimized structure and design best practices.",
      // "A fast and responsive blog website built with Next.js and styled using Tailwind CSS. It includes a homepage with recent blog posts, post pages, comment sections. The website provides a smooth, mobile-first user experience with modern UI elements.",
    language: "Next.js, React , Typescript and Tailwind CSS",
    image: "/p2.png",
    githubUrl: "https://github.com/AreebaSadiq23/RIBUILD_Web.git",
    liveUrl: "https://ribuild-web.vercel.app/",
  },
];

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { id, name, description, language, image, githubUrl, liveUrl } =
    projects[currentProject];

  return (
    <section id="Portfolio" className="w-auto max-w-screen-2xl mx-auto py-16 px-4 bg-gray-900">
      <h2 className="text-4xl berkshire-swash-regular sm:text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-12">
        My Projects
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 md:ml-10 mb-9">
          <h3 className="text-3xl sm:text-4xl text-white md:text-9xl font-bold font-mono text-gray-500 mb-4">
            0{id}
          </h3>
          <h4 className="text-lg md:text-4xl text-gray-100 mb-4 berkshire-swash-regular">{name}</h4>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 berkshire-swash-regular">
            {description}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-teal-600 font-normal mb-4 dancing-script">
            {language}
          </p>
          <div className="my-2 border-t border-gray-400 w-full"></div>
          <div className="flex space-x-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 border-2 border-gray-500 hover:border-teal-400 rounded-full p-3"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 border-2 border-gray-500 hover:border-teal-400 rounded-full p-3"
            >
              <FaLink size={24} />
            </a>
          </div>
          <DecorativeDots />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 bg-gray-800 p-4 flex justify-center items-center overflow-hidden">
            <Image
              src={image}
              alt={name}
              className="object-contain w-full h-full"
              height={800}
              width={800}
            />
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={handlePrevious}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 md:p-3 border-2 border-gray-500 hover:border-gray-400"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 md:p-3 border-2 border-gray-500 hover:border-gray-400"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects; 