import React, { Component } from 'react'
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
import SectionTeaser from "../components/SectionTeaser";
import SectionTimeline from "../components/SectionTimeline";
import SectionFooter from "../components/SectionFooter";

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);

export default class Beranda extends Component {
    render() {
        return (
            <>    
            <Swiper 
                direction={'vertical'} 
                slidesPerView={1}                 
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
                    <SwiperSlide>
                        <SectionTeaser />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SectionTimeline />    
                    </SwiperSlide>  
                    <SwiperSlide>
                        <SectionFooter />    
                    </SwiperSlide>       
            </Swiper>
            </>
        )
    }
}
