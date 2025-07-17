import React, { useRef } from "react";

const DownloadCVButton: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "Areeba_Sadiq_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.checked = false;
      }, 1000);
    }
  };

  return (
    <div className="container">
      <label className="label">
        <input
          ref={inputRef}
          type="checkbox"
          className="input"
          onChange={handleDownload}
        />
        <span className="circle">
          <svg className="icon" viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 19L8 15M12 19L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="square"></span>
        </span>
        <span className="title">Download CV</span>
        <span className="title">Installed</span>
      </label>
      <style jsx>{`
        .container {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .label {
          background-color: transparent;
          border: 2px solid #0d9488;
          display: flex;
          align-items: center;
          border-radius: 50px;
          width: 180px;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 5px;
          position: relative;
        }
        .label::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #fff;
          width: 8px;
          height: 8px;
          transition: all 0.4s ease;
          border-radius: 100%;
          margin: auto;
          opacity: 0;
          visibility: hidden;
        }
        .label .input {
          display: none;
        }
        .label .title {
          font-size: 17px;
          color: #fff;
          transition: all 0.4s ease;
          position: absolute;
          right: 18px;
          bottom: 14px;
          text-align: center;
        }
        .label .title:last-child {
          opacity: 0;
          visibility: hidden;
        }
        .label .circle {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          background-color:#0d9488;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s ease;
          position: relative;
          box-shadow: 0 0 0 0 rgb(255, 255, 255);
          overflow: hidden;
        }
        .label .circle .icon {
          color: #fff;
          width: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
        }
        .label .circle .square {
          aspect-ratio: 1;
          width: 15px;
          border-radius: 2px;
          background-color: #fff;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
        }
        .label .circle::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-color: #0d9488;
          width: 100%;
          height: 0;
          transition: all 0.4s ease;
        }
        .label:has(.input:checked) {
          width: 57px;
          animation: installed 0.4s ease 3.5s forwards;
        }
        .label:has(.input:checked)::before {
          animation: rotate 3s ease-in-out 0.4s forwards;
        }
        .label .input:checked + .circle {
          animation:
            pulse 1s forwards,
            circleDelete 0.2s ease 3.5s forwards;
          rotate: 180deg;
        }
        .label .input:checked + .circle::before {
          animation: installing 3s ease-in-out forwards;
        }
        .label .input:checked + .circle .icon {
          opacity: 0;
          visibility: hidden;
        }
        .label .input:checked ~ .circle .square {
          opacity: 1;
          visibility: visible;
        }
        .label .input:checked ~ .title {
          opacity: 0;
          visibility: hidden;
        }
        .label .input:checked ~ .title:last-child {
          animation: showInstalledMessage 0.4s ease 3.5s forwards;
        }
        @keyframes pulse {
          0% {
            scale: 0.95;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          70% {
            scale: 1;
            box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
          }
          100% {
            scale: 0.95;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        @keyframes installing {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(-90deg) translate(27px) rotate(0);
            opacity: 1;
            visibility: visible;
          }
          99% {
            transform: rotate(270deg) translate(27px) rotate(270deg);
            opacity: 1;
            visibility: visible;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }
        @keyframes installed {
          100% {
            width: 190px;
            border-color: #0d9488;
          }
        }
        @keyframes circleDelete {
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }
        @keyframes showInstalledMessage {
          100% {
            opacity: 1;
            visibility: visible;
            right: 56px;
          }
        }
      `}</style>
    </div>
  );
};

export default DownloadCVButton; 