import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./banner.scss"

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Student } from "assets";

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
                    <img className="image-item " src="https://s3-alpha-sig.figma.com/img/ca3b/ef37/3fd1d160800db76df81c6b65384763e1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eWAifU751KeOkLWXKVcfFU5BE5Mr28DswTLoW15DTYCSPu-OUbgcipESWq0nu63koUdCKhBad9TcP3yiN~kECoJ-vr4GQdmYxJ19bNeuSv1iE0CUKDy5JU0NSKjM9rO6JNTngZ8uXkU2sQ70pkxBcETnyLSAyv9wI-BJkg~qnCNgy5bd72CJgbViPdKT5ftvYYYzWbEE0W7h6cYjF8vxKRx1FgYMJ9vDNc4F2Wwm0KecIXlEMUcA2WoNO0b7Pu1GyglwlipAFoYOCSCCoxzu-63qul0m1200w56WkrYhtMHeuzVdUmNjhzlAjxib-VF3det2wVScjcSsAbQwuq-jqw__" alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src="https://s3-alpha-sig.figma.com/img/5786/5279/e91ac672ff2dcb9b66c469061dd7640c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bK1HPV0APRKxqUYe0GI9sIiOehFZeiqqnePRkmRaWqZnG67MPd-2i2ipW9tNucWALuYVZA16slF4ruWDFXmC9mp-L2RnHoc~0UdjeUl-DWt6iN52Wb1L2WoonozbxWEgiOJ-Y0jp0wJlcIT4fzFPKrcgSb5WBbRE9aJ4ThOB60N0FNgIQPDm0BmACE4snM6x9m3f1ki-2ErJ2nfd4EDp7g9Bx-188WfRB4oGIv70Be8ARQUf-XCxaprnYUoHNEgHKrazXf-cdFTbfMIU~zoeKoIDHiG5lTJnnVaDEMFOYZrmwX-3Bv6daGEhJv1CV02piOv~YsmDYMwGgEAxJTzDCg__" alt="Student" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-item " src="https://s3-alpha-sig.figma.com/img/f13e/dd06/0e0df88f70d6febafe85c4c0b53ed29a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NgA~h6SqiUg6deEYqniapteJ3tp4teLtm5kunBmq~IXzJOnNNiTLaw7wdLTx~wrC5WMqHXwaSfKbYw-hARldKHIUhpCqAQ3EyRFi5Yu4C50Ro7W0NJKG1hMwKK5J8PzU5bUCrKx4VP0Obcl1KdoQnB2SeJEDKiig-Fass01lPZU4FI2rOqlSo9Qt7etY1B708mvH7VdvpjvcXLH~ndhRCXwhPsPW~fiTrdNxlU--TpCzKi45K0kpmd146cAabT3nE7UKO0T6Iq98YPx1huPrb22r3p62wcZWoGpTUBv2Qh8i-Gmg-8j3ibumfLK5t-I80Mk4iBBUcbjwdYJ5I2yX8w__" alt="Student" />
                </SwiperSlide>
            </Swiper>
            <div className="banner-info">
                <h3 className="title">SMA Muhammadiyah 4 Yogyakarta</h3>
                <h5 className="motto">Kebersamaan, Disiplin & Prestasi</h5>
            </div>
        </div>
    )
}
