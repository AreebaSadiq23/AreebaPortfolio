"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaGithub, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8 max-w-screen-2xl mx-auto">
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
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

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce-Website",
    description:
    "I have designed and developed this e-commerce website using Next.js and Tailwind CSS, ensuring a modern UI/UX with full responsiveness. The project is optimized for fast performance and a smooth user experience. It includes product listing, a search feature, a wishlist system, a cart system, and an interactive UI. Additionally, Sanity CMS is integrated for efficient and dynamic content management, making the website scalable and easy to update. This project highlights a powerful, efficient, and user-friendly approach to e-commerce solutions.",
    language: "Next.js and Tailwind CSS",
    image: "/project4.png",
    githubUrl: "https://github.com/AreebaSadiq23/e-commerce-web-project.git",
    liveUrl: "https://e-commerce-web-project-one.vercel.app/",
  },
  {
    id: 2,
    name: "Blog-Website",
    description:
    "A fast and responsive blog website built with Next.js and styled using Tailwind CSS. It includes a homepage with recent blog posts, post pages, comment sections. The website provides a smooth, mobile-first user experience with modern UI elements.",
    language: "Nextjs and TailwindCSS",
    image: "/blog.jpeg",
    githubUrl: "https://github.com/AreebaSadiq23/nextjs-blog-web.git",
    liveUrl: "https://nextjs-blog-web-theta.vercel.app/",
  },
  {
    id: 3,
    name: "Roamstay-website",
    description:
      "This is a Roamstay-web built using HTML, CSS, and Typescript. It is a responsive web application that looks great on all devices.",
    language: "HTML, CSS and JavaScript",
    image: "/project1.jpg",
    githubUrl: "https://github.com/AreebaSadiq23/Booking-web.git",
    liveUrl: "https://booking-web-jet.vercel.app",
  },
  {
    id: 4,
    name: "Education-Website",
    description:
      "This is an Education-website built using Next.js and Tailwind CSS. It is a responsive web application that looks great on all devices.",
    language: "Nextjs and TailwindCSS",
    image: "/project2.png",
    githubUrl: "https://github.com/AreebaSadiq23/nextjs-project-educa-web.git",
    liveUrl: "https://education-website-brown.vercel.app/",
  },
  {
    id: 5,
    name: "Cake-Heaven Website",
    description:
      "This is an Cake Heaven-website built using Next.js and  CSS. It is a responsive web application that looks great on all devices.",
    language: "NextJS and CSS",
    image: "/project3.png",
    githubUrl: "https://github.com/AreebaSadiq23/Cake-Haven-web.git",
    liveUrl: "https://cake-haven-web.vercel.app/",
  },
  {
    id: 6,
    name: "Flower-Website",
    description:
      "This is a Flower Website using Next.js and Tailwind CSS. It is a responsive web application that looks great on all devices.",
    language: "Next.js and Tailwind CSS",
    image: "/project5.jpg",
    githubUrl: "https://github.com/AreebaSadiq23/Flower_Shop_Website.git",
    liveUrl: "https://flower-shop-website-ykeb.vercel.app/",
  },
  {
    id: 7,
    name: "Carvilla-Website",
    description:
      "This is a Carvilla website built using HTML, CSS, and TypeScript. It is a responsive web application that looks great on all devices.",
    language: "HTML, CSS and TypeScript",
    image: "/project6.jpg",
    githubUrl: "https://github.com/AreebaSadiq23/Carvilla-website.git",
    liveUrl: "https://carvilla-website.vercel.app",
  },
];

const ProjectsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
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
    <section
      id="projects"
      className="max-w-screen-2xl mx-auto mt-24 mb-16 bg-gray-900"
    >
      <DecorativeCircles />
      <h2
        data-aos="zoom-in"
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-8"
      >
        My Projects
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 md:ml-14 mb-9 px-4 sm:px-6">
          <h3
            data-aos="zoom-in"
            className="text-3xl sm:text-4xl md:text-9xl font-bold font-mono text-white mb-4"
          >
            0{id}
          </h3>
          <h4
            data-aos="zoom-in"
            className="text-lg md:text-4xl text-white mb-4"
          >
            {name}
          </h4>
          <p
            data-aos="zoom-in"
            className="text-gray-400 text-base sm:text-lg md:text-xl mb-4"
          >
            {description}
          </p>
          <p
            data-aos="zoom-in"
            className="text-sm sm:text-base md:text-lg text-teal-600 font-normal mb-4"
          >
            {language}
          </p>
          <div className="my-2 border-t border-gray-500 w-full"></div>
          <div className="flex space-x-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 border-gray-500 hover:border-teal-400 transition-colors duration-300 rounded-full p-3"data-aos="fade-left"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 border-gray-500 hover:border-teal-400 transition-colors duration-300 rounded-full p-3"data-aos="fade-left"
            >
              <FaLink size={24} />
            </a>
          </div>
          <DecorativeDots />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div
            data-aos="zoom-in"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 bg-gray-700 p-4 flex justify-center items-center overflow-hidden"
          >
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
              className="text-white bg-slate-600 hover:bg-slate-700 rounded-full p-2 md:p-3 border-2 border-gray-500 hover:border-gray-400"data-aos="zoom-in"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-slate-600 hover:bg-slate-700 rounded-full p-2 md:p-3 border-2 border-gray-500 hover:border-gray-400"data-aos="zoom-in"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
