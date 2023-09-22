import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDownOpen(false);
        }
      }
      ["mousedown", "scroll"].forEach(function(e){
          document.addEventListener(e, handleClickOutside);
          return () => {
            document.removeEventListener(e, handleClickOutside);
          };
        });
    }, [ref]);
  }

  function closeHamburger() {
    setHamburgerOpen(false);
  }

  const handleNavLink = path => () => {
    closeHamburger();
    router.push(path);
  }

  const dropDownRef = useRef(null);
  useOutsideAlerter(dropDownRef);

  return (
    <>
      <div className="container">
        <div className=" flex justify-between p-5">
          <div className="md:flex md:items-center md:gap-5">
            <Image layout="fixed" width={137} height={23} onClick={() => router.push("/")} src="/logo.png" className="cursor-pointer" alt="Logo" priority="1"/>
            <div className="hidden lg:flex">
              <div
                onClick={() => router.push("/")}
                className="text-secondary mx-5 font-medium cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="text-secondary relative mx-5 font-medium cursor-pointer flex items-center"
                ref={dropDownRef}
              >
                <div>Products</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#667085"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {dropDownOpen && (
                  <div className="absolute top-[25px] -left-4 z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow ">
                    <ul className="py-1 text-sm text-secondary ">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 "
                        >
                          Dropdown1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 "
                        >
                          Dropdown2
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="text-secondary mx-5 font-medium cursor-pointer">
                Blog
              </div>
              <div className="text-secondary mx-5 font-medium cursor-pointer">
                Pricing
              </div>
            </div>
          </div>
          <div>
            <div className="hidden lg:flex w-[250px]">
              <button className="btn font-medium bg-white text-secondary border-none ring-0 ">
                Login
              </button>
              <button className="btn ml-4">Sign up</button>
            </div>
            <div>
              {hamburgerOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-[24px] h-[24px] lg:hidden text-[#344054] cursor-pointer"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px] lg:hidden cursor-pointer"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="#344054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <div className="absolute z-50 bg-white w-full pb-10 body-font lg:hidden  shadow-headerLight dark:shadow-headerDark z-100 overflow-hidden">
          <div className="px-12">
            <div
              onClick={handleNavLink("/")}
              className={`px-5 py-3 hover:text-primary  text-secondary  my-2 rounded-lg font-bold cursor-pointer text-center`}
            >
              Home
            </div>
            <div
              className={`px-5 py-3 hover:text-primary  text-secondary  my-2 rounded-lg font-bold cursor-pointer text-center`}
            >
              <div
                ref={dropDownRef}
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="text-secondary relative group  cursor-pointer flex  text-center justify-center"
              >
                <div className="group-hover:text-primary">Products</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1 group-hover:text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                {dropDownOpen && (
                  <div className="absolute top-[25px]  z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow ">
                    <ul className="py-1 text-sm text-secondary">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 hover:text-primary"
                        >
                          Dropdown1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 hover:text-primary"
                        >
                          Dropdown2
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`px-5 py-3 hover:text-primary  text-secondary  my-2 rounded-lg font-bold cursor-pointer text-center`}
            >
              Blog
            </div>
            <div
              className={`px-5 py-3 hover:text-primary  text-secondary my-2 rounded-lg font-bold cursor-pointer text-center`}
            >
              Pricing
            </div>
            <div
              className={`px-5 py-3 hover:text-primary  text-secondary  my-2 rounded-lg font-bold cursor-pointer text-center`}
            >
              Services
            </div>
            <div className="mt-5">
              <button className="btn font-medium bg-white text-secondary border-none ring-0 ">
                Login
              </button>
              <button className="btn mt-2">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
