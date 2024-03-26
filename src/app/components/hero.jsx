import React from "react";
import Image from "next/image";

import BgMobiles from "../asset/images/bg-intro-mobile.svg";
import BgDesktop from "../asset/images/bg-intro-desktop.svg";
function Hero() {
  return (
    <>
      <div className="min-w-[375px] flex flex-col lg:flex-row-reverse bg-[#fafafa] lg:w-full lg:justify-center max-w-[1440px] lg:mx-5 xl:gap-28 relative xl:overflow-hidden">
        <div className="box1 relative h-[320px] min-[425px]:h-[430px] md:h-[650px] lg:w-[480px] lg:h-[500px] xl:w-[600px] ">
          <Image
            src={BgMobiles}
            className="absolute w-full -top-16 z-0  md:hidden "
            alt="mobiles"
          />
          <Image
            src={BgDesktop}
            className="absolute z-0 hidden md:w-full md:flex md:right-5 lg:flex lg:w-full lg:right-0 lg:transform lg:translate-x-10 lg:translate-y-1 lg:scale-125 lg:z-10 xl:-top-16 xl:translate-x-36 xl:scale-[1.51]"
            alt="desktops"
          />
        </div>

        <div className="box2 px-[15px] flex flex-col pb-6 justify-center items-center lg:w-[480px] lg:items-start xl:w-[500px]">
          <h1 className="text-center text-4xl text-[#2d314d] pb-4 min-[425px]:text-5xl lg:text-left">
            Next generation digital banking
          </h1>
          <p className="text-[#9698a6] text-center text-sm pb-5 min-[425px]:text-lg lg:text-left ">
            Take your financial life online.Your Easybank account will be a
            one-stop-shop for spending,saving,budgeting,investing,and much more.
          </p>
          <button className=" hover:opacity-50 w-fit rounded-3xl bg-slate-500 px-3 py-2 bg-gradient-to-r from-[#31d35c] to-[#5fc2f7] text-white min-[425px]:text-lg lg:flex lg:justify-start lg:items-start">
            Request Invite
          </button>
        </div>
      </div>
     
    </>
  );
}

export default Hero;
