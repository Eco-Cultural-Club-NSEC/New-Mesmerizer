import React from 'react'
import "./Home.css"
import Carousel from 'react-elastic-carousel';
import CarouselCards from '../Carousel/Carousel';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LogoCards from '../LogoCards/LogoCards';
import wordmark from "../../assets/wordmark.png"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
]

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
};

const Home = () => {
  return (
    <>
      <div className="page1 h-[88vh] flex justify-center items-end">
        <div className="statistics text-white divide-x-4 flex flex-row">
          <div className='stats flex'>
            <div className="numeroStats text-[45px] mr-2">7000+</div>
            <div className="alphaStats w-[100px] relative top-[11px]">Main Day Footfall</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats text-[45px] ml-7 mr-2">25+</div>
            <div className="alphaStats  w-[100px] relative top-[11px]">Major Sponsors</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats text-[45px]  ml-7 mr-2">10+</div>
            <div className="alphaStats  w-[100px] relative top-[11px]">Flagship events</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats text-[45px]  ml-7 mr-2">250+</div>
            <div className="alphaStats  w-[100px] relative top-[11px]">Event participants</div>
          </div>
        </div>
      </div>
      <div className="page2 h-[92vh] flex justify-center items-center">
        <div className="box1 flex items-center text-yellow-200">
          <div className="box2 pr-[90px]">
            <p>M</p>
            <div className="box3">
              <p>yth</p>
              <p>agic</p>
              <p>ayhem</p>
            </div>
          </div>
          <div className="para w-[600px] pl-[50px] text-[19px]">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium alias incidunt ipsum voluptas nemo, dolores quo, voluptate omnis eos commodi aut sapiente odio repellat quia provident? Consectetur ullam magnam sed hic odit nesciunt, alias dolore voluptatibus praesentium architecto tempora quasi rerum quidem fugit quibusdam tempore! Sed expedita nemo natus, nisi temporibus labore doloribus eaque modi molestias, perspiciatis sequi maiores alias neque iste amet reiciendis fugit quas obcaecati similique! Asperiores, rerum, suscipit perferendis non vitae nihil architecto molestias aspernatur, odio fugiat dignissimos debitis sequi unde impedit. Qui, maxime! Numquam eius perspiciatis nisi fugiat eveniet. Tempore fugiat culpa officia dolores enim.</p>
          </div>
        </div>
      </div>
      <div className="page3 h-[86vh]">
      </div>
      <div className="page4 h-[125vh] flex justify-center items-center flex-col">
        <div className="artistHeading">
          <h1 className='text-[50px] w-[325px] mt-[10px] text-center'>Previously featured artist</h1>
        </div>
        <Carousel className='mt-[70px]' breakPoints={breakPoints} focusOnSelect={true} enableSwipe={true} enableAutoPlay autoPlaySpeed={1500}>
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
          <CarouselCards />
        </Carousel>
      </div>
      <div className="page5 h-[40vh] flex items-center justify-center">
        <Slider {...settings} className='w-[90%]'>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
          <LogoCards/>
        </Slider>
      </div>
      <div className="page6 h-[90vh] flex justify-center items-center flex-col">
        <img src={wordmark} alt="" className='h-[400px] w-[500px]' />
        <p className='text-white w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat tempora molestiae aliquid atque ratione, eaque iusto tempore consequatur? Reprehenderit, sed, consequatur quibusdam iusto accusamus officia aliquam ea minima eveniet debitis vitae natus voluptate fuga repellendus ipsa fugit delectus recusandae maiores magnam perferendis odio. Deleniti, vero sunt ipsam, facilis itaque illo ullam fugiat quod ducimus saepe ipsum corporis harum natus? Veniam eaque aliquid quasi deleniti dolorem nihil iste ullam officia, molestiae voluptas ea dignissimos, dolorum assumenda laboriosam velit consequatur, consequuntur ex quibusdam quam! Nisi accusamus, dolorum laborum corporis, porro nam sapiente, magni in suscipit eligendi facere. Accusantium, voluptas dicta repellendus voluptatum est quia repellat rem ea minus aliquid animi laboriosam maxime ipsum officia ipsa necessitatibus consectetur reprehenderit enim id nemo nisi numquam. Officiis deserunt ab, </p>
      </div>
    </>


  )
}

export default Home