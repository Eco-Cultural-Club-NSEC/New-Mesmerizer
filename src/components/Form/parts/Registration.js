import React, { useState } from "react";
import { singleRegistration } from "../../../utils/regFunctions";

const Registration = () => {
  const [inputList, setinputList] = useState([{ Name: "" }]);
  const [collegeName, setCollegeName] = useState("");
  const [waNumber, setwaNumber] = useState("");
  const [altNumber, setAltNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [ss, setSS] = useState();

  const handleName = (e, index) => {
    const value = e.target;
    const list1 = [...inputList];
    list1[index] = value;
    setinputList(list1);
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

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleAddClick = () => {
    setinputList([...inputList, { Name: "" }]);
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
      <label className="flex items-start flex-col">
        Name:
        {inputList.map((x, i) => {
          return (
            <div className="flex">
              <input
                type="text"
                className="text-black"
                name="name"
                onChange={(e) => handleName(e, i)}
              />
              {inputList.length !== 1 && (
                <button onClick={handleRemove}>-</button>
              )}
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>+</button>
              )}
            </div>
          );
        })}
      </label>
      <label className="flex items-start flex-col">
        College Name:
        <input
          type="text"
          className="text-black"
          name="collegeName"
          onChange={handleCollegeName}
        />
      </label>
      <label className="flex items-start flex-col">
        WhatsApp number:
        <input
          type="text"
          className="text-black"
          name="WANumber"
          onChange={handleWANumber}
        />
      </label>
      <label className="flex items-start flex-col">
        Alternate contact number:
        <input
          type="text"
          className="text-black"
          name="altNumber"
          onChange={handleAltNumber}
        />
      </label>
      <label className="flex items-start flex-col">
        Email address:
        <input
          type="text"
          className="text-black"
          name="email"
          onChange={handleEmail}
        />
      </label>
      <label className="flex items-start flex-col">
        Upload Image:
        <input
          type="file"
          className="text-black"
          name="email"
          onChange={handleSS}
        />
      </label>
      <button onClick={handleSubmit}>Click me</button>
    </form>
  );
};

export default Registration;
