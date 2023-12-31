import React, { useEffect } from "react";
import "./Events.css";
import demoImage from "../../assets/demo-event-image.png";

const E1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="individual-event flex flex-col justify-center items-center lg:h-[165vh] h-[140vh]">
      <div className="flex justify-center items-center">
        <img
          className=" lg:w-[1112px] lg:h-[392px] w-[250px] h-[110px] mt-4"
          src={demoImage}
          alt="demoimage"
        />
      </div>
      <h1 className="mt-5 purple-main lg:text-[70px] text-[26px] align-middle">
        Western Mistique
      </h1>
      <div className=" flex flex-col lg:flex placeholder:mt-4 lg:w-full w-80">
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className=" px-3 flex flex-col lg:ml-[70px] ml-[10px]">
            <span className=" lg:text-[63px] lg:mt-0 mt-4 text-[20px]">
              Event Guidelines
            </span>
            <ol className="mt-2 lg:text-[30px] text-[15px]">
              <li>1.This is a western solo dance competition</li>
              <li>2.This is an on stage competition</li>
            </ol>
          </div>
          <div className="px-3 flex flex-col ml-[10px] lg:mr-[140px]">
            <span className="lg:text-[63px] text-[20px] lg:mt-0 mt-3 ">
              Coordinators
            </span>
            <ol className="mt-1 lg:text-[30px] text-[15px]">
              <li>Sinjan Mitra - +91 123456789</li>
              <li>Utsa Puryakasta - +91 123456789</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between m-2">
          <div className=" lg:top-[250px] relative lg:ml-[70px] ml-[10px]  flex flex-col">
            <span className="lg:text-[63px] text-[20px]">Details</span>
            <ol className="mt-1 lg:text-[30px] text-[15px]">
              <li>
                <div className="flex space-x-4">
                  <div className="flex-none font-bold">Date:</div>
                  <div className="flex-none">17th January,2024</div>
                </div>
              </li>
              <li>
              <div className="flex space-x-4">
                  <div className="flex-none font-bold">Time:</div>
                  <div className="flex-none">10:00 AM</div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <div className="flex-none font-bold">Venue:</div>
                  <div className="flex-none">College Campus</div>
                </div>
              </li>
            </ol>
          </div>
          <div className="px-2 flex flex-col lg:mr-[268px]">
            <span className="lg:text-[63px] text-[20px] lg:mt-0 mt-3">
              Deadline
            </span>
            <p style={{color:'red'}} className="font-bold lg:text-[40px] text-[20px]">
              27th March 2023
            </p>
            <div className="flex flex-col items-start">
              <span className="lg:text-[63px] text-[20px] mt-3">Jury</span>
              <div className="flex space-x-10 mt-2 lg:mx-2">
                <div className="flex flex-col justify-center items-center  ">
                  <img
                    className="rounded-full lg:h-[130px] lg:w-[130px]  h-[80px] w-[80px]"
                    src="https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
                    alt=""
                  />
                  <div className="lg:w-[134px] w-[54px]">
                  <p className="whitespace-normal lg: mt-[4px] lg:text-[24px] text-white text-center">
                      Abhinil Nath
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <img
                    className="rounded-full lg:h-[130px] lg:w-[130px] h-[80px] w-[80px]"
                    src="https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
                    alt=""
                  />
                  <div className="lg:w-[134px] w-[54px] ">
                    <p className="whitespace-normal lg: mt-[4px] lg:text-[24px] text-white text-center">
                      Rajit Dutta
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="ind-event-btn lg:text-[37px] text-[20px] lg:w-[360px] w-[150px] lg:h-[60px] lg:mt-10 mt-3 text-black font-bold">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col  lg:mr-[600px] lg:mt-[30px] mt-[35px] lg:px-0 px-5">
        <span style={{color:'red'}} className="lg:text-4xl text-1xl ">PARTICIPANTS MUST REACH 30 MINUTES PRIOR TO THE EVENT</span>
        <div className="flex text-white space-x-2 mt-4 lg:px-0 px-2 lg:text-2xl text-sm">
          <p>&bull;</p>
          <p>All participants must bring their ticket to get the entry to the event.</p>
        </div>
        
      </div>
    </div>
  );
};

export default E1;
