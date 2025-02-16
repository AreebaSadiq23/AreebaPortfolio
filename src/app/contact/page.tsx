"use client";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineArrowUp,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-600" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
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

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const [borderColor, setBorderColor] = useState("#4fd1c5");

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor((prevColor) =>
        prevColor === "#4fd1c5" ? "#81e6d9" : "#4fd1c5"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="max-w-screen-2xl mx-auto mt-24 mb-16 bg-gray-900"

    >
      <DecorativeCircles />

      <h2
        data-aos="zoom-in"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-12"
      >
        Contact Now!
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start px-6 space-y-8 md:space-y-0">
        {/* Contact Info */}
        <div className="contact-info flex-1 p-8 mb-8 md:mb-0 flex flex-col justify-center md:mt-12">
          <div className="info text-gray-400">
            <p data-aos="zoom-in" className="mb-6 flex items-center">
              <span
                style={{
                  border: `2px solid ${borderColor}`,
                  borderRadius: "1rem",
                  animation: "borderAnimation 1s infinite alternate",
                }}
                className="flex items-center justify-center w-16 h-16 bg-gray-700 mr-3"
              >
                <AiOutlineEnvironment className="text-teal-500 text-4xl" />
              </span>
              <span>
                <strong>Location:</strong>
                <br />
                <span className="text-md text-cyan-500 font-mono">
                  Karachi, Pakistan
                </span>
              </span>
            </p>
            <p className="mb-6 flex items-center" data-aos="zoom-in">
              <span
                style={{
                  border: `2px solid ${borderColor}`,
                  borderRadius: "1rem",
                  animation: "borderAnimation 1s infinite alternate",
                }}
                className="flex items-center justify-center w-16 h-16 bg-gray-700 mr-3"
              >
                <AiOutlineMail className="text-teal-500 text-4xl" />
              </span>
              <span>
                <strong>Email:</strong>
                <br />
                <span className="text-md text-cyan-500  font-mono">
                  areebasadiq96@gmail.com
                </span>
              </span>
            </p>
          </div>
          <DecorativeDots />
        </div>

        {/* Contact Form */}
        <div
          className="contact-form flex-1 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg mx-auto w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto lg:h-[600px] xl:h-[700px]"
          data-aos="zoom-in"
        >
          <h1 className="text-base sm:text-3xl md:text-5xl font-mono mb-4 text-teal-600 text-center mt-2">
            Let&apos;s work together
          </h1>
          <h2 className="text-sm sm:text-lg mb-4 text-gray-400 text-center">
            Get in touch with us so we can work together to create something
            incredible!
          </h2>
          <form>
            {/* First Name & Last Name */}
            <div className="form-group mb-4 flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  required
                  className="w-full lg:mt-6 text-white border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-700 placeholder-gray-400 hover:border-teal-500 hover:shadow-lg"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  required
                  className="w-full lg:mt-6 text-white border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-700 placeholder-gray-400 hover:border-teal-500 hover:shadow-lg"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="form-group mb-4 flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full lg:mt-6 text-white border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-700 placeholder-gray-400 hover:border-teal-500 hover:shadow-lg"
                />
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full lg:mt-6 text-white border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-700 placeholder-gray-400 hover:border-teal-500 hover:shadow-lg"
                />
              </div>
            </div>

            {/* Select Service */}
            <div className="form-group mb-4">
              <select
                id="service"
                name="service"
                required
                className="w-full lg:mt-6 border border-gray-300 rounded p-3 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-teal-500 hover:shadow-lg"
              >
                <option value="" disabled selected>
                  Select a Service
                </option>
                <option value="frontend">Frontend Developer</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="graphic">Graphic Designing</option>
                <option value="webdesign">Responsive Web Design</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group mb-4">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full lg:mt-6 text-white border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-700 placeholder-gray-400 hover:border-teal-500 hover:shadow-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[200px] bg-cyan-700 text-white py-3 px-6 rounded-lg border border-cyan-500 flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg"
            >
              <AiOutlineArrowUp size={20} className="mr-2" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes borderAnimation {
          0% {
            border-color: #4fd1c5;
          }
          100% {
            border-color: #81e6d9;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
