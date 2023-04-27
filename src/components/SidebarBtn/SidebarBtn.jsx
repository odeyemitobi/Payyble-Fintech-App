import React from "react";
import "../SidebarBtn/SidebarBtn.css";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SidebarBtn(side) {
 // const handleStyle = () => {
   // document.body.style.overflow = "auto"; 
 // };

  return (
    <>
      {!side.isNew ? (
        <div className="pt-[2rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B98] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="#9B9B98"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.125 3.125H11.4583V11.4583H3.125V3.125ZM3.125 13.5417H11.4583V21.875H3.125V13.5417ZM13.5417 3.125H21.875V11.4583H13.5417V3.125ZM13.5417 13.5417H21.875V21.875H13.5417V13.5417ZM15.625 5.20833V9.375H19.7917V5.20833H15.625ZM15.625 15.625V19.7917H19.7917V15.625H15.625ZM5.20833 5.20833V9.375H9.375V5.20833H5.20833ZM5.20833 15.625V19.7917H9.375V15.625H5.20833Z" />
            </svg>
            <p className="ml-3">Dashboard</p>
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">My Account</p>
            <div className="mt-1 ml-6">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">Wallet</p>
          </NavLink>
          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">Transactions</p>
          </NavLink>
          <NavLink
            to="/fund"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">Fund Transfer</p>
          </NavLink>
          <NavLink
            to="/deposit"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">Deposit</p>
            <div className="mt-1 ml-6">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>
          <NavLink
            to="/withdraw"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">Withdraw</p>
            <div className="mt-1 ml-6">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>
          <NavLink
            to="/invoice"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">Invoice</p>
            <div className="mt-1 ml-6">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SidebarBtn;
