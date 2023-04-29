import React, { useState, useRef } from "react";
import ETIM from "../../Assets/img/Etim.svg";
import NOTIFI from "../../Assets/pic/notifi.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Popover } from "antd";

function TopsideBar({ handleClick }) {
  const [open, setOpen] = useState(false);
  const mobileMenuBtn = useRef(null);
  const handleToggle = () => {
    handleClick();
  };

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div className="w-full bg-[#000614]">
      <nav className="pl-[16rem]">
        <div className="w-full py-4 px-6 flex justify-between border-b-2 border-solid border-[#7AC231]">
          <div className="px-11 text-white">
            <p className="text-[18px] leading-[23px]">Hi Tobiloba,</p>
            <p className="text-[34px] leading-[37px] font-medium">
              Welcome Back
            </p>
          </div>
          <div className="grid place-items-center pl-[16rem]">
            <div className="rounded-full border-white border-[1px] border-solid px-4 py-1 flex cursor-pointer text-white">
              <AiOutlineSearch className="mt-1" color="#6E6E6E" size={25} />
              <input
                type="text"
                placeholder="Search everything"
                className="text-sm ml-2 mr-[-2rem] w-[75%] bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <div className="cursor-pointer grid place-items-center">
            <img src={NOTIFI} alt="" />
          </div>
          <Popover
            content={
              <div className="w-full px-2 py-3 bg-[#000614]">
                <div className="">
                  <p
                    className="text-[12px] cursor-pointer text-white font-medium"
                    onClick={hide}
                  >
                    Switch Account
                  </p>
                </div>
              </div>
            }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <div className="cursor-pointer flex place-items-center">
              <img src={ETIM} alt="" />
              <RiArrowDropDownLine color="#9B9B9B" size={25} />
            </div>
          </Popover>
          <div className="md:hidden flex items-center">
            <button ref={mobileMenuBtn} onClick={handleToggle}>
              <GiHamburgerMenu color="red" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopsideBar;
