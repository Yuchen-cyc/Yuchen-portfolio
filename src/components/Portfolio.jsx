import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";

export default function Portfolio() {
  return (
    <div className='portfolio'>
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slide */}
      <Swiper>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}
