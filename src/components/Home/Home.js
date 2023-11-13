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
import Chandrabindoo from "../../assets/artist/Chandrabindoo.png";
import Cactus from "../../assets/artist/Cactus.png";
import EPR from "../../assets/artist/EPRIyer.png";
import Fossils from "../../assets/artist/Fossils.png";
import Javed from "../../assets/artist/JavedAli.png";
import KK from "../../assets/artist/KK.png";
import Kunal from "../../assets/artist/KunalGunjawala.png";
import sp1 from "../../assets/sponsors/sp1.png";
import sp2 from "../../assets/sponsors/sp2.png";
import sp3 from "../../assets/sponsors/sp3.png";
import sp4 from "../../assets/sponsors/sp4.png";
import sp5 from "../../assets/sponsors/sp5.png";
import sp6 from "../../assets/sponsors/sp6.png";
import sp7 from "../../assets/sponsors/sp7.png";
import sp8 from "../../assets/sponsors/sp8.png";
import sp9 from "../../assets/sponsors/sp9.png";
import sp10 from "../../assets/sponsors/sp10.png";
import sp11 from "../../assets/sponsors/sp11.png";
import sp12 from "../../assets/sponsors/sp12.png";
import sp13 from "../../assets/sponsors/sp13.png";
import sp14 from "../../assets/sponsors/sp14.png";
import sp15 from "../../assets/sponsors/sp15.png";
import sp16 from "../../assets/sponsors/sp16.png";
import sp17 from "../../assets/sponsors/sp17.png";
import sp18 from "../../assets/sponsors/sp18.png";
import sp19 from "../../assets/sponsors/sp19.png";
import sp20 from "../../assets/sponsors/sp20.png";
import sp21 from "../../assets/sponsors/sp21.png";
import sp22 from "../../assets/sponsors/sp22.png";
import styled from 'styled-components';

const breakPoints = [
  { width: 1, itemsToShow: 1, showArrows: false },
  { width: 550, itemsToShow: 2, showArrows: false },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
]

const settings = {
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Home = () => {
  return (
    <>
      <div className="page1 h-[88vh] flex justify-center items-center flex-col">
        <img src={heroLogo} alt="" className='lg:h-[700px] h-[300px] lg:w-[900px] w-[500px] relative lg:bottom-[120px] lg:top-[-40px] top-[20px]' />
        <div className="statistics text-white lg:divide-x-4 flex lg:flex-row flex-col justify-center items-center relative lg:bottom-[120px] lg:top-[-130px] top-[10px]">
          <div className='stats flex'>
            <div className="numeroStats lg:text-[65px] text-[35px] lg:mr-2">7000+</div>
            <div className="alphaStats lg:w-[100px] w-[42px] lg:text-[17px] text-[10px] relative lg:top-[31px] top-[15px] lg:ml-0 ml-2">Main Day Footfall</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats lg:text-[65px] text-[35px] lg:ml-7 lg:mr-2">25+</div>
            <div className="alphaStats lg:text-[17px] text-[10px] lg:w-[100px] w-[42px] relative lg:top-[31px] top-[15px] lg:ml-0 ml-2">Major Sponsors</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats lg:text-[65px] text-[35px] lg:ml-7 lg:mr-2">10+</div>
            <div className="alphaStats lg:w-[100px] w-[40px] lg:text-[17px] text-[10px] relative lg:top-[31px] top-[15px] lg:ml-0 ml-2">Flagship events</div>
          </div>
          <div className='stats flex'>
            <div className="numeroStats lg:text-[65px] text-[35px] lg:ml-7 lg:mr-2">250+</div>
            <div className="alphaStats lg:w-[100px] w-[40px] lg:text-[17px] text-[10px] relative lg:top-[31px] top-[15px] lg:ml-0 ml-2">Event participants</div>
          </div>
        </div>
      </div>
      <div className="page2 h-[92vh] flex justify-center items-center" style={{ backgroundColor: "#000" }}>
        <div className="box1 flex items-center justify-center lg:flex-row flex-col">
          <div className="box2 lg:pr-[90px] lg:text-[400px] text-[150px] relative lg:bottom-0 bottom-[20px]">
            <p className='text-[#FFFF00]' style={{ textShadow: "8px 4px cyan" }}>M</p>
            <div className="box3 lg:text-[75px] text-[28px] ml-3 text-white relative lg:top-[129px] top-[49px]">
              <p>yth</p>
              <p>agic</p>
              <p>ayhem</p>
            </div>
          </div>
          <div className="para lg:w-[620px] w-[300px] lg:pl-[50px] lg:text-[19px] text-[12px] text-white relative lg:bottom-0 bottom-[40px]">
            <p>Mankind has always yearned to etch it’s marks in history. We aspire deeply to leave permanent scars on the earth surface. We engrave on walls, hoist flags on territories, fight wars and shed blood, all to ensure that our names are chanted far and wide. We weave our stories into folk tales and songs, enact our glorious feats in dance and play, we paint out possibilities and scuplt them into shapes. Art has harmonized us, art has given us identity, art has infiltrated our reality to create magic …</p>

            <p>Team Memerizer commemorates this art that has immortalized our legacies for generations with this year’s grand festival! We celebrate the myths- stories and legends and ballads of the yesterday, the magic- intangible, invisible strings of love and grief, pride and pain, life and everything abstract that we are offered, and finally, mayhem- the disastrous chaos that pulls the strings of divine unending fate ….</p>

            <p>Join us in this wondrous occasion and showcase your wild imaginations. Build with us your own story, because with Mesmerizer, the possibilities are endless!!</p>
          </div>
        </div>
      </div>
      <div className="page3 lg:h-[86vh] h-[20vh]">
      </div>
      <div className="page4 lg:h-[100vh] h-[80vh] flex justify-center items-center flex-col">
        <div className="artistHeading">
          <h1 className='lg:text-[50px] text-[30px] w-[325px] lg:mt-[10px] mt-3 text-center text-white' style={{ textShadow: "1px 4px #000, 1px 6px #FF00CC" }}>Previously featured artist</h1>
        </div>
        <Carousel className='mt-[70px] lg:w-[100px] w-[100%]' breakPoints={breakPoints} focusOnSelect={true} enableSwipe={true} enableAutoPlay autoPlaySpeed={3000} disableArrowsOnEnd={true} enableTilt={true} style={{ width: "90%" }}>
          <CarouselCards img={Chandrabindoo} name={"Chandrabindoo"} />
          <CarouselCards img={Cactus} name={"Cactus"} />
          <CarouselCards img={Fossils} name={"Fossils"} />
          <CarouselCards img={KK} name={"KK"} />
          <CarouselCards img={Javed} name={"Javed Ali"} />
          <CarouselCards img={Kunal} name={"Kunal Gunjawala"} />
          <CarouselCards img={EPR} name={"EPR Iyer"} />
        </Carousel>
      </div>
      <div className="page5 lg:h-[40vh] h-[27vh] flex items-center justify-center">
        {/* <Slider {...settings} className='lg:w-[95%] w-[95%]'>
          <LogoCards img={sp1} />
          <LogoCards img={sp2} />
          <LogoCards img={sp3} />
          <LogoCards img={sp4} />
          <LogoCards img={sp5} />
          <LogoCards img={sp6} />
          <LogoCards img={sp7} />
          <LogoCards img={sp8} />
          <LogoCards img={sp9} />
          <LogoCards img={sp10} />
          <LogoCards img={sp11} />
          <LogoCards img={sp12} />
          <LogoCards img={sp13} />
          <LogoCards img={sp14} />
          <LogoCards img={sp15} />
          <LogoCards img={sp16} />
          <LogoCards img={sp17} />
          <LogoCards img={sp18} />
          <LogoCards img={sp19} />
          <LogoCards img={sp20} />
          <LogoCards img={sp21} />
          <LogoCards img={sp22} />
        </Slider> */}
        <div className="marquee">
          <div className="marquee__content flex justify-center px-[20px] ">
            <LogoCards img={sp1} />
            <LogoCards img={sp2} />
            <LogoCards img={sp3} />
            <LogoCards img={sp4} />
            <LogoCards img={sp5} />
            <LogoCards img={sp6} />
            <LogoCards img={sp7} />
            <LogoCards img={sp8} />
            <LogoCards img={sp9} />
            <LogoCards img={sp10} />
            <LogoCards img={sp11} />
            <LogoCards img={sp12} />
            <LogoCards img={sp13} />
            <LogoCards img={sp14} />
            <LogoCards img={sp15} />
            <LogoCards img={sp16} />
            <LogoCards img={sp17} />
            <LogoCards img={sp18} />
            <LogoCards img={sp19} />
            <LogoCards img={sp20} />
            <LogoCards img={sp21} />
            <LogoCards img={sp22} />
          </div>
        </div>
      </div>
      <div className="page6 lg:h-[90vh] h-[60vh] flex justify-center items-center flex-col">
        <img src={wordmark} alt="" className='lg:h-[130px] h-[60px] lg:w-[340px] relative lg:bottom-[60px] ' />
        <p className='text-white lg:w-[50%] w-[90%] lg:text-[19px] text-[10px] lg:mt-0 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat tempora molestiae aliquid atque ratione, eaque iusto tempore consequatur? Reprehenderit, sed, consequatur quibusdam iusto accusamus officia aliquam ea minima eveniet debitis vitae natus voluptate fuga repellendus ipsa fugit delectus recusandae maiores magnam perferendis odio. Deleniti, vero sunt ipsam, facilis itaque illo ullam fugiat quod ducimus saepe ipsum corporis harum natus? Veniam eaque aliquid quasi deleniti dolorem nihil iste ullam officia, molestiae voluptas ea dignissimos, dolorum assumenda laboriosam velit consequatur, consequuntur ex quibusdam quam! Nisi accusamus, dolorum laborum corporis, porro nam sapiente, magni in suscipit eligendi facere. Accusantium, voluptas dicta repellendus voluptatum est quia repellat rem ea minus aliquid animi laboriosam maxime ipsum officia ipsa necessitatibus consectetur reprehenderit enim id nemo nisi numquam. Officiis deserunt ab, </p>
      </div>
    </>


  )
}

export default Home