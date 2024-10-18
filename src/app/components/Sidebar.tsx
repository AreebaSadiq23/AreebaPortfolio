"use client";
import { useState } from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="fixed top-4 left-4 z-30">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-16 w-auto md:h-12"
          height={500}
          width={500}
        />
      </div>

      {/* Animated Hamburger Icon */}
      <button
        className="fixed top-4 right-4 p-3 z-30 flex flex-col items-center"
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

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gray-800 text-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <ul className="space-y-6 md:space-y-10 mt-20 md:mt-28 text-xl md:text-2xl text-center">
          <li>
            <a
              href="#home"
              onClick={toggleSidebar}
              className="hover:text-gray-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleSidebar}
              className="hover:text-gray-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleSidebar}
              className="hover:text-gray-400 transition duration-300"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleSidebar}
              className="hover:text-gray-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
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
