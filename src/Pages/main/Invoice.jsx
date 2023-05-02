import React from "react";
import { BsFillLockFill } from "react-icons/bs";
import MainLayout from "../../Layouts/MainLayout";

function Invoice() {
  return (
    <MainLayout>
      <div className="primary place-items-center grid min-h-[80vh]">
        <div>
          <div className="w-full place-items-center grid">
            <BsFillLockFill size={50} />
          </div>
          <p className="text-[4rem] font-semibold">COMING SOON</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Invoice;
