import React from "react";

export default function BackgroundComponent() {
  return (
    <div className="bg-[url('assets/images/bg.jpg')] bg-cover bg-no-repeat lg:px-[16px] pt-[140px] lg:pb-[204px]">
      <div className="lg:py-8 py-4 px-4 flex flex-col items-center">
        <p className="text-white font-bold lg:text-4xl text-2xl lg:text-left text-center">
          Shine Time Pressure Washing Services
        </p>
        <br></br>
        <p className="text-white text-xl lg:text-left text-center">
          Professional Cleaning That Leaves You Stress-Free
        </p>
        <br></br>
        <div className="flex justify-center lg:justify-start mt-1 lg:mt-24">
          <button
            type="button"
            className="lg:text-xl text-white bg-[#0079C1] hover:bg-[#0079D1] font-medium rounded-lg text-base px-8 py-2.5 mb-2 dark:bg-[#0079C1] dark:hover:bg-[#0079D1]"
          >
            Request Estimate
          </button>
        </div>
      </div>
    </div>
  );
}
