import React, {useContext} from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Ecommerce from '../img/ecommerce.png';
import Hoc from '../img/hoc.png';
import Musicapp from '../img/musicapp.png';
import Sidebar from '../img/sidebar.png';
import { themeContext } from "../Context";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
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
