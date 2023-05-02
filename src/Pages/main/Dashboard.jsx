import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Tot from "../../Assets/img/Total.svg";
import Totpay from "../../Assets/img/Totalpay.svg";
import Amt from "../../Assets/img/Amount.svg";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

function Dashboard() {
  return (
    <MainLayout>
      <div className="w-full pl-8 flex justify-between">
        <div className="w-full pt-5">
          <div className="flex justify-between">
            <img className="h-[6.5rem]" src={Tot} alt="Tot" />
            <img className="h-[6.5rem]" src={Totpay} alt="Totpay" />
          </div>
          <div className="text-white">hello</div>
        </div>
        <div className="w-full pt-5 pl-7">
          <div>
            <img src={Amt} alt="Amt" />
          </div>
          <div className=" pt-5 pr-7">
            <div className="with text-[#E0E0E0] px-4">
              <div className=" border-b-2 px-8 py-3 flex items-center justify-between">
                <div className="">
                  <h1 className="text-sm">Withdrawal</h1>
                  <p className="text-[30px]">₦650,400.42</p>
                </div>
                <div className="">
                  <BiUpArrowAlt color="#F81B3A" size={35} />
                </div>
              </div>
              <div className="py-3 px-8 flex items-center justify-between">
                <div>
                  <h1 className="text-sm">Deposits</h1>
                  <p className="text-[30px]">₦7,000,000.45</p>
                </div>
                <div>
                  <BiDownArrowAlt color="#1EFFA0" size={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
