'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Service = {
  title: string;
  description: string;
  icon: string;
  image: string;
};

type Services = {
  [K in "Web Developer" | "Web Designer" | "AI Developer" | "UI/UX Designer"]: Service;
};

const services: Services = {
  "Web Developer": {
    title: "Web Developer",
    description: "Creating scalable and dynamic web apps with React, Next.js, and APIs.",
    icon: "💻",
    image: "/dev.png",
  },
  "Web Designer": {
    title: "Web Designer",
    description: "Crafting responsive and beautiful websites that match your brand.",
    icon: "✒️",
    image: "/desgin.png",
  },
  "AI Developer": {
    title: "Agentic AI Developer",
    description: "Integrating smart AI tools into web experiences using APIs and custom agents.",
    icon: "🤖",
    image: "/ai.png",
  },
  "UI/UX Designer": {
    title: "UI/UX Designer",
    description: "Designing modern, user-friendly interfaces using Figma and design systems.",
    icon: "🖌️",
    image: "/ui.png",
  },
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<keyof Services>("Web Developer");
  const current = services[activeService];

  return (
    <section className="py-16 px-4 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 mt-10">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">My Services</h2>
          </div>
          <button className="group cursor-pointer relative cursor-default w-[120px] h-[60px] bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] text-white whitespace-nowrap flex flex-wrap rounded-lg overflow-hidden">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">Services</span>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.9s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.85s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.35s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[3.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.75s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[3.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.8s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.9s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent delay-0"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.85s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[0.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[1.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.7s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.9s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.75s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.8s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.7s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[0.85s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.7s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[1.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[0.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.35s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.8s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.75s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.35s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.35s]"></div>
          </button>
        </div>

        {/* Subheading */}
        <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl">
          I offer a wide range of design and development<br /> services to bring your vision to life.
        </p>

        {/* Fancy Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {Object.keys(services).map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service as keyof Services)}
              className={`relative cursor-pointer py-2.5 px-6 text-center font-barlow text-sm uppercase rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 overflow-hidden ${activeService === service
                  ? 'text-white border border-blue-400 shadow-md'
                  : 'text-gray-300 border border-gray-600 hover:text-white hover:border-blue-500'
                }`}
            >
              <span className="relative z-20">{service}</span>
              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/10 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
              <span className="w-1/2 transition-all duration-300 block border-blue-300 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
              <span className="w-1/2 transition-all duration-300 block border-blue-300 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
              <span className="w-1/2 transition-all duration-300 block border-blue-300 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
              <span className="w-1/2 transition-all duration-300 block border-blue-300 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
            </button>
          ))}
        </div>

        {/* Detailed Section */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          {/* Left Content */}
          <div className="space-y-5">
            <div className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl shadow-md">
              {current.icon}
            </div>
            <h3 className="text-2xl font-semibold">{current.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{current.description}</p>

            {/* Fancy CTA Button */}
            <button
              className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
            >
              <span className="relative z-20">Let&apos;s Connect</span>
              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              width={400} height={300}
              src={current.image}
              alt={current.title}
              className="w-full max-w-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
