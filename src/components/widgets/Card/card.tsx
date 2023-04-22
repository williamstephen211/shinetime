import React from "react";

type childProps = {
  comment: string;
  star: number;
  name: string;
};
export default function Card({ comment, star, name }: childProps) {
  return (
    <div className=" flex flex-col h-[350px] mx-6 border border-[#ececec] rounded-lg p-9 shadow-3xl">
      <span className="flex-1 text-justify">{comment}</span>
      <figure className="flex gap-1">
        {Array.apply(null, new Array(star)).map((i) => (
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <path
              fill="#FFB600"
              d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
                C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
                c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
                c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
                c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
                C63.951,25.771,64.131,24.987,63.893,24.277z"
            />
          </svg>
        ))}
      </figure>
      <p className="text-end text-sky-400 font-semibold">- {name}</p>
    </div>
  );
}
