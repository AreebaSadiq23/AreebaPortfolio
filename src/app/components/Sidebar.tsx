"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaDiscord } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 flex items-center justify-between w-full max-w-screen-2xl px-4">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto md:h-12"
            height={500}
            width={500}
          />
        </div>

        <button
          className="p-3 flex flex-col items-center"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <div
            className={`h-1 w-8 bg-white mb-1 transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-white mb-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-white mb-1 transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-black bg-opacity-50 backdrop-blur-lg text-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 flex flex-col justify-between`}
      >
        {/* Navigation */}
        <ul className="text-left mt-20 space-y-8 md:space-y-6">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Services", link: "/service" },
            { name: "Projects", link: "/projects" },
            { name: "Contact", link: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={toggleSidebar}
                className="text-3xl md:text-5xl text-gray-300 transition-all duration-300 hover:text-cyan-400 block text-center"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="absolute bottom-10 right-1/2 transform translate-x-1/2 text-center">
          <p className="text-2xl md:text-3xl text-gray-500 mb-3">
            Follow me on <span className="text-cyan-400 text-4xl">|</span>
          </p>
          <div className="flex justify-center space-x-6 text-3xl md:text-4xl">
            <a
              href="https://github.com/AreebaSadiq23"
              target="_blank"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.com/users/1253033429021364279"
              target="_blank"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
