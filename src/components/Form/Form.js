import React, { useState } from "react";
import Registration from "./parts/Registration";
import Payment from "./parts/Payment";
import Confirmation from "./parts/Confirmation";
import './Form.css'

const Form = () => {
  const [page, setPage] = useState(0);
  const buttonTitles = ["Confirm and Pay", "Confirm", "Back"];
  const pageDisplay = () => {
    if (page === 0) {
      return <Registration />;
    } else if (page === 1) {
      return <Registration />;
    } else if (page === 3) {
      return <Registration />;
    }
  };
  return (
    <div className="form flex justify-center items-center flex-col border border-red-500 h-full w-[550px] p-10 rounded-xl">
      <p className="title text-[30px] text-white">Registration form</p>
      <div className="progressBar mt-4">
        <div style={{width: page===0 ? "33.33%" : page===1 ? "66.6%" : "100%" }}></div>
      </div>
      <div className="progressTitles mt-4">
        <div>

        </div>
      </div>
      <div className="formContent">{pageDisplay()}</div>
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
        disabled={page>3}
        style={{ boxShadow: "3px 3px yellow" }}
        className="text-black bg-black-500 mt-5 bg-cyan-400 font-semibold lg:px-6 px-3 lg:py-2 py-1 rounded-lg relative lg:left-0 left-[-10px] lg:bottom-[7px] bottom-[3px] lg:text-[18px] text-[14px]"
      >
        {buttonTitles[page]}
      </button>
    </div>
  );
};

export default Form;
