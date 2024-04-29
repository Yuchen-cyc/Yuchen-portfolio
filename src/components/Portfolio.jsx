import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Ecommerce from '../img/ecommerce.png'
import Hoc from '../img/hoc.png'
import Musicapp from '../img/musicapp.png'
import Sidebar from '../img/sidebar.png'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slide */}
      <Swiper
        spaceBetween={-70}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
