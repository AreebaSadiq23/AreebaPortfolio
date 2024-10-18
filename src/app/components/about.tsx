import React from 'react';
import Image from 'next/image';

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

const About: React.FC = () => {
  return (
    <section id="about" className="p-6 md:p-10 bg-gray-900">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-6">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="md:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left mb-8 md:mb-0">
          <p className="text-gray-400 mx-4 md:mx-8">
            Hello! I&apos;m Areeba, a student of Generative AI and a passionate Frontend Developer who loves crafting beautiful and functional web applications. With a solid foundation in HTML, CSS, and JavaScript, I enjoy turning complex problems into simple and intuitive designs. My journey in web development started with curiosity, and over time, it will transform into a successful career.
          </p>
          <p className="mt-4 text-gray-400 mx-4 md:mx-8">
          I am currently learning Next.js and Tailwind CSS to further enhance my web development skills. I enjoy working with modern technologies and preparing myself for new challenges. I am striving to improve the learning process through my experiences, so that I can create modern and efficient web applications. My desire is to provide creative solutions by practically applying my skills that enhance user experiences.
</p>
          <DecorativeDots />
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
            <Image
              src="/html.png"
              alt="HTML Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/Css.png"
              alt="CSS Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
              width={200}
              height={200}
            />
            <Image
              src="/javascript.png"
              alt="JavaScript Skill"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover"
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
