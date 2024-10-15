import React from 'react';
import Spline from '@splinetool/react-spline';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import { TextRevealDemo } from './typingText';
import NameSection from './nameSection';

const MainHome: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[auto] h-[79vh] bg-[black] ">
      {/* Left Section */}
      <NameSection />


      {/* Right Section with Spline */}
      <div className='flex-1 flex flex-col items-center justify-center bg-[black] text-4xl font-bold text-neutral-700 dark:text-neutral-400 '>
        <Spline
          scene="https://prod.spline.design/tL8hv6iIgBjtiM5U/scene.splinecode"
          className="w-full h-full max-w-[700px] max-h-[700px] lg:max-w-[900px] lg:max-h-[900px]"
        />
      </div>
    </div>
  );
};

export default MainHome;
