import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./banner.scss"

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Students, Students2, StudentsStudyInLab } from "assets";

export default function Banner() {
    return (
        <div className="banner">
            <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <img className="image-item " src={Students} alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src={Students2} alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src={StudentsStudyInLab} alt="Student" />
                </SwiperSlide>
            </Swiper>
            <div className="banner-info">
                <h3 className="title">SMA Muhammadiyah 4 Yogyakarta</h3>
                <h5 className="motto">Kebersamaan, Disiplin & Prestasi</h5>
            </div>
        </div>
    )
}
