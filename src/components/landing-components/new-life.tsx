import React from "react";

export default function NewLife() {
  return (
    <div>
      <div className="py-6 bg-[#efefef] mb-4"></div>

      <div className="flex lg:flex-row flex-col items-center gap-6 lg:my-40 my-20 lg:mx-32 mx-6 ">
        <img src="/new_life.png" className="lg:max-w-md w-3/4 mx-8 px-8" />

        <div className="flex flex-col lg:items-start items-center gap-6 lg:max-w-md w-3/4 mx-8">
          <p className="lg:text-left text-center break-words">
            <strong className="lg:text-4xl text-3xl lg:text-left text-center">
              The beginning of a new life with excitement
            </strong>
          </p>
          <p className="break-words">
            Read the story on the earrings and wear new earrings in front of the
            mirror. Until you enjoy going out in a new mood and wait for your
            next earring, your normal month will be more enjoyable. Start a new
            routine now!
          </p>
          <p className="underline cursor-pointer text-xl">Brand Story{">>"}</p>
          <div className="flex lg:items-start items-center">
            <button
              type="button"
              className="lg:w-32 lg:text-xl  text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-base px-8 py-2.5 mb-2 dark:bg-amber-500 dark:hover:bg-amber-600 "
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
