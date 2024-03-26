"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../asset/images/logo.svg";
import IconHamburger from "../asset/images/icon-hamburger.svg";
import IconClose from "../asset/images/icon-close.svg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if ((window.innerWidth = 768)) {
        setIsOpen(false);
      }
    };
    handleResize(); // เรียกฟังก์ชัน handleResize เมื่อคอมโพเนนต์ถูกโหลด
    window.addEventListener("resize", handleResize); // เพิ่ม event listener สำหรับการ resize
    return () => {
      window.removeEventListener("resize", handleResize); // ลบ event listener เมื่อคอมโพเนนต์ถูกถอดจาก DOM
    };
  }, []);

  return (
    <>
      <nav className="min-w-[375px] w-full max-w-[1440px] flex min-h-20 z-30  flex-row justify-around items-center bg-white relative">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div className=" hidden gap-5 md:flex lg:gap-8">
          <div className="relative cursor-pointer group">
            <div className="text-[#9698a6] hover:text-[#2d314d] h-8 relative group-hover:text-[#2d314d]">
              Home
              <div className="absolute inset-x-0 -bottom-[14px] h-1 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="relative cursor-pointer group">
            <div className="text-[#9698a6] hover:text-[#2d314d] h-8 relative group-hover:text-[#2d314d]">
              About
              <div className="absolute inset-x-0 -bottom-[14px] h-1 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="relative cursor-pointer group">
            <div className="text-[#9698a6] hover:text-[#2d314d] h-8 relative group-hover:text-[#2d314d]">
              Contact
              <div className="absolute inset-x-0 -bottom-[14px] h-1 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="relative cursor-pointer group">
            <div className="text-[#9698a6] hover:text-[#2d314d] h-8 relative group-hover:text-[#2d314d]">
              Blog
              <div className="absolute inset-x-0 -bottom-[14px] h-1 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="relative cursor-pointer group">
            <div className="text-[#9698a6] hover:text-[#2d314d] h-8 relative group-hover:text-[#2d314d]">
              Careers
              <div className="absolute inset-x-0 -bottom-[14px] h-1 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
        <button className=" hover:opacity-50 rounded-3xl bg-slate-500 px-3 py-2 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] text-white hidden md:flex">
          Request Invite
        </button>
        <div onClick={handleOpen} className=" cursor-pointer md:hidden">
          {!isOpen ? (
            <Image src={IconHamburger} alt="hamburger" />
          ) : (
            <Image src={IconClose} alt="close" />
          )}
        </div>
      </nav>
      <div>
        <div
          className={
            !isOpen
              ? " hidden md:hidden "
              : "flex flex-col gap-y-5 items-center inset-0 mx-5 h-[300px] justify-center absolute top-[96px] left-0 w-[90%] bg-white z-20 py-5 text-center rounded-lg  min-[425px]:top-[96px]  "
          }
        >
          <div className=" hover:bg-gray-200 cursor-pointer w-full flex justify-center text-center h-9 text-xl rounded-lg py-1">
            Home
          </div>
          <div className=" hover:bg-gray-200 cursor-pointer w-full flex justify-center text-center h-9 text-xl rounded-lg py-1">
            About
          </div>
          <div className=" hover:bg-gray-200 cursor-pointer w-full flex justify-center text-center h-9 text-xl rounded-lg py-1">
            Contact
          </div>
          <div className=" hover:bg-gray-200 cursor-pointer w-full flex justify-center text-center h-9 text-xl rounded-lg py-1">
            Blog
          </div>
          <div className=" hover:bg-gray-200 cursor-pointer w-full flex justify-center text-center h-9 text-xl rounded-lg py-1">
            Careers
          </div>
        </div>
      </div>
    </>
  );
}
