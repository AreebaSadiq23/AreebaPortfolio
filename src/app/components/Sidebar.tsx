"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FiAlignRight, FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
          className="p-3 flex items-center justify-center"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? (
            <FiX className="text-white text-4xl" />
          ) : (
            <FiAlignRight className="text-white text-4xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-lg text-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 flex flex-col justify-between`}
      >
        {/* Navigation */}
        <ul className="text-left mt-20 space-y-8 md:space-y-6 ml-24">
          <li>
            <Link
              href="/"
              onClick={toggleSidebar}
              className="text-3xl md:text-5xl text-gray-300 transition-all duration-300 hover:text-cyan-700 block lg:mt-10"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={toggleSidebar}
              className="text-3xl md:text-5xl text-gray-300 transition-all duration-300 hover:text-cyan-700 block lg:mt-10"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              onClick={toggleSidebar}
              className="text-3xl md:text-5xl text-gray-300 transition-all duration-300 hover:text-cyan-700 block lg:mt-10"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              onClick={toggleSidebar}
              className="text-3xl md:text-5xl text-gray-300 transition-all duration-300 hover:text-cyan-700 block lg:mt-10"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggleSidebar}
              className="text-3xl md:text-5xl text-gray-300 transition-all duration-300 hover:text-cyan-700 block lg:mt-10"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Social Icons */}
        <div className="absolute bottom-10 right-1/4 transform translate-x-1/2 text-center ml-28">
          <p className="text-2xl md:text-3xl text-gray-500 mb-3">
            Follow me on <span className="text-cyan-400 text-4xl">|</span>
          </p>
          <div className="flex justify-center space-x-6 text-3xl md:text-4xl">
            <a
              href="https://github.com/AreebaSadiq23"
              target="_blank"
              className="text-gray-300 hover:text-cyan-800 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.com/users/1253033429021364279"
              target="_blank"
              className="text-gray-300 hover:text-cyan-800 transition-all duration-300"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.linkedin.com/in/areeba-sadiq-934a09351"
              target="_blank"
              className="text-gray-300 hover:text-cyan-800 transition-all duration-300"
            >
              <FaLinkedin />
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
