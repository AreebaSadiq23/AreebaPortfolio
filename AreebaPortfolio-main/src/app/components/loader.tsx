import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white animate-ping"></div>
    </div>
  );
};

export default Loader;
