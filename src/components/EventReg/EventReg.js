import React from 'react'
import demoImage from "../../assets/demo-event-image.png";
import "./EventReg.css";
import Form from "../../components/Form/Form"

const EventReg = () => {
  return (
    <div className="events flex justify-center items-center flex-col">
       <div className="flex justify-center items-center">
        <img
          className=" lg:w-[1112px] lg:h-[392px] w-[250px] h-[110px] mt-4"
          src={demoImage}
          alt="demoimage"
        />
      </div>
      <h1 className="mt-5 purple-main lg:text-[70px] text-[26px] align-middle">Western Mistique</h1>
      <Form/>
    </div>
  )
}

export default EventReg
