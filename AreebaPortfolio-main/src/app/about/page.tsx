"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="about"
      className="p-4 sm:p-6 md:p-10 lg:p-16 bg-gray-900 max-w-screen-2xl mx-auto mt-10 mb-6"
    >
      <DecorativeCircles />
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6"
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2 text-base sm:text-lg md:text-xl lg:text-xl text-center md:text-left mb-8 md:mb-0 space-y-4">
          <p data-aos="zoom-in" className="text-gray-400 mx-4 md:mx-8 mt-5">
            Hello! I&apos;m Areeba, I am a passionate Full Stack Developer
            with 1 year of experience in building modern web applications.I have
            a strong foundation in web technologies like HTML, CSS, JavaScript,
            TypeScript, and Tailwind CSS, and a solid background in back-end
            development with Node.js, Python, and databases. I specialize in
            building dynamic, user-friendly web applications from start to
            finish, ensuring the best possible user experience and seamless
            functionality.
          </p>
          <p data-aos="zoom-in" className="text-gray-400 mx-4 md:mx-8">
           With a year of hands-on experience, I have worked on various projects, 
           enhancing my technical skills and problem-solving abilities. My expertise
            includes building scalable and maintainable applications, focusing on 
            responsiveness and performance optimization.
            </p>
          <p data-aos="zoom-in" className="text-gray-400 mx-4 md:mx-8">
            In addition to my web development skills, I am currently expanding
            my knowledge in Agentic AI. I am excited to explore how artificial
            intelligence can be integrated into web applications to create
            smarter, more intuitive solutions. My exploration of Agentic AI is
            helping me understand how to create systems that not only respond to
            user input but anticipate and adapt to user needs, making
            applications more efficient and user-centric.
          </p>
          <p data-aos="zoom-in" className="text-gray-400 mx-4 md:mx-8">
            I also work with modern tools like Figma for interactive designs and
            Sanity for flexible content management. Whether it&apos;s creating
            responsive designs or optimizing back-end performance, I am always
            focused on building applications that are scalable, maintainable,
            and user-friendly.
          </p>
          <p data-aos="zoom-in" className="text-gray-400 mx-4 md:mx-8">
            As I continue to explore the potential of Agentic AI, I am eager to
            incorporate AI-driven features into my projects, pushing the
            boundaries of what&apos;s possible in web development. I&apos;m always
            learning, adapting, and collaborating on new projects to stay ahead
            of the curve in this rapidly evolving field.
          </p>

          <p data-aos="zoom-in" className="text-gray-400 mx-4 md:mx-8">
            Looking for a Web Developer? Let&apos;s connect!
          </p>
          <DecorativeDots />
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center"
          >
            <Image
              src="/html.png"
              alt="HTML Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 lg:mt-20 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/css.png"
              alt="CSS Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 lg:mt-20 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/javascript.png"
              alt="JavaScript Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 lg:mt-20  object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/tailwind.png"
              alt="Tailwind CSS Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-44 lg:mt-5 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/next.png"
              alt="Next.js Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-40 lg:mt-5 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/ts.png"
              alt="TypeScript Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-40 lg:h-48 lg:mt-5 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/git.png"
              alt="Git Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 lg:mt-5 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/figma.png"
              alt="Figma Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-36 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/github.png"
              alt="Github Skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 lg:mt-5 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/pyhton.png"
              alt="python SKill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 lg:mt-10 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/react.png"
              alt="react skill"
              data-aos="zoom-in"
              className="w-18 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-36 lg:mt-10 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/node.png"
              alt="node skill"
              data-aos="zoom-in"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-36 lg:mt-10 object-cover"
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
