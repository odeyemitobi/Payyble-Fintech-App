import React from "react";
import TopsideBar from "../components/Navigations/TopsideBar";
import PAY from "../Assets/img/payyble_.png";

function MainLayout({ children }) {
  return (
    <section>
      <div className="absolute pl-[5rem] pr-[34px] pt-7 pb-[33px] z-20 border-r-2 border-[#7AC231]">
        <img className="h-[2rem]" src={PAY} alt="" />
      </div>
      <div>
        <div className="">
          <TopsideBar />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default MainLayout;
