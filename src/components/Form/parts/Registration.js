import React, { useState } from "react";

const Registration = () => {
  const [inputList, setinputList] = useState([{ Name: "" }]);
  const [collegeName, setCollegeName] = useState([{ Name: "" }]);
  const [waNumber, setwaNumber] = useState([{ Name: "" }]);
  const [altNumber, setAltNumber] = useState([{ Name: "" }]);
  const [emailID, setEmailID] = useState([{ Name: "" }]);

  const handleName = (e, index) => {
    const value = e.target;
    const list1 = [...inputList];
    list1[index] = value;
    setinputList(list1);
  };

  const handleCollegeName = (e, index) => {
    const value = e.target;
    const list2 = [...collegeName];
    list2[index] = value;
    setCollegeName(list2);
  };

  const handleWANumber = (e, index) => {
    const value = e.target;
    const list3 = [...waNumber];
    list3[index] = value;
    setwaNumber(list3);
  };

  const handleAltNumber = (e, index) => {
    const value = e.target;
    const list4 = [...altNumber];
    list4[index] = value;
    setAltNumber(list4);
  };

  const handleEmail = (e, index) => {
    const value = e.target;
    const list5 = [...emailID];
    list5[index] = value;
    setEmailID(list5);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleAddClick = () => {
    setinputList([...inputList, { Name: "" }]);
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
        <input type="text" className="text-black" name="collegeName" onChange={(e) => handleCollegeName(e)} />
      </label>
      <label className="flex items-start flex-col">
        WhatsApp number:
        <input type="text" className="text-black"  name="WANumber" onChange={(e) => handleWANumber(e)} />
      </label>
      <label className="flex items-start flex-col">
        Alternate contact number:
        <input type="text" className="text-black" name="altNumber" onChange={(e) => handleAltNumber(e)} />
      </label>
      <label className="flex items-start flex-col">
        Email address:
        <input type="text" className="text-black" name="email" onChange={(e) => handleEmail(e)} />
      </label>
    </form>
  );
};

export default Registration;
