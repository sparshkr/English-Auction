import React from "react";

// interface PhoneFrameProps {
//   lightModeImage?: string;
//   darkModeImage?: string;
// }

const PhoneFrame = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-8 w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-12 w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-12 w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-16 w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 px-3 py-1">
        Hi Hello
      </div>
    </div>
  );
};

export default PhoneFrame;
