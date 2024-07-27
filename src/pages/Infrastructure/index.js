import React, { useEffect, useState } from "react"
import { CircleAC, CircleCCTV, CircleProjector, CircleWifi, SchoolWithLogo, ScrollUp, StudentsStudyInLab } from "assets"
import { Container } from "react-bootstrap"
import dataRoomFacility from "../../data/dataRoomFacility.json"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Buttons } from "components";
import "./infrastucture.scss"

export default function Infrastucture(props) {
    const [maxFacilityList, setMaxFacilityList] = useState(6)

    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleExpand = () => {
        setMaxFacilityList(dataRoomFacility.length)
    }

    const handleScrollByID = (key) => {
        const element = document.getElementById("facility-" + (key));

        if (key >= maxFacilityList) {
            handleExpand()
        }

        if (element) {
            const offset = 88; // Offset in pixels
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    return (
        <div className="infrastucture-page">
            <div className="top-section">
                <div className="background-section">
                    <img src={StudentsStudyInLab} alt="StudentsStudyInLab" />
                </div>
                <div className="page-info">
                    <Container>
                        <div className="wrap-school-info">
                            <div className="school-name">SMA Muhammadiyah 4</div>
                            <div className="page-title">Sarana Prasarana</div>
                            <div className="page-desc">Kebersamaan, Disiplin & Prestasi</div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="facility-label">
                        <div className="left-section">
                            <img src={SchoolWithLogo} alt="SchoolWithLogo" />
                        </div>
                        <div className="right-section">
                            <div className="label">Fasilitas Kami</div>
                            <div className="desc">Daftar sarana prasarana SMA Muhammadiyah 4 Yogyakarta</div>
                            <div className="room-facility">
                                <Swiper
                                    spaceBetween={16}
                                    initialSlide={0}
                                    slidesPerView={"auto"}
                                    pagination={false}
                                >
                                    {dataRoomFacility.map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <div
                                                className="item"
                                                onClick={() => handleScrollByID(i)}
                                            >
                                                {item.name}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="additional-facility">
                                <img src={CircleAC} className="item" alt="Facility" />
                                <img src={CircleProjector} className="item" alt="Facility" />
                                <img src={CircleCCTV} className="item" alt="Facility" />
                                <img src={CircleWifi} className="item" alt="Facility" />
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="room-facility-list">
                    {dataRoomFacility.map((item, i) => {
                        if (i < maxFacilityList) {
                            return (
                                <div className={"room-facility-item" + (i % 2 === 0 ? " reverse " : "")} id={"facility-" + i}>
                                    <Container className="wrap-room-facility">
                                        <div className="content-section">
                                            <div className="label">{item.name}</div>
                                            <div className="desc">{item.description}</div>
                                            <div className="features">
                                                {item.features.map((feature, j) => (
                                                    <div className="item" key={j}>{feature}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="media-section">
                                            <img src={item.imageUrl} alt="Room" />
                                        </div>
                                    </Container>
                                </div>
                            )
                        }
                    })}
                </div>
                {dataRoomFacility.length !== maxFacilityList && (
                    <div className="wrap-see-all">
                        <Container>
                            <Buttons title="Lihat Selengkapnya" variant="outline-general" size="md" onClick={() => handleExpand()} />
                        </Container>
                    </div>
                )}
            </div>
            <div className="wrap-floating-button">
                <Container>
                    <div className="btn-scroll-up" onClick={() => handleScrollUp()}>
                        <img src={ScrollUp} alt="ScrollUp" />
                    </div>
                </Container>
            </div>
        </div>
    )
}
