
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Mousewheel,Pagination
  } from 'swiper/core';

// Components
import SectionIntro from "../components/SectionIntro";
import SectionBidang from "../components/SectionBidang";
import SectionPedomanInfo from "../components/SectionPedomanInfo";

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);

const Beranda =  () => {
  return (
    <>    
    <Swiper 
        direction={'vertical'} 
        slidesPerView={1} 
        spaceBetween={30} 
        mousewheel={true} 
        pagination={{"clickable": true}} className="mySwiper">
            <SwiperSlide>
                <SectionIntro />
            </SwiperSlide>
            <SwiperSlide>
                <SectionBidang />
            </SwiperSlide>
            <SwiperSlide>
                <SectionPedomanInfo />
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>        
    </Swiper>
    </>
  );
};

export default Beranda