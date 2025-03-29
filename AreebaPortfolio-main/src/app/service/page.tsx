'use client';
import React, { useEffect } from "react";
import { Code, Paintbrush, MonitorSmartphone, Brush } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


const services = [
  {
    number: "01",
    title: "Frontend Development",
    description: "I develop high-performance, scalable, and modern web applications using cutting-edge frontend technologies like React, Next.js, and TypeScript. My focus is on creating intuitive, fast, and responsive user interfaces that provide a seamless experience across all devices.",
    icon: <Code size={40} className="text-gray-300" />, 
  },
  {
    number: "02",
    title: "UI/UX Designing",
    description: "I specialize in crafting engaging and user-friendly designs that enhance user experience. From wireframing to prototyping, I create visually appealing interfaces that align with your brand identity and improve usability.",
    icon: <Paintbrush size={40} className="text-gray-300" />, 
  },
  {
    number: "03",
    title: "Responsive Web Design",
    description: "I ensure that websites look and function flawlessly on all screen sizes, from desktops to mobile devices. Using modern CSS frameworks and best practices, I build adaptive and accessible web pages that enhance user engagement.",
    icon: <MonitorSmartphone size={40} className="text-gray-300" />, 
  },
  {
    number: "04",
    title: "Graphic Designing",
    description: "I create stunning visual graphics, including logos, banners, and branding materials, that leave a lasting impression. My designs are tailored to reflect your brand’s personality and help in strong brand positioning.",
    icon: <Brush size={40} className="text-gray-300" />, 
  }
];

export default function ServicesSection() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: "ease-in-out",
        });
      }, []);
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mt-5"data-aos="zoom-in">My Services</h2>
        <div className="grid md:grid-cols-2 gap-8" data-aos="zoom-in">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-2 bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-mono font-bold text-white">{service.number}</span>
                {service.icon}
              </div>
              <h3 className="text-2xl font-mono  mt-2"data-aos="zoom-in">{service.title}</h3>
              <p className="text-gray-400"data-aos="zoom-in">{service.description}</p>
              <hr className="border-t border-gray-600 w-full mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}