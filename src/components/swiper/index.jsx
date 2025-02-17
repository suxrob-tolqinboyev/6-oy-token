import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./src/assets/images/image.png" alt="" /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
