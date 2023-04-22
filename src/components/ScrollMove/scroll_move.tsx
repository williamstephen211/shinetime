import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
export default function ScrollMove() {
  const [arrowEnable, setArrowEnable] = useState(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    if (winScroll > 400) setArrowEnable(true);
    else setArrowEnable(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bg-[#2b4c9e] transition-all duration-700 opacity-100 text-white text-xl font-semibold px-3 py-4 right-7  z-50 ${
        arrowEnable
          ? "flex justify-center items-center bottom-16"
          : "overflow-hidden opacity-0 bottom-8"
      }`}
      // style={{ opacity: 0.4, marginBottom: 20 }}
      onClick={() =>
        arrowEnable &&
        scroll.scrollToTop({ duration: 300, smooth: "easeOutQuint" })
      }
    >
      TOP
    </div>
  );
}
