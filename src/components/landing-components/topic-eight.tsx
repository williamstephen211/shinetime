import React from "react";

export default function TopicEight() {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:justify-around lg:px-[24px] lg:pt-[80px] pt-[40px] pb-[40px] bg-[#bdb2a6]">
      <div className="flex lg:order-first order-last flex-col  items-center lg:w-1/4 w-1/2">
        <span className="text-white">2023.4 topic</span>
        <strong className="text-white text-3xl pb-8">
          {"< "}Fragrance and Mood{" >"}
        </strong>
        <p className="break-words text-white text-lg">
          What kind of scent do you like? A day that starts with a scent that
          you like It makes me feel more excited. In April 2024, in various
          scents With charming earrings that I got inspired by Enjoy a more
          atmospheric outing!
        </p>
        <div className="flex justify-center mt-16">
          <button
            type="button"
            className="w-60 lg:text-xl lg:mx-[200px] mx-[100px]  text-black bg-white font-medium rounded-lg text-base px-8 py-2.5 mb-2 dark:bg-white"
          >
            Start Topic Month
          </button>
        </div>
      </div>
      <div className="flex justify-center px-1 lg:px-12">
        <img
          src="/subject_month.png"
          className="max-w-full lg:w-[337px] w-[70%] h-auto"
        />
      </div>
    </div>
  );
}
