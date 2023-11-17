import React from 'react'
import './ComingSoon.css'
import ComingSoonLogo from "../../assets/comingsoon.png"

const ComingSoon = () => {
  return (
    <div className='h[80vh] hero'>
        <img src={ComingSoonLogo} alt="" className='lg:h-[700px] h-[300px] lg:w-[100%] w-[500px] relative lg:bottom-[120px] lg:top-[-40px] top-[10px]' />
    </div>
  )
}

export default ComingSoon