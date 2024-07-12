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
                    <img className="image-item " src="https://s3-alpha-sig.figma.com/img/5786/5279/e91ac672ff2dcb9b66c469061dd7640c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bK1HPV0APRKxqUYe0GI9sIiOehFZeiqqnePRkmRaWqZnG67MPd-2i2ipW9tNucWALuYVZA16slF4ruWDFXmC9mp-L2RnHoc~0UdjeUl-DWt6iN52Wb1L2WoonozbxWEgiOJ-Y0jp0wJlcIT4fzFPKrcgSb5WBbRE9aJ4ThOB60N0FNgIQPDm0BmACE4snM6x9m3f1ki-2ErJ2nfd4EDp7g9Bx-188WfRB4oGIv70Be8ARQUf-XCxaprnYUoHNEgHKrazXf-cdFTbfMIU~zoeKoIDHiG5lTJnnVaDEMFOYZrmwX-3Bv6daGEhJv1CV02piOv~YsmDYMwGgEAxJTzDCg__" alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src="https://s3-alpha-sig.figma.com/img/4691/9665/d626562a60c6834593427e347b6b16dd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SUS48C24oC0lFlDNYs8erqbSuQV93DWrTGWiami0shDymalFpg5q1bpyDFCjc2vvRZY8vwriJ6wKSMt1jxpUpChohQhJVTXtxlwtIg2SVt4qd-EK2joHDlavXulruqSXXYzXRHR1lwROfibju4EzKV2NjTmDOtj9AaqD0inlhdyAbBMhK99BKhcMOYwBL16XZg1dfRePtzHHAMG1WW6ehl0R2F0UlWjMYNGTcINzaf0ektie4NA5NEsFfpuMmU3UcsOX32D2XNuR~PdQCZQkom4TTXtrpFM3WVHWW6IOGWUahIi5cxzOo~GWPKCwlvh2CJ-6~gkrWgLflkJyho0Hqw__" alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src="https://s3-alpha-sig.figma.com/img/1830/78f6/cf44ef91ef7cef6aa1090c0dfe58c066?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mecvPrXESKWtx5jFdGODtJYTSjbPcm4cVTG9z6~fXhZ63Nyd6iHClq652fYhV8vtLz5u0d8VAyrA3tzxA658aSG5Vcjl-1fhKUP5wscHb8yI5fUrT7oDApgnXdFZC5CZaMNDkjbFSIvj7DuwJHHOlf9kX-8WLTk7wVV4YIVM4UkdXUs0G5f0B2k6ZXJnTIMB5XyapqPdmCbDhz7dMRIcSywbcX1Y30-~APMTsgHV6ODDomluOf3kid5X8iXzcXqLsNqhUZ3H8CV~L1G1rpxORD6HAxpp-5iHozHMkwWWoi2Y50uiTfrh8lr-W5ryJ3PMT6dbUnZWdN7N~d8gBMQZ3g__" alt="Student" />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
