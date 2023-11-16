import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Cards = () => {

  const navigate = useNavigate();

  return (
    <div className='flex items-center flex-col mt-[30px] '>
        <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" />
        <button className='btn-event cursor-pointer lg:text-[23px] text-[15px] lg:w-[39vh] w-[15vh] mt-3 bg-white border-none rounded-md p-1' onClick={()=>{
          navigate('/events/1')
        }}>Register</button>  
    </div>
  )
}

export default Cards