'use client';
import React, { useEffect, useState } from 'react'; 
import HomeSection from './components/Homesection';
import Loader from './components/loader'; 
import Footer from './components/Footer';

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
        <div className="w-full">
          <HomeSection />
          <Footer />
        
        </div>
      </div>
    </div>
  );
}
