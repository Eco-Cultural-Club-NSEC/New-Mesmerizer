import React from 'react'

const LogoCards = (props) => {
  return (
    <img src={props.img} alt="logocard" loading='lazy' className='lg:h-[180px] h-[100px] lg:w-[300px] w-[200px] lg:mx-[20px] lg:px-[40px] mx-[30px] grayscale hover:grayscale-0 cursor-pointer' />
  )
}

export default LogoCards
