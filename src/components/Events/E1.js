import React from "react";
import "./Events.css";
import demoImage from "../../assets/demo-event-image.png";

const E1 = () => {
  return (
    <div className="individual-event h-[200vh]">
      <div className="flex justify-center items-center">
        <img
          className=" w-[1112px] h-[392px] mt-[100px]"
          src={demoImage}
          alt=""
        />
      </div>

      <h1 className="mt-5 purple-main text-[70px] align-middle">Western Mistique</h1>
      <div className="flex flex-col mt-4">
        <div className="flex justify-between">
          <div className=" px-3 flex flex-col ml-[70px]">
            <span className="font-eSporta">Event Guidelines</span>
            <ol className="mt-2">
              <li>1.This is a western solo dance competition</li>
              <li>2.This is an on stage competition</li>
            </ol>
          </div>
          <div className="px-3 flex flex-col  mr-[140px]">
            <span>Coordinators</span>
            <ol className="mt-1">
              <li>Sinjan Mitra - +91 123456789</li>
              <li>Utsa Puryakasta - +91 123456789</li>
            </ol>
          </div>
        </div>

        <div className="flex justify-between m-4">
          <div className=" top-[120px] relative ml-[70px] flex flex-col">
            <span>Details</span>
            <ol>
              <li>Date:</li>
              <li>Time:</li>
              <li>Venue:</li>
            </ol>
          </div>
          <div className=" px-3 flex flex-col mr-[226px]">
            <span>Deadline</span>
            <p className="text-red-600 text-[40px]">27th March 2023</p>
            <button className="ind-event-btn text-[37px] w-[360px] h-[60px] mt-10 text-black font-bold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E1;
