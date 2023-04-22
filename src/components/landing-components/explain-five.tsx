import React from "react";

export default function ExplainFive() {
  return (
    <div className="lg:px-[16px] py-[120px] bg-[#fafafa]">
      <div className="lg:py-8 py-4">
        <p className="lg:text-2xl text-lg text-center">
          New Topic Every Month,<br></br>
          <strong>Earrings Perfect to wear Now</strong>
        </p>
        {/* <p className="lg:text-2xl font-bold text-xl text-center">
         
        </p> */}
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
        <img src="/ex_5.png" className="max-w-full lg:max-w-[337px] h-auto" />
      </div>
    </div>
  );
}
