import React from "react";
import TopsideBar from "../components/Navigations/TopsideBar";
import PAY from "../Assets/img/payyble_.png";

function MainLayout({ children }) {
  return (
    <section>
      <nav className="absolute  z-20 border-r-2 h-[100vh] bg-[#000614] border-[#7AC231]">
        <div className="pl-[5rem] pr-[34px] pt-7 pb-[33px]">
          <img className="h-[2rem]" src={PAY} alt="" />
        </div>
        <div className="px-4">
          <h1>hello</h1>
        </div>
      </nav>
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
