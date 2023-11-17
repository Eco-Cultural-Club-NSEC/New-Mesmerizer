import React, { useEffect } from "react";
import "./Events.css";
import demoImage from "../../assets/demo-event-image.png";

const E1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="individual-event flex flex-col justify-center items-center lg:h-[165vh] h-[100vh]">
      <div className="flex justify-center items-center">
        <img
          className=" lg:w-[1112px] lg:h-[392px] w-[250px] h-[110px] mt-4"
          src={demoImage}
          alt=""
        />
      </div>
      <h1 className="mt-5 purple-main lg:text-[70px] text-[26px] align-middle">Western Mistique</h1>
      <div className=" flex flex-col lg:flex placeholder:mt-4 lg:w-full w-80">
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className=" px-3 flex flex-col lg:ml-[70px] ml-[10px]">
            <span className=" lg:text-[63px] lg:mt-0 mt-4 text-[20px]">Event Guidelines</span>
            <ol className="mt-2 lg:text-[30px] text-[15px]">
              <li>1.This is a western solo dance competition</li>
              <li>2.This is an on stage competition</li>
            </ol>
          </div>
          <div className="px-3 flex flex-col ml-[10px] lg:mr-[140px]">
            <span className="lg:text-[63px] text-[20px] lg:mt-0 mt-3 ">Coordinators</span>
            <ol className="mt-1 lg:text-[30px] text-[15px]">
              <li>Sinjan Mitra - +91 123456789</li>
              <li>Utsa Puryakasta - +91 123456789</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between m-4">
          <div className=" lg:top-[120px] relative lg:ml-[70px] ml-[10px]  flex flex-col">
            <span className="lg:text-[63px] text-[20px]">Details</span>
            <ol className="mt-1 lg:text-[30px] text-[15px]">
              <li>Date:</li>
              <li>Time:</li>
              <li>Venue:</li>
            </ol>
          </div>
          <div className=" px-3 flex flex-col lg:mr-[249px]">
            <span className="lg:text-[63px] text-[20px] lg:mt-0 mt-3">Deadline</span>
            <p className="text-red-600 lg:text-[40px] text-[20px]" >27th March 2023</p>
            <button className="ind-event-btn lg:text-[37px] text-[20px] lg:w-[360px] w-[100px] lg:h-[60px] lg:mt-10 mt-3 text-black font-bold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E1;
