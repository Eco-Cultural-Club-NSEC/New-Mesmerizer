import React, { useState } from "react";
import "./common.css";
import { singleRegistration } from "../../../utils/regFunctions";
import qrcode from "../../../assets/QR.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { validation } from "../../../utils/validation";

// const schema = yup.object().shape({
//   name: yup.string().required("First Name should be required please"),
//   collegeName: yup.string().required(),
//   email: yup.string().email().required(),
//   WANumber: yup.number().positive().integer().required(),
//   altNumber: yup.number().positive().integer(),
// });

const Registration = () => {
  const [inputList, setinputList] = useState([{ Name: "" }]);
  const [collegeName, setCollegeName] = useState("");
  const [waNumber, setwaNumber] = useState("");
  const [altNumber, setAltNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [ss, setSS] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleEvent = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleName = (e) => {
    setinputList(e.target.value);
  };

  const handleCollegeName = (e) => {
    setCollegeName(e.target.value);
  };

  const handleWANumber = (e) => {
    setwaNumber(e.target.value);
  };

  const handleAltNumber = (e) => {
    setAltNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailID(e.target.value);
  };

  let userInfo = {
    Name: inputList,
    Event: selectedValue,
    Alt_Number: altNumber,
    Whatsapp_Number: waNumber,
    Email: emailID,
    College_Name: collegeName,
    Payment_id: "1234567",
    payment_verified: false,
    entry: false,
  };

  const handleSS = (e) => {
    setSS(e.target.files[0]);
  };

  // const { handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const submitForm = (userInfo) => {
  //   console.log(userInfo);
  // };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (
      !validation(userInfo.Name) &&
      !validation(userInfo.College_Name) &&
      !validation(userInfo.Payment_id) &&
      !validation(userInfo.Email) &&
      !validation(userInfo.Whatsapp_Number)
    ) {
      toast("Khankir chele form bhora sekh!!", { icon: "😡" });
      return;
    }
    const data = await singleRegistration(userInfo, ss);
    toast("We will reach out to you soon!!", { icon: "🚀" });
    console.log(data);
    // console.log(errors);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        className="text-white flex justify-center items-center flex-col"
        // onSubmit={handleSubmit(submitForm)}
      >
        <p className="text-[30px] mb-[50px] font-bold">Registration form</p>
        <div className="flex justify-between items-center flex-row w-[100%] mb-[50px]">
          <div>
            <p>For any issues contact:</p>
            <p>Annesha Roy(Treasurer)</p>
            <p>8514012811</p>
            <p>8514012811@okbizaxis</p>
          </div>
          <img src={qrcode} alt="QR code" className="h[150px] w-[150px]" />
        </div>
        <label className="text-white flex items-start flex-col mb-5 text-[18px]">
          Event
          <div className="flex">
            <select
              id="dropdown"
              value={selectedValue}
              onChange={handleEvent}
              className="text-white text-[15px] w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
            >
              <option value="" className="text-white">
                Select...
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="flex items-start flex-col mb-5 text-[18px]">
          Name
          <div className="flex">
            <input
              type="text"
              className="text-white w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
              placeholder="Enter your name"
              name="name"
              onChange={(e) => handleName(e)}
              required
            />
            {/* <p> {errors.name?.message} </p> */}
          </div>
        </label>
        <label className="flex items-start flex-col mb-5 text-[18px]">
          College Name
          <input
            type="text"
            className="text-white w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
            placeholder="Enter your college name"
            name="collegeName"
            onChange={(e) => handleCollegeName(e)}
            required
          />
          {/* <p> {errors.collegeName?.message} </p> */}
        </label>
        <label className="flex items-start flex-col mb-5 text-[18px]">
          WhatsApp number
          <input
            type="number"
            className="text-white w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
            placeholder="Enter your WhatsApp number"
            name="WANumber"
            onChange={(e) => handleWANumber(e)}
            required
          />
          {/* <p> {errors.WANumber?.message} </p> */}
        </label>
        <label className="flex items-start flex-col mb-5 text-[18px]">
          Alternate contact number
          <input
            type="number"
            className="text-white w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
            placeholder="Enter your alternate number"
            name="altNumber"
            onChange={(e) => handleAltNumber(e)}
            required
          />
          {/* <p> {errors.altNumber?.message} </p> */}
        </label>
        <label className="flex items-start flex-col mb-5 text-[18px]">
          Email address
          <input
            type="email"
            className="text-white w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
            placeholder="Enter your email address"
            name="email"
            onChange={(e) => handleEmail(e)}
            required
          />
          {/* <p> {errors.email?.message} </p> */}
        </label>
        <label className="flex items-start flex-col">
          Upload Image:
          <input
            type="file"
            className="text-white"
            name="email"
            onChange={handleSS}
          />
        </label>
        <div className="flex items-start flex-col mt-[30px]">
          <li>Participant must be a present college student.</li>
          <li>The registration fee amount is non-refundable.</li>
        </div>
        <button
          onClick={handleSubmitForm}
          style={{ boxShadow: "3px 3px yellow" }}
          className="text-black bg-black-500 mt-5 bg-cyan-400 font-semibold lg:px-6 px-3 lg:py-2 py-1 rounded-lg relative lg:left-0 left-[-10px] lg:bottom-[7px] bottom-[3px] lg:text-[18px] text-[14px]"
        >
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Registration;
