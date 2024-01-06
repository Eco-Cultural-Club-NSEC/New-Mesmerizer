import React, { useEffect } from "react";
import "./Events.css";
import demoImage from "../../assets/demo-event-image.png";
import { useNavigate } from "react-router-dom";

const E1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="individual-event flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-center items-center fashion-show lg:h-[600px] lg:w-[1000px] h-[200px] w-[300px] mt-4">
        {/* <img
          className=" lg:w-[1112px] lg:h-[392px] w-[250px] h-[110px] mt-4"
          src={demoImage}
          alt="demoimage"
        /> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-5 purple-main lg:text-[70px] text-[26px] align-middle">
          Mythicon
        </h1>
        <h2 className="align middle lg:text-[25px] text-[20px] text-white">
          Fashion Show/Cosplay
        </h2>
      </div>
      <div className=" flex flex-col lg:flex placeholder:mt-4 lg:w-full w-80">
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className=" px-3 flex flex-col lg:ml-[70px] ml-[10px]">
            <span className=" lg:text-[63px] lg:mt-0 mt-4 text-[20px]">
              Event Guidelines
            </span>
            <div className="mt-2">
              <p className="lg:text-[35px] text-[20px] text-white">Fashion Show</p>
              <ol className="mt-2 lg:text-[25px] text-[15px]">
              // <li>
              //   1. <b>Event Theme :</b> Open
              // </li>
              <li>
                1. <b>Participants :</b> 9-10 participants per team, strictly
                from the same college.
              </li>
              <li>
                2. <b>Rounds :</b> Single-round event, no preliminaries.
              </li>
              <li>
                3. <b>Time Allotment :</b> (10+2) minutes
              </li>
              <li>
                4. <b>Vulgarity Policy :</b> Strict prohibition of vulgarity;
                adherence is mandatory.
              </li>
              <li>
                5. <b>Crossover Teams :</b> Teams must consist solely of
                participants from the same college; no crossover teams are
                allowed.
              </li>
              <li>
                6. <b>Dress and Makeup Room :</b> Dedicated space provided for
                dressing and makeup.
              </li>
              <li>
                7. <b>Note :</b> Rules are subject to change at the discretion
                of the Organizing Committee.
              </li>
            </ol>
            </div>
            <div className="mt-2">
              <p className="lg:text-[35px] text-[20px] text-white">Cosplay</p>
              <ol className="mt-2 lg:text-[25px] text-[15px]">
                // <li>
                //   1. <b>Theme :</b> Open
                // </li>
                <li>
                  1. <b>Participants :</b> Solo
                </li>
                <li>
                  2. <b>Rounds :</b> 1 Round only, no preliminaries
                </li>
                <li>
                  3. <b>Time Allotment :</b> No Time Allotment
                </li>
                <li>
                  4. <b>Vulgarity Policy :</b> Strictly no vulgarity allowed.
                </li>
                <li>
                  5. <b>Dress and Makeup Room :</b> A dedicated dress and makeup
                  room will be provided
                </li>
                <li>
                  6. <b>Note :</b> Rules are subject to change at the discretion
                  of the Organizing Committee.
                </li>
              </ol>
            </div>
          </div>
          <div className="px-3 flex flex-col lg:justify-between ml-[10px] lg:mr-[140px] ">
            <div className="">
              <span className="lg:text-[63px] text-[20px] lg:mt-0 mt-3 ">
                Coordinators
              </span>
              <ol className="mt-1 lg:text-[25px] text-[15px]">
                <li>Yash Shaw - +91 74395 58508</li>
                <li>Jaisal Joshi - +91 74394 25842</li>
              </ol>
            </div>
            <div className="">
              <span className="lg:text-[63px] text-[20px] lg:mt-0 mt-3 ">
                Registration fees
              </span>
              <p className="lg:text-[35px] text-[15px]">
                <p className="text-[#FF0000]">₹250 for team of 9-10</p>
                <p className="text-[#FF0000]">₹100 for 1</p>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between m-2">
          <div className=" lg:top-[250px] relative lg:ml-[70px] ml-[10px]  flex flex-col">
            <span className="lg:text-[63px] text-[20px]">Details</span>
            <ol className="mt-1 lg:text-[25px] text-[15px]">
              <li>
                <div className="flex space-x-4">
                  <div className="flex-none font-bold">Date:</div>
                  <div className="flex-none">14th January, 2024</div>
                </div>
              </li>
              {/* <li>
                <div className="flex space-x-4">
                  <div className="flex-none font-bold">Time:</div>
                  <div className="flex-none">10:00 AM</div>
                </div>
              </li> */}
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
            <p
              style={{ color: "red" }}
              className="font-bold lg:text-[40px] text-[20px]"
            >
              10th January, 2024
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
                      N/A
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
                      N/A
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ind-event-btn lg:text-[37px] text-[20px] lg:w-[360px] w-[150px] lg:h-[60px] lg:mt-10 mt-3 text-black font-bold"
              onClick={() => {
                navigate(`/events/eventsRegMulti`);
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col  lg:mr-[600px] lg:mt-[30px] mt-[35px] lg:px-4 px-5 lg:mb-[20px] mb-[10px]">
        <span style={{ color: "red" }} className="lg:text-4xl text-1xl ">
          PARTICIPANTS MUST REACH 30 MINUTES PRIOR TO THE EVENT
        </span>
        <div className="flex text-white space-x-2 mt-4 lg:px-0 px-2 lg:text-2xl text-sm">
          <p>&bull;</p>
          <p>
            All participants must bring their ticket to get the entry to the
            event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default E1;
