import React, { useEffect, useState } from "react";
import { ReviewFormProps } from "../../utils/types/types";
import ReviewView from "./reviews_view";
import ReivewForm from "./review_form";
import { animateScroll as scroll } from "react-scroll";

export default function ReviewLayout() {
  const onSubmit = (info: ReviewFormProps) => {};
  const [visible, setVisible] = useState(false);
  const cancelForm = () => {
    setVisible(false);
  };
  useEffect(() => {
    console.log("testiminoal");
    scroll.scrollToTop({ duration: 300, smooth: "easeOutQuint" });
  }, []);
  return (
    <div className="flex flex-col items-center lg:px-[16px] lg:pt-[84px] pt-[48px] pb-[96px]">
      <div className="relative text-center h-40">
        <p className="text-4xl text-[#3c3c3c]">
          <strong>Testimonials</strong>
        </p>
        <p className="mt-4 mb-14 px-5">
          Some of these reviews may have been submitted on other websites. We
          are not affiliated with or sponsored by these websites.
        </p>
      </div>
      <button
        onClick={() => setVisible(true)}
        type="button"
        className={` ${
          visible ? "hidden" : "flex"
        } text-white bg-[#2b4c9e] hover:bg-[#2b4c9e]/90 focus:ring-4 focus:outline-none focus:ring-[#2b4c9e]/50 font-medium  text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2`}
      >
        Leave A Review
      </button>

      {visible && (
        <ReivewForm onSubmitReview={onSubmit} onCancelVisible={cancelForm} />
      )}
      <ReviewView />
    </div>
  );
}
