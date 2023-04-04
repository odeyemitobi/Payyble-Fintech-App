import React from "react";
import PAY from "../../Assets/img/payyble_.png";
import ETIM from "../../Assets/img/etim.png";
import NOTIFI from "../../Assets/pic/Notifi.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

function TopsideBar() {
  return (
    <div className="w-full">
      <nav className="flex">
        <div className="py-8 px-16">
          <img className="w-[11rem]" src={PAY} alt="" />
        </div>
        <div className="w-full py-4 px-6 flex justify-between border-b border-solid border-[#7AC231]">
          <div>
            <p className="text-[18px] leading-[23px]">Hi Sylvanus,</p>
            <p className="text-[34px] leading-[37px] font-medium">Welcome Back</p>
          </div>
          <div className="grid place-items-center pl-[16rem]">
            <div className="rounded-full border-white border-[1px] border-solid px-4 py-1 flex cursor-pointer text-white">
              <AiOutlineSearch className="mt-1" color="#6E6E6E" size={25} />
              <input
                type="text"
                placeholder="Search everything"
                className="text-sm ml-2 mr-[-2rem] w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <div className="cursor-pointer grid place-items-center">
            <img src={NOTIFI} alt="" />
          </div>
          <div className="cursor-pointer flex place-items-center">
            <img src={ETIM} alt="" />
            <RiArrowDropDownLine color="#9B9B9B" size={25} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopsideBar;
