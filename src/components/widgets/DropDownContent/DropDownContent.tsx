import React, { useEffect, useState } from "react";

type DropDownChild = {
  children: JSX.Element[] | JSX.Element;
  title: string;
};

export default function DropDownContent({ children, title }: DropDownChild) {
  const [visible, setVisible] = useState(false);
  const content = React.useRef<HTMLDivElement>(null);
  return (
    <div
      className={`px-4 border-b-[1px] lg:w-1/2 w-[97%] border-b-[#bcc0c5] ${
        visible && "bg-[#fafafa]"
      }`}
    >
      <div
        className="flex justify-between py-4"
        onClick={() => {
          setVisible((prop) => !prop);
        }}
      >
        <p>
          <p className="text-xl font-semibold ">{title}</p>
        </p>
        <div className="flex justify-end w-[24px] h-[24px] text-white text-center">
          {visible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.02 319.26"
              fill="#8c8c8c"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.02 319.26"
              fill="#dfdfdf"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z" />
            </svg>
          )}
        </div>
      </div>
      <div
        ref={content}
        style={{
          height: visible ? `${content.current?.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden  transition-all duration-1000 px-4`}
      >
        {children}
      </div>
    </div>
  );
}
