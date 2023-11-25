import React from 'react'
import "./Home.css"
import heroLogo from "../../assets/bg-logo-1.webp"
import CarouselCards from '../Carousel/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCards from '../LogoCards/LogoCards';
import wordmark from "../../assets/wordmark.webp"
import Chandrabindoo from "../../assets/artist/Chandrabindoo.webp";
import Cactus from "../../assets/artist/Cactus.webp";
import EPR from "../../assets/artist/EPRIyer.webp";
import Fossils from "../../assets/artist/Fossils.webp";
import Javed from "../../assets/artist/JavedAli.webp";
import KK from "../../assets/artist/KK.webp";
import Kunal from "../../assets/artist/KunalGunjawala.webp";
import sp1 from "../../assets/sponsors/sp1.webp";
import sp2 from "../../assets/sponsors/sp2.webp";
import sp3 from "../../assets/sponsors/sp3.webp";
import sp4 from "../../assets/sponsors/sp4.webp";
import sp5 from "../../assets/sponsors/sp5.webp";
import sp6 from "../../assets/sponsors/sp6.webp";
import sp7 from "../../assets/sponsors/sp7.webp";
import sp8 from "../../assets/sponsors/sp8.webp";
import sp9 from "../../assets/sponsors/sp9.webp";
import sp10 from "../../assets/sponsors/sp10.webp";
import sp11 from "../../assets/sponsors/sp11.webp";
import sp12 from "../../assets/sponsors/sp12.webp";
import sp13 from "../../assets/sponsors/sp13.webp";
import sp14 from "../../assets/sponsors/sp14.webp";
import sp15 from "../../assets/sponsors/sp15.webp";
import sp16 from "../../assets/sponsors/sp16.webp";
import sp17 from "../../assets/sponsors/sp17.webp";
import sp18 from "../../assets/sponsors/sp18.webp";
import sp19 from "../../assets/sponsors/sp19.webp";
import sp20 from "../../assets/sponsors/sp20.webp";
import sp21 from "../../assets/sponsors/sp21.webp";
import sp22 from "../../assets/sponsors/sp22.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const Home = () => {
  return (
    <>
      <div className="page1 h-[88vh] flex justify-center items-center flex-col">
        <img src={heroLogo} alt="" className='lg:h-[472px] h-[260px] lg:w-[780px] w-[340px] relative lg:bottom-[130px] lg:top-[-20px] top-[56px]' />
        <div className="statistics text-white lg:divide-x-4 flex lg:flex-row flex-col justify-center items-center relative lg:bottom-[120px] lg:top-[-10px] top-[10px] lg:mt-0 mt-[100px]">
          <div className="flex lg:divide-x-4 divide-x-2 lg:justify-center justify-between">
            <div className='stats flex'>
              <div className="numeroStats lg:text-[55px] text-[35px] lg:mr-2">7000+</div>
              <div className="alphaStats lg:w-[100px] w-[42px] lg:text-[17px] text-[10px] relative lg:top-[21px] top-[15px] lg:ml-0 ml-2 lg:mr-0 mr-[15px]">Main Day Footfall</div>
            </div>
            <div className='stats flex'>
              <div className="numeroStats lg:text-[55px] text-[35px] lg:ml-7 lg:mr-2 ml-[15px]">30+</div>
              <div className="alphaStats lg:text-[17px] text-[10px] lg:w-[100px] w-[42px] relative lg:top-[21px] top-[15px] lg:ml-0 ml-2">Major Sponsors</div>
            </div>
          </div>
          <div className="flex lg:divide-x-4 divide-x-2 lg:mt-0 mt-4 lg:justify-center justify-between">
            <div className='stats flex'>
              <div className="numeroStats lg:text-[55px] text-[35px] lg:ml-7 lg:mr-2">10+</div>
              <div className="alphaStats lg:w-[100px] w-[40px] lg:text-[17px] text-[10px] relative lg:top-[21px] top-[15px] lg:ml-0 ml-2 lg:mr-0 mr-[15px]">Flagship events</div>
            </div>
            <div className='stats flex'>
              <div className="numeroStats lg:text-[55px] text-[35px] lg:ml-7 lg:mr-2 ml-[15px]">50+</div>
              <div className="alphaStats lg:w-[100px] w-[40px] lg:text-[17px] text-[10px] relative lg:top-[21px] top-[15px] lg:ml-0 ml-2">Colleges Engaged</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page2 h-[92vh] flex justify-center items-center flex-col" style={{ backgroundColor: "#000" }}>
        <p className='theme lg:block hidden text-white w-[90%] text-[20px]'>Theme _______</p>
        <div className="box1 flex items-center justify-center lg:flex-row flex-col">
          <div className="box2 lg:pr-[40px] lg:text-[400px] text-[150px] relative lg:bottom-0 bottom-[20px]">
            <p className='text-[#FFFF00]' style={{ textShadow: "8px 4px cyan" }}>M</p>
            <div className="box3 lg:text-[115px] text-[40px] ml-3 text-white relative lg:top-[114px] top-[46px]">
              <p>yth</p>
              <p className='relative lg:bottom-[74px] bottom-[23px]'>agic</p>
              <p className='relative lg:bottom-[145px] bottom-[43px]'>ayhem</p>
            </div>
          </div>
          <div className="para lg:w-[620px] w-[300px] lg:pl-[50px] lg:text-[19px] text-[12px] text-white relative lg:bottom-0 bottom-[40px]">
            <p>Mankind has always yearned to etch it’s marks in history. We aspire deeply to leave permanent scars on the earth surface. We engrave on walls, hoist flags on territories, fight wars and shed blood, all to ensure that our names are chanted far and wide. We weave our stories into folk tales and songs, enact our glorious feats in dance and play, we paint out possibilities and scuplt them into shapes. Art has harmonized us, art has given us identity, art has infiltrated our reality to create magic …</p>

            <p>Team Memerizer commemorates this art that has immortalized our legacies for generations with this year’s grand festival! We celebrate the myths- stories and legends and ballads of the yesterday, the magic- intangible, invisible strings of love and grief, pride and pain, life and everything abstract that we are offered, and finally, mayhem- the disastrous chaos that pulls the strings of divine unending fate ….</p>
            <br />
            <p>Join us in this wondrous occasion and showcase your wild imaginations. Build with us your own story, because with Mesmerizer, the possibilities are endless!!</p>
          </div>
        </div>
      </div>
      <div className="page3 lg:h-[86vh] h-[20vh]">
      </div>
      <div className="page4 lg:h-[100vh] h-[80vh] flex justify-center items-center flex-col">
        <div className="artistHeading">
          <h1 className='lg:text-[50px] text-[30px] w-[325px] lg:mt-[0px] relative lg:bottom-[50px] bottom-[20px] text-center text-white leading-[3rem]' style={{ textShadow: "1px 4px #000, 1px 6px #FF00CC" }}>Previously featured artists</h1>
        </div>
        {/* <Carousel className='mt-[70px] lg:w-[100px] w-[100%]' breakPoints={breakPoints} focusOnSelect={true} enableSwipe={true} enableAutoPlay autoPlaySpeed={3000} disableArrowsOnEnd={true} enableTilt={true} style={{ width: "90%" }}>
          <CarouselCards img={Chandrabindoo} name={"Chandrabindoo"} />
          <CarouselCards img={Cactus} name={"Cactus"} />
          <CarouselCards img={Fossils} name={"Fossils"} />
          <CarouselCards img={KK} name={"KK"} />
          <CarouselCards img={Javed} name={"Javed Ali"} />
          <CarouselCards img={Kunal} name={"Kunal Gunjawala"} />
          <CarouselCards img={EPR} name={"EPR Iyer"} />
        </Carousel> */}
        <Swiper
          effect={'coverflow'}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="lg:w-[110px]"
        >
          <SwiperSlide><CarouselCards img={Chandrabindoo} name={"Chandrabindoo"} /></SwiperSlide>
          <SwiperSlide><CarouselCards img={Cactus} name={"Cactus"} /></SwiperSlide>
          <SwiperSlide><CarouselCards img={Fossils} name={"Fossils"} /></SwiperSlide>
          <SwiperSlide><CarouselCards img={KK} name={"KK"} /></SwiperSlide>
          <SwiperSlide><CarouselCards img={Javed} name={"Javed Ali"} /></SwiperSlide>
          <SwiperSlide><CarouselCards img={Kunal} name={"Kunal Gunjawala"} /></SwiperSlide>
          <SwiperSlide><CarouselCards img={EPR} name={"EPR Iyer"} /></SwiperSlide>
        </Swiper>
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
          <div className="marquee__content px-[20px] ">
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
            <LogoCards img={sp1} />
            <LogoCards img={sp2} />
            <LogoCards img={sp3} />
            <LogoCards img={sp4} />
            <LogoCards img={sp5} />
            <LogoCards img={sp6} />
          </div>
        </div>
      </div>
      <div className="page6 lg:h-[90vh] h-[60vh] flex justify-center items-center flex-col">
        <img src={wordmark} alt="woodwork" className='lg:h-[160px] h-[60px] lg:w-[380px] relative lg:bottom-[60px] ' />
        <p className='text-white text-center lg:w-[80%] w-[90%] lg:text-[19px] text-[10px] lg:mt-0 mt-10'>Welcome to Mesmerizer, organised by the Netaji Subhash Engineering College the beating heart of Kolkata's cultural scene for 14 spellbinding editions.Picture this: Fossils, KK, Javed Ali, EPR Iyer, Trap, and Stebin Ben - Yep, they've all left their musical imprints here! <br />
          Who's behind the curtain you ask? It's the NSEC Eco Cultural Club,led by a gang of creative masterminds who thrive on teamwork and knows how to party like there's no tomorrow.Our 15th edition in 2024 is all about 'Myth, Magic, and Mayhem,' promising an unforgettable ride through the realms of imagination.
          <br /><br />
          But wait, there's more! It's not just us NSECians cranking up the excitement - we've got a wild mix of talent from colleges across West Bengal, bringing the house down with electrifying dance-offs and fiery debates. Get ready for a frenzy of creativity and camaraderie that'll leave you craving for more. So, mark your calendar, join the chaos, and get ready to be Mesmerized!</p>
      </div>
    </>


  )
}

export default Home
