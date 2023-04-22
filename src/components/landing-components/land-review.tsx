import Carousel from "@components/widgets/Carousel/carousel";
import React, { useEffect, useState } from "react";

const review_data = [
  { title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", name: "aaa", sub_count: 4 },
  { title: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", name: "bbb", sub_count: 2 },
  { title: "cccccccccccccccccccccccccccccccccccc", name: "ccc", sub_count: 1 },
  { title: "dddddddddddddddddddddddddddddddddddd", name: "ddd", sub_count: 2 },
  { title: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", name: "eee", sub_count: 3 },
  { title: "ffffffffffffffffffffffffffffffffffff", name: "fff", sub_count: 5 },
  { title: "gggggggggggggggggggggggggggggggggggg", name: "ggg", sub_count: 1 },
  { title: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", name: "hhh", sub_count: 3 },
  { title: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", name: "iii", sub_count: 2 },
  { title: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", name: "jjj", sub_count: 5 },
  { title: "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", name: "kkk", sub_count: 1 },
  { title: "llllllllllllllllllllllllllllllllllll", name: "lll", sub_count: 2 },
  { title: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", name: "mmm", sub_count: 4 },
  { title: "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", name: "nnn", sub_count: 2 },
];
export default function LandReview() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div className="lg:px-[24px] py-[64px] bg-[#FFF5EB]">
      <div className="lg:pb-5 pb-3">
        <p className="lg:text-3xl text-lg text-center font-bold scroll-smooth snap-x snap-mandatory touch-pan-x">
          Subscribe Review
        </p>
      </div>
      <div className="max-w-7xl ml-auto mr-auto mt-16">
        <Carousel show={isMobile ? 1 : 3}>
          {review_data.map((item) => {
            return (
              <div className="text-center">
                <p className="text-center pb-4 px-4 break-words">
                  {item.title}
                </p>
                <p>
                  - {item.name} (subscribe:{item.sub_count}) -
                </p>
                <p></p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex justify-center mt-16">
        <button
          type="button"
          className="lg:w-48 lg:text-xl border-[1px] border-[#FF9933] lg:mx-[200px] mx-[100px]  text-[#FF9933] bg-white font-medium rounded-lg text-base px-8 py-2.5 mb-2 dark:bg-white"
        >
          More Review
        </button>
      </div>
    </div>
  );
}
