import React, { useState } from "react";
import Registration from "./parts/Registration";
import Payment from "./parts/Payment";
import Confirmation from "./parts/Confirmation";

const Form = () => {
  const [page, setPage] = useState(0);
  const buttonTitles = ["Confirm and Pay", "Confirm", "Back"];
  const pageDisplay = () => {
    if (page === 0) {
      return <Registration />;
    } else if (page === 1) {
      return <Payment />;
    } else if (page === 3) {
      return <Confirmation/>
    }
  };
  return (
    <div className="form">
      <div className="progressBar"></div>
      <div className="formContent">{pageDisplay()}</div>
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
        className="text-white bg-black-500"
      >
        {buttonTitles[page]}
      </button>
    </div>
  );
};

export default Form;
