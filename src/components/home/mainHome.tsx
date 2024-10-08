import React from 'react';
import Spline from '@splinetool/react-spline';
import { TextRevealDemo } from './typingText';

const MainHome: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[auto] h-[79vh] bg-gray-100 mx-5 rounded-2xl shadow-lg">
      {/* Left Section: Introduction */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#ffffff] text-4xl font-bold text-neutral-700 dark:text-neutral-400 p-8 rounded-lg lg:rounded-l-2xl lg:rounded-r-none">
        <h2 className="text-3xl font-semibold mb-2 text-[#ff4d00]">Fastest Blood Delivery in</h2>
        <h2 className="text-3xl font-semibold mb-2 text-[#ff4d00]">Critical Conditions</h2>
        <h2 className="text-3xl font-semibold mb-2 text-[#ff4d00]">and Remote Areas</h2>

        <p className="text-lg text-center text-neutral-600 mt-4">
          Life-saving blood, delivered fast—wherever, whenever.
        </p>
        <p className="text-lg text-center text-neutral-600 mt-2">
          Emergency? We’ve got you covered.
        </p>
        <TextRevealDemo/>

      </div>

      {/* Right Section: Spline 3D Model */}
      <div className="flex-1 flex items-center justify-center bg-[#ffffff] p-4 rounded-lg lg:rounded-r-2xl lg:rounded-l-none">
        <Spline
          scene="https://prod.spline.design/tL8hv6iIgBjtiM5U/scene.splinecode"
          className="w-full h-full max-w-[700px] max-h-[700px] lg:max-w-[900px] lg:max-h-[900px]"
        />
      </div>
    </div>
  );
};

export default MainHome;
