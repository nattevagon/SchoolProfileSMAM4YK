import React, { useEffect, useState } from 'react'
import "./achievement.scss"
import { AchievementTitle, FifthChampion, FirstChampion, FourthChampion, SecondChampion, SixthChampion, Students2, ThirdChampion } from "assets"
import { Col, Container, Row } from "react-bootstrap"

export default function Achievement(props) {
    const [achievement] = useState(
        [
            {
                "position": "1st Place",
                "imgUrl": FirstChampion,
                "achievements": [
                    {
                        "event": "Lomba MTQ SMA 2010",
                        "level": "Tingkat DIY",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    }
                ]
            },
            {
                "position": "2nd Place",
                "imgUrl": SecondChampion,
                "achievements": [
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba MTQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    }
                ]
            },
            {
                "position": "3rd Place",
                "imgUrl": ThirdChampion,
                "achievements": [
                    {
                        "event": "Lomba Pencak Silat IPSI 2010",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    },
                    {
                        "event": "Lomba Mengarang Cerpen, Sekolah Inklusi 2010",
                        "level": "Tingkat Provinsi",
                        "organizer": "Sekolah Inklusi se-DIY"
                    },
                    {
                        "event": "Lomba MSQ SMA 2010",
                        "level": "Tingkat Kota",
                        "organizer": "DEPAG"
                    },
                    {
                        "event": "Lomba Qiro’ah Tartil SMA 2009",
                        "level": "Tingkat Provinsi",
                        "organizer": "DIKPORA"
                    },
                    {
                        "event": "Lomba MHQ SMA 2009",
                        "level": "Tingkat Kota",
                        "organizer": "Dinas Pendidikan kota Yogya"
                    }
                ]
            },
            {
                "position": "4th Place",
                "imgUrl": FourthChampion,
                "achievements": [
                    {
                        "event": "Lomba Olimpiade Fisika Muhammadiyah",
                        "level": "Tingkat Provinsi",
                        "organizer": "PWM DIY Yogyakarta"
                    },
                    {
                        "event": "Lomba Olimpiade Fisika Muhammadiyah",
                        "level": "Tingkat Provinsi",
                        "organizer": "PWM DIY Yogyakarta"
                    }
                ]
            },
            {
                "position": "Favorite Winner",
                "imgUrl": FifthChampion,
                "achievements": [
                    {
                        "event": "Lomba Olimpiade Fisika Muhammadiyah",
                        "level": "Tingkat Provinsi",
                        "organizer": "PWM DIY Yogyakarta"
                    },
                    {
                        "event": "Lomba Olimpiade Fisika Muhammadiyah",
                        "level": "Tingkat Provinsi",
                        "organizer": "PWM DIY Yogyakarta"
                    }
                ]
            },
            {
                "position": "1st Honorable Mention",
                "imgUrl": SixthChampion,
                "achievements": [
                    {
                        "event": "Lomba Olimpiade Fisika Muhammadiyah",
                        "level": "Tingkat Provinsi",
                        "organizer": "PWM DIY Yogyakarta"
                    },
                    {
                        "event": "Lomba Olimpiade Fisika Muhammadiyah",
                        "level": "Tingkat Provinsi",
                        "organizer": "PWM DIY Yogyakarta"
                    }
                ]
            }
        ]
    )
    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    return (
        <div className="achievement-page">
            <div className="top-section">
                <div className="background-section">
                    <img src={Students2} alt="Students2" />
                </div>
                <div className="page-info">
                    <Container>
                        <img src={AchievementTitle} alt="AchievementTitle" />
                    </Container>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="label-section">
                        <h2 className="title">Pretasi Kami</h2>
                        <p className="desc">Daftar Prestasi yang telah diperoleh SMA Muhammadiyah Yogyakarta</p>
                    </div>
                    <div className="content-section">
                        <Row md={3} className="achievement-items">
                            {achievement.map((item, i) => (
                                <Col key={i}>
                                    <div className="item">
                                        <img className="logo" src={item.imgUrl} alt="AchievementLogo" />
                                        <div className={"content" + (i < 3 ? " primary" : "")}>
                                            {item.achievements.map((subItem, j) => (
                                                <div className="content-item" key={j}>
                                                    <div className="event">{subItem.event}</div>
                                                    <div className="level">{subItem.level}</div>
                                                    <div className="organizer">{subItem.organizer}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}
