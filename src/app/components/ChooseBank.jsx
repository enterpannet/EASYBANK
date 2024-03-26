import React from "react";
import Image from "next/image";
import Online from "../asset/images/icon-online.svg";
import Onboarding from "../asset/images/icon-onboarding.svg";
import Budgeting from "../asset/images/icon-budgeting.svg";
import Api from "../asset/images/icon-api.svg";
function ChooseBank() {
  return (
    <div className="min-w-[375px] flex flex-col justify-center items-center gap-5 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl px-10 flex text-center">
          Why Choose Easybank?
        </h1>
        <p className="px-10 text-center text-sm">
          We leverage Open Banking to turn your bank account into your financial
          hub.Control your financial like never before.
        </p>
      </div>
      <div className="flex flex-col gap-y-4 flex-wrap">
        <div className="flex flex-col justify-center items-center px-9 gap-5  md:w-[300px]">
          <Image src={Online} alt="online" />
          <h1 className="text-xl">Online Banking</h1>
          <p className="text-center text-sm">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-9 gap-5 md:w-[300px]">
          <Image src={Budgeting} alt="online" />
          <h1 className="text-xl">Simple Budgeting</h1>
          <p className="text-center text-sm">
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-9 gap-5 md:w-[300px]">
          <Image src={Onboarding} alt="online" />
          <h1 className="text-xl">Fast Onboarding</h1>
          <p className="text-center text-sm">
            We don't do branches.Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-9 gap-5 pb-10 md:w-[300px]">
          <Image src={Api} alt="online" />
          <h1 className="text-xl">Open API</h1>
          <p className="text-center text-sm">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseBank;
