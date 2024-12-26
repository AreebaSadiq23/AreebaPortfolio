import React from "react";
import Image from "next/image";

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

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="p-4 sm:p-6 md:p-10 lg:p-16 bg-gray-900 max-w-screen-2xl mx-auto mt-10 mb-6"
    >
      <DecorativeCircles />
      <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2 text-base sm:text-lg md:text-xl lg:text-xl text-center md:text-left mb-8 md:mb-0 space-y-4">
          <p className="text-gray-400 mx-4 md:mx-8 mt-5">
            Hello! I&apos;m Areeba, a student of Generative AI and a passionate
            Frontend Developer who loves crafting beautiful and functional web
            applications. With a solid foundation in HTML, CSS, and JavaScript,
            I enjoy turning complex problems into simple and intuitive designs.
            My journey in web development started with curiosity, and over time,
            it will transform into a successful career.
          </p>
          <p className="text-gray-400 mx-4 md:mx-8">
            I am currently learning Next.js and Tailwind CSS to further enhance
            my web development skills. I enjoy working with modern technologies
            and preparing myself for new challenges. I am striving to improve
            the learning process through my experiences so that I can create
            modern and efficient web applications. My desire is to provide
            creative solutions by practically applying my skills that enhance
            user experiences.
          </p>
          <p className="text-gray-400 mx-4 md:mx-8">
            Looking for a Frontend Developer? Let&apos;s connect on LinkedIn!
          </p>
          <DecorativeDots />
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center">
            <Image
              src="/html.png"
              alt="HTML Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/css.png"
              alt="CSS Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/javascript.png"
              alt="JavaScript Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/tailwind.png"
              alt="Tailwind CSS Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/next.png"
              alt="Next.js Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/ts.png"
              alt="TypeScript Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-40 lg:h-40 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/git.png"
              alt="TypeScript Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/figma.png"
              alt="TypeScript Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/github.png"
              alt="TypeScript Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
