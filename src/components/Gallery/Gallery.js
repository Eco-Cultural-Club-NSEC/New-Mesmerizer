import React, { useEffect } from "react";
import bgImg from "../../assets/bg-1.png";
import ImageCard2 from "../ImageCard2/ImageCard2";
import "react-responsive-modal/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import ImageCard1 from "../ImageCard1/ImageCard1";
import img1 from "../../data/Images";
import "./Gallery.css";
import "./Gallery2.css";

const Gallery = () => {

  return (
    <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
      <h1 className="flex justify-center items-center p-6 lg:mb-[60px] text-purple-600 lg:text-[50px] text-xl">
        GALLERY
      </h1>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          className="swiper_container"
        >
          {img1.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <ImageCard2 url={e.url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="marquee px-5">
        <ul className="marquee__content">
          {img1.map((e) => {
            return (
              <li className="lg:px-3" key={e.id}>
                <ImageCard1 url={e.url} />
              </li>
            );
          })}
          {img1.map((e) => {
            return (
              <li className="lg:px-3" key={e.id}>
                <ImageCard1 url={e.url} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="marquee px-5">
        <ul className="marquee__content">
          {img1.map((e) => {
            return (
              <li className="lg:px-3" key={e.id}>
                <ImageCard1 url={e.url} />
              </li>
            );
          })}
          {img1.map((e) => {
            return (
              <li className="lg:px-3" key={e.id}>
                <ImageCard1 url={e.url} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
