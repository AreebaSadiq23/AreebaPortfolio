import React from "react";

const DownloadCVButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Areeba_Sadiq_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center mt-4">
      <button className="relative flex items-center border-2 border-teal-600 rounded-full px-6 py-2 bg-transparent cursor-pointer transition-all duration-400 group overflow-hidden" onClick={handleDownload}>
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 relative transition-all duration-400 group-hover:scale-110">
          <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
          </svg>
        </span>
        <span className="ml-3 text-white text-lg font-semibold transition-all duration-400 group-hover:text-indigo-300">Download CV</span>
        <style jsx>{`
          button {
            font-family: Arial, Helvetica, sans-serif;
          }
          button:active span {
            animation: pulse 1s forwards;
          }
          @keyframes pulse {
            0% {
              scale: 0.95;
              box-shadow: 0 0 0 0 rgba(255,255,255,0.7);
            }
            70% {
              scale: 1;
              box-shadow: 0 0 0 16px rgba(255,255,255,0);
            }
            100% {
              scale: 0.95;
              box-shadow: 0 0 0 0 rgba(255,255,255,0);
            }
          }
        `}</style>
      </button>
    </div>
  );
};

export default DownloadCVButton; 