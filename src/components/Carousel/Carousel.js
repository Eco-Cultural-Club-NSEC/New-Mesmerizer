import React from 'react'

const CarouselCards = (props) => {
  return (
    <div className="carouselCard flex justify-end items-center flex-col">
      <div className='lg:h-[300px] h-[250px] lg:w-[250px] w-[200px]' style={{backgroundImage:`url(${props.img})`, backgroundSize:"cover", backgroundPosition:"center"}}>
    </div>
    <p className='mt-4 text-white lg:text-[25px] text-[15px]' style={{fontFamily:"AcidGrotesk"}}>{props.name}</p>
    </div >
  )
}

export default CarouselCards