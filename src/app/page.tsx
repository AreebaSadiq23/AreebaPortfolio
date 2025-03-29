'use client';
import React, { useEffect, useState } from 'react'; 
import Sidebar from './components/Sidebar';
import HomeSection from './components/Homesection';
import Loader from './components/loader'; 

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-screen"> 
      {loading && <Loader />} 
      <div className={`flex w-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Sidebar />
        <div className="w-full">
          <HomeSection />
        </div>
      </div>
    </div>
  );
}
