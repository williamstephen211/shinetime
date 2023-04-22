import React from "react";

export default function Footer() {
  return (
    // linear-gradient(90deg, rgba('#0088ce',0.8),rgba(0,136,206,0.25))
    <footer
      className="bg-transparent relative"
      style={{
        backgroundImage: "linear-gradient(180deg,#2159E3 32%,#18227A 100%)",
      }}
    >
      <div className="absolute w-full h-full bg-[#001035] opacity-[0.5] left-0 right-0"></div>
      <div className="relative w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="lg:px-36 px-8 pt-12">
          <span>
            <strong className="text-white text-[42px]">Contact Us</strong>
          </span>
        </div>
        <div className="flex lg:flex-row flex-col my-20">
          <div className="flex flex-col lg:px-36 px-8 flex-1">
            <span className="text-3xl mb-8 text-white font-semibold">
              Get in Touch
            </span>
            <div className="flex flex-col gap-8">
              <a
                href="tel:(410) 889-0505"
                className="flex flex-row items-center gap-4"
              >
                <span>
                  <svg
                    fill="#ffffff"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
                  </svg>
                </span>
                <span className="text-white text-lg font-semibold">
                  (410) 889-0505
                </span>
              </a>

              <a
                href="mailto:shinetime@email.com"
                className="flex flex-row items-center gap-4"
              >
                <span>
                  <svg
                    fill="#ffffff"
                    width="32px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                  </svg>
                </span>
                <span className="text-white text-lg font-semibold">
                  shinetime@email.com
                </span>
              </a>

              <div className="flex flex-row items-center gap-4">
                <svg
                  height="24px"
                  width="32px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                >
                  <g>
                    <path
                      className="st0"
                      d="M490.208,175.781h-0.002v-0.238H21.792v204.8h73.445l43.883-87.772h234.059l43.586,87.772h73.441V176.611
		L490.208,175.781z M98.163,248.686c-9.695,0-17.555-7.86-17.555-17.553c0-9.697,7.86-17.557,17.555-17.557
		c9.691,0,17.551,7.86,17.551,17.557C115.714,240.826,107.854,248.686,98.163,248.686z M150.823,248.686
		c-9.695,0-17.554-7.86-17.554-17.553c0-9.697,7.859-17.557,17.554-17.557c9.696,0,17.555,7.86,17.555,17.557
		C168.378,240.826,160.519,248.686,150.823,248.686z"
                    />
                    <polygon
                      className="st0"
                      points="111.108,160.914 111.108,29.556 111.108,29.258 400.898,29.258 400.898,160.914 430.155,160.914 
		430.155,0.891 430.157,0.238 430.155,0.238 430.155,0 81.851,0 81.851,160.914 	"
                    />
                    <polygon
                      className="st0"
                      points="365.222,73.988 365.222,73.752 148.433,73.752 146.642,73.75 146.642,73.752 146.402,73.752 
		146.402,88.381 365.222,88.381 365.222,74.047 365.222,73.988 	"
                    />
                    <polygon
                      className="st0"
                      points="148.433,117.029 146.642,117.027 146.642,117.029 146.402,117.029 146.402,132.266 365.222,132.266 
		365.222,117.326 365.222,117.266 365.222,117.266 365.222,117.029 	"
                    />
                    <path
                      className="st0"
                      d="M370.042,434.348l-0.064-0.066l-0.002,0.001c-0.06-0.062-0.107-0.108-0.168-0.17
		c-29.156,29.157-69.414,47.216-113.808,47.216c-44.395,0-84.652-18.058-113.809-47.216l-21.742,21.741
		C155.14,490.543,203.066,512,255.999,512c52.594,0,100.224-21.193,134.859-55.488c0.172-0.168,0.352-0.323,0.522-0.492
		l-0.002-0.002c0.055-0.057,0.115-0.108,0.172-0.164C381.749,446.055,378.866,443.171,370.042,434.348z"
                    />
                    <path
                      className="st0"
                      d="M163.87,412.434c23.602,23.606,56.192,38.224,92.129,38.224c35.336,0,67.383-14.182,90.887-37.093
		c0.348-0.336,0.73-0.623,1.074-0.963l-0.008-0.008c0.056-0.056,0.121-0.103,0.176-0.16c-7.762-7.765-15.029-15.027-21.426-21.424
		l-0.08-0.084l-0.002,0.002c-0.052-0.054-0.115-0.117-0.168-0.17c-18.051,18.049-42.969,29.228-70.453,29.228
		c-27.48,0-52.402-11.18-70.453-29.228L163.87,412.434z"
                    />
                    <path
                      className="st0"
                      d="M283.581,347.884l-0.312-0.317l-0.004,0.002c-0.041-0.042-0.129-0.129-0.168-0.168
		c-6.942,6.942-16.527,11.242-27.098,11.242c-10.57,0-20.156-4.3-27.098-11.242l-21.676,21.678
		c12.496,12.497,29.746,20.236,48.774,20.236c18.652,0,35.568-7.469,48-19.533c0.197-0.186,0.412-0.346,0.605-0.535l-0.008-0.008
		c0.056-0.057,0.121-0.104,0.176-0.16C300.186,364.491,287.108,351.412,283.581,347.884z"
                    />
                  </g>
                </svg>
                <p className="text-white text-lg font-semibold">
                  (410) 889-0535(Fax)
                </p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <span>
                  <svg
                    width="32px"
                    height="24px"
                    viewBox="0 0 8.4666669 8.4666669"
                    id="svg8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <g id="layer1" transform="translate(0,-288.53332)">
                      <path
                        d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                        id="path929"
                        transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                      />
                    </g>
                  </svg>
                </span>
                <span className="text-white text-lg font-semibold">
                  510 Spring St, Suite 120, Herndon, VA 20170 1-888-MAIDBRIGHT
                </span>
              </div>
            </div>
          </div>

          <div className="flex lg:justify-start px-10 gap-5 mt-6 lg:pt-1 pt-8 pr-12">
            <span className="text-gray-500 cursor-pointer flex items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                fill="#ffffff"
              >
                <path d="M21,5c0,0-3-1-9-1S3,5,3,5s-1,3-1,7s1,7,1,7s3,1,9,1s9-1,9-1s1-3,1-7S21,5,21,5z M10,15.464V8.536L16,12L10,15.464z" />
              </svg>
            </span>
            <span className="text-gray-500 cursor-pointer flex items-end">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
            <span className="text-gray-500 cursor-pointer flex items-end pb-[3px]">
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 34.499 34.499"
              >
                <g>
                  <path
                    d="M28.018,0H6.483C2.902,0,0,2.902,0,6.483v21.533c0,3.582,2.902,6.483,6.483,6.483h21.533c3.582,0,6.483-2.901,6.483-6.483
		V6.483C34.5,2.902,31.598,0,28.018,0z M28.992,8.088c-0.51-0.158-1.139-0.275-1.924-0.275c-1.963,0-2.785,1.53-2.785,3.414v0.98
		h3.846v4.395h-3.807v14.794h-6.004V16.603h-2.511v-4.395h2.511v-0.746c0-2.314,0.707-4.867,2.434-6.435
		c1.49-1.413,3.57-1.923,5.297-1.923c1.334,0,2.354,0.158,3.18,0.393L28.992,8.088z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
        <span className="block text-sm text-white text-center dark:text-white">
          © 2023 Shine Time™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
