import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Tot from "../../Assets/img/Total.svg"

function Dashboard() {
  return (
    <MainLayout>
      <div className=" text-red-600 px-8">
        <div className="pt-5">
          <img src={Tot} alt="Tot" />
        </div>
        <div>
          
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
