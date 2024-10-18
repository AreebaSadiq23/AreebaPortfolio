'use client';
import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import Sidebar from './components/Sidebar';
import HomeSection from './components/Homesection';
import About from './components/about';
import ProjectsSection from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Loader from './components/loader'; 

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the loading time if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-screen"> {/* Set height to full screen */}
      {loading && <Loader />} {/* Loader will cover the screen */}
      <div className={`flex w-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Sidebar />
        <div className="w-full">
          <HomeSection />
          <About />
          <ProjectsSection />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
