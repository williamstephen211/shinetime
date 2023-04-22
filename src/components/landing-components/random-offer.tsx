import React from "react";

export default function RandomOffer() {
  return (
    <div className="lg:px-[16px] py-[120px]">
      <p className="text-center py-5">
        <strong className="text-4xl">Special Event</strong>
      </p>
      <div className="flex justify-center lg:px-1 px-12 py-5">
        <img src="/random_offer.jpg" className="max-w-full h-auto" />
      </div>
      <div className="flex justify-center py-5">
        <button
          type="button"
          className="lg:text-xl lg:mx-[200px] mx-[100px]  text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-base px-8 py-2.5 mb-2 dark:bg-amber-500 dark:hover:bg-amber-600 "
        >
          Start Now
        </button>
      </div>
    </div>
  );
}
