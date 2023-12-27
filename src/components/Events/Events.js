import React from "react";

import "./Events.css";
import Cards from "./EventCard";
import eventTimeline from "../../assets/event-timeline.png";

const Events = () => {
  return (
    <div className="events flex justify-center items-center flex-col lg:h-[420vh] h-[830vh]">
      <h1 className="text-center blue-main lg:text-[100px] text-[60px]">Events</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[5rem] gap-[2rem] w-[80%] ">
        {/* <div className="grid-container"> */}
        <Cards eventName = "mystical_controversy" imgURL ="https://i.ibb.co/2FZRXyt/Event-1.webp" />
        <Cards eventName = "enchanted_legends" imgURL ="https://i.ibb.co/wJ2sqq5/Event-2.webp" />
        <Cards eventName = "fantasia_flicks" imgURL = "https://i.ibb.co/0QTt8DT/Event-3.webp" />
        <Cards eventName = "spellbound_sagas" imgURL ="https://i.ibb.co/3yVNyr7/Event-4.webp"/>
        <Cards eventName = "artistic_odyssey" imgURL ="https://i.ibb.co/ThmXNxF/Event-5.webp" />
        <Cards eventName = "mythicon" imgURL="https://i.ibb.co/PTfpFXT/Event-6.webp" />
        <Cards eventName = "rhythmic_wizardry" imgURL ="https://i.ibb.co/yq2M2BC/Event-7.webp"/>
        <Cards eventName = "mridangam" imgURL ="https://i.ibb.co/cFF1knN/Event-8.webp"/>
        <Cards eventName = "mayhem_showdown" imgURL ="https://i.ibb.co/pdbn3Kd/Event-9.webp" />
        <Cards eventName = "western_mystique" imgURL ="https://i.ibb.co/CQSPW7P/Event-10.webp" />
        <Cards eventName = "sorcerous_solo" imgURL ="https://i.ibb.co/sRJJYFL/Event-11.webp" />
        <Cards eventName = "enchanted_ensemble" imgURL ="https://i.ibb.co/tb9vcGZ/Event-12.webp" />
      </div>

      <div className="flex flex-col lg:mt-[133px] mt-10 items-center justify-center">
        
          <h1 className="lg:text-[75px] text-[50px] purple-main  text-center">
            Events
          </h1>
          <h1 className="lg:text-[75px] text-[50px] purple-main relative bottom-8 text-center">
            Timeline
          </h1>
       
        <img className=" mt-4 lg:w-[606px] w-[330px] lg:h-[758px] " src={eventTimeline} alt="eventtimeline" />
      </div>
    </div>
  );
};

export default Events;
