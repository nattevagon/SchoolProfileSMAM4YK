import React from 'react'
import dataGallery from "../../../data/dataGallery.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import "./miniGallery.scss"

export default function MiniGallery() {
    const miniGalleryList = () => {
        const photoList = dataGallery.map(item => item.listPhoto[0]);
        
        return photoList
    }

    return (
        <div className="mini-gallery">
            <Swiper
                spaceBetween={24}
                slidesPerView={2.3}
                navigation={true}
                modules={[Navigation]}
            >
                {miniGalleryList()
                    .filter((_, i) => i < 3)
                    .map((item, i) => (
                        <SwiperSlide key={i}>
                            <img className="image-item " src={item} alt="MiniGallery" />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div >
    )
}
