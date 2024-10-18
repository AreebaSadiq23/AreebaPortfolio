import React from 'react';

const Loader = () => {
  return (
    <div className="absolute inset-0 bg-black z-50 flex justify-center items-center">
      <div className="w-16 h-16 rounded-full bg-white animate-ping"></div>
    </div>
  );
};

export default Loader;
