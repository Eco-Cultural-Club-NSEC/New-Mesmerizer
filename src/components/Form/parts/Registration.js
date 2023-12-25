import React, { useState } from "react";
import "./common.css";
import { singleRegistration } from "../../../utils/regFunctions";

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
    const value = e.target;
    setinputList(value);
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

  // function to handle input of payment screen shot
  const handleSS = (e) => {
    setSS(e.target.files[0]);
  };

  /*
  data format
    let info = {
      Name: "Kunal Ghosh",
      Event: "testEvent",
      Alt_Number: "123456789",
      Whatsapp_Number: "123456789",
      Email: "test@test.com",
      College_Name: "abc college",
      Payment_id: "1234567",
      payment_verified: false,
      entry:false
    };

    file should be in the format of jpeg,jpg,png

    example function call
    singleRegistration(info,file);

*/

  // example submit
  let info = {
    Name: "Kunal Ghosh",
    Event: "testEvent",
    Alt_Number: "123456789",
    Whatsapp_Number: "123456789",
    Email: "test@test.com",
    College_Name: "abc college",
    Payment_id: "1234567",
    payment_verified: false,
    entry: false,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await singleRegistration(info, ss);
    console.log(data);
  };

  return (
    <form className="text-white flex justify-center items-center flex-col">
      <label className="flex items-start flex-col mb-5 text-[18px]">
        Event
        <div className="flex">
          <select
            id="dropdown"
            value={selectedValue}
            onChange={handleEvent}
            className="text-white text-[15px] w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </label>
      {/* <label className="flex items-start flex-col">
        Upload Image:
        <input
          type="file"
          className="text-black"
          name="email"
          onChange={handleSS}
        />
      </label>
      <button onClick={handleSubmit}>Click me</button> */}
      <label className="flex items-start flex-col mb-5 text-[18px]">
        Name
        <div className="flex">
          <input
            type="text"
            className="text-black w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
            placeholder="Enter your name"
            name="name"
            onChange={(e) => handleName(e)}
          />
        </div>
      </label>
      <label className="flex items-start flex-col mb-5 text-[18px]">
        College Name
        <input
          type="text"
          className="text-black w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
          placeholder="Enter your college name"
          name="collegeName"
          onChange={(e) => handleCollegeName(e)}
        />
      </label>
      <label className="flex items-start flex-col mb-5 text-[18px]">
        WhatsApp number
        <input
          type="text"
          className="text-black w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
          placeholder="Enter your WhatsApp number"
          name="WANumber"
          onChange={(e) => handleWANumber(e)}
        />
      </label>
      <label className="flex items-start flex-col mb-5 text-[18px]">
        Alternate contact number
        <input
          type="text"
          className="text-black w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
          placeholder="Enter your alternate number"
          name="altNumber"
          onChange={(e) => handleAltNumber(e)}
        />
      </label>
      <label className="flex items-start flex-col mb-5 text-[18px]">
        Email address
        <input
          type="text"
          className="text-black w-[420px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
          placeholder="Enter your email address"
          name="email"
          onChange={(e) => handleEmail(e)}
        />
      </label>
      <div className="flex items-start flex-col">
        <li>Participant must be a present college student.</li>
        <li>Registration fee : Rs. 50/- .</li>
        <li>The amount is non-refundable.</li>
      </div>
    </form>
  );
};

export default Registration;
