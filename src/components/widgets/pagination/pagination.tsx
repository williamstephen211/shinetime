import React, { useState, TouchEvent } from "react";

type PaginationProps = {
  total: number;
  onSubmit: (currentPage: number) => void;
};
export default function Pagination({ total, onSubmit }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const IncreasePage = () => {
    if (currentPage == total) return;
    onSubmit(currentPage + 1);
    setCurrentPage((count) => count + 1);
  };
  const DecreasePage = () => {
    if (currentPage == 1) return;
    onSubmit(currentPage + 1);
    setCurrentPage((count) => count - 1);
  };
  const SelectPage = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLDivElement;
    const current = Number(element.getAttribute("data-value"));
    setCurrentPage(current);
  };
  const pages = (): (JSX.Element | undefined)[] => {
    if (currentPage < 6) {
      return Array.apply(null, new Array(9)).map((e, i) => {
        if (i == 7) {
          return (
            <div className="flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center lg:flex-1  text-[#4c4c4c] lg:text-2xl text-xl">
              ....
            </div>
          );
        } else if (i < 8) {
          return (
            <div
              className={`flex justify-center cursor-pointer lg:w-12 lg:h-12 w-8 h-8 items-center lg:text-2xl text-xl lg:p-4 p-2 ${
                currentPage == i + 1
                  ? "bg-[#4e66a5] text-[#ffffff]"
                  : "text-[#4c4c4c] hover:bg-[#efefef]"
              }`}
              data-value={i + 1}
              onClick={SelectPage}
            >
              {i + 1}
            </div>
          );
        } else {
          return (
            <div
              className={` lg:text-2xl text-xl cursor-pointer flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center ${
                currentPage == total
                  ? "bg-[#4e66a5] text-[#ffffff]"
                  : "text-[#4c4c4c] hover:bg-[#efefef]"
              }`}
              data-value={total}
              onClick={SelectPage}
            >
              {total}
            </div>
          );
        }
      });
    } else if (currentPage <= total - 7) {
      return Array.apply(null, new Array(9)).map((e, i) => {
        if (i == 0) {
          return (
            <>
              <div
                className={`lg:text-2xl text-xl cursor-pointer flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center ${
                  currentPage == i + 1
                    ? "bg-[#4e66a5] text-[#ffffff]"
                    : "text-[#4c4c4c] hover:bg-[#efefef]"
                }`}
                data-value={1}
                onClick={SelectPage}
              >
                1
              </div>
              <div className="flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center  lg:flex-1 lg:text-2xl text-xl text-[#4c4c4c]">
                . . .
              </div>
            </>
          );
        } else if (i == 7) {
          return (
            <div className="flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center  lg:flex-1 lg:text-2xl text-xl text-[#4c4c4c]">
              . . .
            </div>
          );
        } else if (i < 7) {
          return (
            <div
              className={`lg:text-2xl text-xl cursor-pointer flex justify-center lg:w-14 lg:h-12 w-8 h-8 items-center ${
                currentPage == currentPage - 3 + i
                  ? "bg-[#4e66a5] text-[#ffffff]"
                  : "text-[#4c4c4c] hover:bg-[#efefef]"
              }`}
              data-value={currentPage - 3 + i}
              onClick={SelectPage}
            >
              {currentPage - 3 + i}
            </div>
          );
        } else {
          return (
            <div
              className={`lg:text-2xl text-xl cursor-pointer flex justify-center lg:w-14 lg:h-12 w-11 h-8 items-center ${
                currentPage == total
                  ? "bg-[#4e66a5] text-[#ffffff]"
                  : "text-[#4c4c4c] hover:bg-[#efefef]"
              }`}
              data-value={total}
              onClick={SelectPage}
            >
              {total}
            </div>
          );
        }
      });
    } else {
      return Array.apply(null, new Array(8)).map((e, i) => {
        if (i == 0) {
          return (
            <>
              <div
                className={`lg:text-2xl text-xl cursor-pointer flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center ${
                  currentPage == i + 1
                    ? "bg-[#4e66a5] text-[#ffffff]"
                    : "text-[#4c4c4c] hover:bg-[#efefef]"
                }`}
                data-value={1}
                onClick={SelectPage}
              >
                1
              </div>
              <div className="flex justify-center lg:w-12 lg:h-12 w-8 h-8 items-center  lg:flex-1 lg:text-2xl text-xl text-[#4c4c4c]">
                . . .
              </div>
            </>
          );
        } else {
          return (
            <div
              className={`lg:text-2xl text-xl cursor-pointer flex justify-center lg:w-14 lg:h-12 w-11 h-8 items-center ${
                currentPage == total + i - 7
                  ? "bg-[#4e66a5] text-[#ffffff]"
                  : "text-[#4c4c4c] hover:bg-[#efefef]"
              }`}
              data-value={total + i - 7}
              onClick={SelectPage}
            >
              {total + i - 7}
            </div>
          );
        }
      });
    }
  };
  return (
    <div className="flex justify-center lg:w-[50%] w-[420px] items-center">
      <div onClick={DecreasePage} className="left-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:h-12 lg:w-20 h-8 w-12 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          color="#4c4c4c"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="relative flex lg:mx-6 mx-2 w-full">{pages()}</div>
      <div onClick={IncreasePage} className="right-arrow ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:h-12 lg:w-20 h-8 w-12 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          color="#4c4c4c"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
