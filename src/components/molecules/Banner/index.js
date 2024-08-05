import React from 'react';
import dataBanner from "../../../data/dataBanner.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./banner.scss"

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Students, Students2, StudentsStudyInLab } from "assets";

export default function Banner() {
    console.log(dataBanner)
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {dataBanner.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img className="image-item " src={item.imgUrl} alt="Banner" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="banner-info">
                <h3 className="title">SMA Muhammadiyah 4 Yogyakarta</h3>
                <h5 className="motto">Kebersamaan, Disiplin & Prestasi</h5>
            </div>
        </div>
    )
}
