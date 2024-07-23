import React from 'react'
import "./miniGallery.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./miniGallery.scss"

// import required modules
import { Navigation } from 'swiper/modules';

export default function MiniGallery() {
    return (
        <div className="mini-gallery">
            <Swiper
                spaceBetween={24}
                slidesPerView={2.3}
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img className="image-item " src="http://www.smamuh4-yogya.sch.id/web/images/foto/galeri/gedung%20depan%20sekolahan.jpg" alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src="http://www.smamuh4-yogya.sch.id/web/images/foto/galeri/DSC00503.JPG" alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src="http://www.smamuh4-yogya.sch.id/web/images/foto/galeri/album/DSC00803.JPG" alt="Student" />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
