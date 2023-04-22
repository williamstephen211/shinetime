import React from "react";

export default function ExplainTwo() {
  return (
    <div className="lg:px-[16px] lg:pt-[72px] pt-[48px] pb-[96px]">
      <div className="py-4">
        <p className="lg:text-4xl text-gray-700 text-2xl lg:px-1 px-4 text-center">
          <strong> Our Services</strong>
          <br></br>
        </p>
        <div className="grid lg:grid-cols-4 gap-y-12 lg:gap-x-6 gap-x-1 grid-cols-2 lg:mt-28 mt-16 lg:flex-row flex-col">
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/pool.png" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 font-semibold text-[#8c8c8c] hover:">
              Pool patio cleaning
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/house.png" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              House wash
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/deck.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Decks
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/concret.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Concrete cleaning
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/patio.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Patio cleaning
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/paver.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Paver sanding
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/sealing.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Concrete and paver sealing
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/window.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4  text-[#8c8c8c] font-semibold">
              Window cleaning
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/driveway.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Driveway cleaning
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/fence.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Fence cleaning
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 lg:px-1 px-12">
            <img src="/asphalt.jpg" className="h-auto" />
            <p className="lg:text-2xl text-2xl text-center mt-4 text-[#8c8c8c] font-semibold">
              Asphalt sealing
            </p>
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
