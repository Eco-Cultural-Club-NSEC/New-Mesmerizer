import React, { useState } from "react";
import bgImg from "../../assets/bg-1.png";
import ImageCard2 from "../ImageCard2/ImageCard2";
import "react-responsive-modal/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ImageCard1 from "../ImageCard1/ImageCard1";
import img1 from "../../data/Images";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
      <h1 className="flex justify-center items-center p-6 lg:mb-[60px] text-purple-600 lg:text-[50px] text-xl">
        GALLERY
      </h1>
      <div className=" pl-[50px] lg:pl-[100px]">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
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
          className="mySwiper"
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
