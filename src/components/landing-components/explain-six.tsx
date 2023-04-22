import React from "react";

export default function ExplainSix() {
  return (
    <div className="lg:px-[16px] py-[120px] bg-white">
      <div className="lg:py-8 py-4">
        <p className="lg:text-2xl text-lg text-center">
          New Topic Every Month,<br></br>
          <strong>Earrings Perfect to wear Now</strong>
        </p>
        <br></br>
        <p className="text-center lg:text-xl">Repeat Our Lives Flow Freely</p>
        <br></br>
        <p className="text-center lg:text-xl">New Jewerly Seasonly Mood</p>
        <br></br>
        <p className="font-bold text-center lg:text-xl">
          Start with confidence!
        </p>
      </div>
      <div className="flex justify-center lg:px-1 px-12">
        <img src="/ex_6.png" className="max-w-full lg:max-w-[337px] h-auto" />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="lg:w-32 lg:text-xl lg:mx-[200px] mx-[100px]  text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-base px-8 py-2.5 mb-2 dark:bg-amber-500 dark:hover:bg-amber-600 "
        >
          Start
        </button>
      </div>
    </div>
  );
}
