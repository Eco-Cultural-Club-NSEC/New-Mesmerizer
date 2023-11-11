import React from 'react'
import "./Home.css"
import heroLogo from "../../assets/bg-logo-1.png"
import Carousel from 'react-elastic-carousel';
import CarouselCards from '../Carousel/Carousel';
import Slider from 'react-slick';
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
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
};

const Home = () => {
  return (
    <>
      <div className="page1 h-[88vh] flex justify-center items-center flex-col">
        <img src={heroLogo} alt="" className='lg:h-[700px] h-[300px] lg:w-[900px] w-[500px] relative bottom-[50px]' />
        <div className="statistics text-white lg:divide-x-4 flex lg:flex-row flex-col sm:justify-center sm:items-center relative lg:bottom-[120px]">
          <div className='stats flex'>
            <div className="numeroStats lg:text-[65px] text-[45px] mr-2">7000+</div>
            <div className="alphaStats lg:w-[100px] relative top-[31px]">Main Day Footfall</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats text-[65px] ml-7 mr-2">25+</div>
            <div className="alphaStats text-[17px] w-[100px] relative top-[31px]">Major Sponsors</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats text-[65px]  ml-7 mr-2">10+</div>
            <div className="alphaStats w-[100px] relative top-[31px]">Flagship events</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats text-[65px]  ml-7 mr-2">250+</div>
            <div className="alphaStats w-[100px] relative top-[31px]">Event participants</div>
          </div>
        </div>
      </div>
      <div className="page2 h-[92vh] flex justify-center items-center">
        <div className="box1 flex items-center text-yellow-200 justify-center lg:flex-row flex-col lg:mt-0 mt-10">
          <div className="box2 lg:pr-[90px] lg:text-[400px] text-[190px]">
            <p>M</p>
            <div className="box3 lg:text-[75px] text-[35px] relative lg:top-[127px] top-[61px]">
              <p>yth</p>
              <p>agic</p>
              <p>ayhem</p>
            </div>
          </div>
          <div className="para lg:w-[600px] w-[300px] lg:pl-[50px] lg:text-[19px] text-[12px]">
            <p>Mankind has always yearned to etch it’s marks in history. We aspire deeply to leave permanent scars on the earth surface. We engrave on walls, hoist flags on territories, fight wars and shed blood, all to ensure that our names are chanted far and wide. We weave our stories into folk tales and songs, enact our glorious feats in dance and play, we paint out possibilities and scuplt them into shapes. Art has harmonized us, art has given us identity, art has infiltrated our reality to create magic …</p>

            <p>Team Memerizer commemorates this art that has immortalized our legacies for generations with this year’s grand festival! We celebrate the myths- stories and legends and ballads of the yesterday, the magic- intangible, invisible strings of love and grief, pride and pain, life and everything abstract that we are offered, and finally, mayhem- the disastrous chaos that pulls the strings of divine unending fate ….</p>

            <p>Join us in this wondrous occasion and showcase your wild imaginations. Build with us your own story, because with Mesmerizer, the possibilities are endless!!</p>
          </div>
        </div>
      </div>
      <div className="page3 lg:h-[86vh] h-[10vh]">
      </div>
      <div className="page4 h-[125vh] flex justify-center items-center flex-col">
        <div className="artistHeading">
          <h1 className='text-[50px] w-[325px] mt-[10px] text-center'>Previously featured artist</h1>
        </div>
        <Carousel className='mt-[70px] lg:w-[100%] w-[90%]' breakPoints={breakPoints} focusOnSelect={true} enableSwipe={true} enableAutoPlay autoPlaySpeed={1500}>
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
        <Slider {...settings} className='lg:w-[90%] w-[80%]'>
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
          <LogoCards />
        </Slider>
      </div>
      <div className="page6 lg:h-[90vh] h-[60vh] flex justify-center items-center flex-col">
        <img src={wordmark} alt="" className='lg:h-[130px] h-[60px] lg:w-[340px] relative lg:bottom-[90px] ' />
        <p className='text-white lg:w-[50%] w-[90%] lg:text-[19px] text-[10px] lg:mt-0 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat tempora molestiae aliquid atque ratione, eaque iusto tempore consequatur? Reprehenderit, sed, consequatur quibusdam iusto accusamus officia aliquam ea minima eveniet debitis vitae natus voluptate fuga repellendus ipsa fugit delectus recusandae maiores magnam perferendis odio. Deleniti, vero sunt ipsam, facilis itaque illo ullam fugiat quod ducimus saepe ipsum corporis harum natus? Veniam eaque aliquid quasi deleniti dolorem nihil iste ullam officia, molestiae voluptas ea dignissimos, dolorum assumenda laboriosam velit consequatur, consequuntur ex quibusdam quam! Nisi accusamus, dolorum laborum corporis, porro nam sapiente, magni in suscipit eligendi facere. Accusantium, voluptas dicta repellendus voluptatum est quia repellat rem ea minus aliquid animi laboriosam maxime ipsum officia ipsa necessitatibus consectetur reprehenderit enim id nemo nisi numquam. Officiis deserunt ab, </p>
      </div>
    </>


  )
}

export default Home