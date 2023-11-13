import React from "react";

import "./Events.css";
import Cards from "./EventCard";
import eventTimeline from "../../assets/event-timeline.png";

const Events = () => {
  return (
    <div className="events flex justify-center items-center flex-col lg:h-[365vh] h-[310vh]">
      <h1 className="text-center blue-main lg:text-[100px] text-[60px]">Events</h1>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-[5rem] gap-[2rem] w-[80%] ">
        {/* <div className="grid-container"> */}
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className="flex flex-col mt-[133px] items-center justify-center">
        
          <h1 className="lg:text-[75px] text-[50px] purple-main  text-center">
            Events
          </h1>
          <h1 className="lg:text-[75px] text-[50px] purple-main relative bottom-8 text-center">
            Timeline
          </h1>
       
        <img className=" mt-4 w-[606px] h-[758px]" src={eventTimeline} alt="" />
      </div>
    </div>
  );
};

export default Events;