import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "@const/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="fixed w-screen z-10 px-6 py-6 lg:px-8 bg-white shadow-3xl">
      <div>
        <nav
          className="flex h-7 items-center justify-between"
          aria-label="Global"
        >
          {/* <span className="flex-1"></span> */}
          <div
            className="flex flex-1 lg:justify-end lg:min-w-0 relative"
            aria-label="Global"
          >
            <a href="/" className="relative -m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="relative w-32 h-16 lg:overflow-visible overflow-hidden"
                src="/logo.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 flex-[3] lg:justify-center lg:gap-x-12 items-center">
            <Link
              to="/"
              // className="hover: border-b-red-500 hover:after:inset-x-0 after: h-[7px] after: bg-red-500 after: absolute after: b-[-1px] after: left-[51%] after: right-[51%] after: contents-[''] after: transition-all"
            >
              <span className="flex px-1 relative font-bold text-gray-700  hover:text-gray-950 hover:border-b-gray-600 hover:after:inset-x-0 after:h-[2px] after:bg-[#2b4c9e] after:absolute after:bottom-[-5px] after:inset-x-1/2 after:content-[''] after:transition-all after:duration-300 after:ease-in-out">
                Home
              </span>
            </Link>
            <Link to="/services">
              <span className="flex px-1 relative  font-bold text-gray-700 hover:text-black hover:border-b-gray-600 hover:after:inset-x-0 after:h-[2px] after:bg-[#2b4c9e] after:absolute after:bottom-[-5px] after:inset-x-1/2 after:content-[''] after:transition-all after:duration-300 after:ease-in-out">
                Services
              </span>
            </Link>
            <Link to="/contact">
              <span className="flex px-1 relative font-bold text-gray-700 hover:text-gray-950 hover:border-b-gray-600 hover:after:inset-x-0 after:h-[2px] after:bg-[#2b4c9e] after:absolute after:bottom-[-5px] after:inset-x-1/2 after:content-[''] after:transition-all after:duration-300 after:ease-in-out">
                Contact
              </span>
            </Link>
            <Link to="/reviews">
              <span className="flex px-1 relative font-bold text-gray-700 hover:text-gray-950 hover:border-b-gray-600 hover:after:inset-x-0 after:h-[2px] after:bg-[#2b4c9e] after:absolute after:bottom-[-5px] after:inset-x-1/2 after:content-[''] after:transition-all after:duration-300 after:ease-in-out">
                Testimonial
              </span>
            </Link>
            <Link to="/schedule">
              <span className="flex px-1 relative font-bold text-gray-700 hover:text-gray-950 hover:border-b-gray-600 hover:after:inset-x-0 after:h-[2px] after:bg-[#2b4c9e] after:absolute after:bottom-[-5px] after:inset-x-1/2 after:content-[''] after:transition-all">
                Schedule
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:min-w-0 flex-[2] lg:justify-end mr-6">
            <a href="tel:(888) 837-6284" className="flex flex-col">
              <span className="text-[14px] font-semibold font-sans text-[#2b4c9e]">
                Call for a Free Estimate
              </span>
              <span className="font-semibold text-xl text-gray-700 hover:text-gray-950">
                (888) 837-6284
              </span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          title="Menu"
        >
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              {/* <div className="flex">
                <a
                  href="@components/ExampleComponent/ExampleComponent#"
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">Your Company</span>
                  <img className="relative w-28 h-12" src="/logo.jpg" alt="" />
                </a>
              </div> */}
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  {item.name}
                </a>
              ))} */}
                  <a
                    href="/"
                    className="-mx-3 block py-2 px-3 text-xl border-b-2 "
                  >
                    <span className="font-semibold text-gray-700 hover:text-gray-950">
                      Home
                    </span>
                  </a>
                  <a
                    href="/services"
                    className="-mx-3 block border-b-2 py-2 px-3 text-xl"
                  >
                    <span className="font-semibold text-gray-700 hover:text-gray-950">
                      Services
                    </span>
                  </a>
                  <a
                    href="/contact"
                    className="-mx-3 block border-b-2 py-2 px-3 text-xl"
                  >
                    <span className="font-semibold text-gray-700 hover:text-gray-950">
                      Contact
                    </span>
                  </a>
                  <a
                    href="/reviews"
                    className="-mx-3 block border-b-2 py-2 px-3 text-xl"
                  >
                    <span className="font-semibold text-gray-700 hover:text-gray-950">
                      Testimonial
                    </span>
                  </a>
                  <a
                    href="/schedule"
                    className="-mx-3 block border-b-2 py-2 px-3 text-xl"
                  >
                    <span className="font-semibold text-gray-700 hover:text-gray-950">
                      Schedule
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
