import React from "react";

export default function ExplainOne() {
  return (
    <div className="lg:px-[16px] lg:pt-[72px] pt-[48px] pb-[96px]">
      <div className="py-4">
        <p className="lg:text-3xl text-2xl lg:px-1 px-4 text-center">
          <strong> Shine Time Pressure Washing Services</strong>
          <br></br>
        </p>
        <div className="flex lg:mt-28 mt-16 lg:flex-row flex-col">
          <p className="lg:text-start flex-1 lg:leading-loose leading-loose lg:text-2xl lg:px-40 px-6 mx-auto my-0">
            This page should list all the services provided by the company,
            including pool patio cleaning, house wash, decks, concrete cleaning,
            patio cleaning, paver sanding, concrete and paver sealing, window
            cleaning, driveway cleaning, fence cleaning, and asphalt sealing.
            This page should list all the services provided by the company,
            including pool patio cleaning, house wash, decks, concrete cleaning,
            patio cleaning, paver sanding, concrete and paver sealing, window
            cleaning, driveway cleaning, fence cleaning, and asphalt sealing.
          </p>
          <div className="flex justify-center flex-1 lg:px-1 px-12">
            <img src="/pressur.jpg" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:px-1 px-12">
        {/* <img
          src="/aad6cbb8badf0.png"
          className="max-w-full lg:max-w-[337px] h-auto"
        /> */}
      </div>
    </div>
  );
}
