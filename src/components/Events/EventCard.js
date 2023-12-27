import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = (props) => {

  const navigate = useNavigate();
  const {eventName,imgURL} = props

  return (
    <div className='flex items-center flex-col mt-[30px] '>
        <img src={imgURL} alt="pic" />
        <button className='btn-event cursor-pointer lg:text-[23px] text-[15px] lg:w-[39vh] w-[15vh] mt-3 bg-white border-none rounded-md p-1' onClick={()=>{
          navigate('/events/1')
        }}><Link to="/events/eventsReg">Register</Link></button>  
    </div>
  )
}

export default Cards