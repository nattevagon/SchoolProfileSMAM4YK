import React, { useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import "./visionMission.scss"
import { SchoolLogo } from "assets"

export default function VisionMission(props) {
    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    return (
        <div className="vision-mission-page">
            <Container>
                <Row xs={1} md={2} className="page-content">
                    <Col className="left-section" md={8}>
                        <div className="wrap-item vision">
                            <h2 className="label">“ Visi Kami</h2>
                            <div className="content">
                                <div className="single-desc">
                                    Menjadi sekolah islami yang unggul serta trampil dalam imtaq dan Iptek
                                </div>
                            </div>
                        </div>
                        <div className="wrap-item mission">
                            <h2 className="label">“ Misi Kami</h2>
                            <div className="content">
                                <div className="multiple-desc">
                                    <ul className="desc-content">
                                        <li>
                                            A. Menyelenggarakan pendidikan formal untuk membentuk pribadi muslim yang taat beribadah, mampu berdakwah dan berakhlaq mulia.
                                        </li>
                                        <li>
                                            B. Mendidik generasi penerus bangsa agar berkualitas dalam penguasaan ilmu pengetahuan, penelitian dan teknologi menurut ajaran Islami
                                        </li>
                                    </ul>
                                </div>
                                <h5 className="additional-note">Misi sekolah ini dijabarkan dalam 5 (lima) bidang imtaq dan 6 (enam) bidang iptek :</h5>
                                <div className="multiple-desc">
                                    <h6 className="desc-label">Bidang Imtaq</h6>
                                    <ul className="desc-content">
                                        <li>
                                            1. Meningkatkan pelaksanaan pembelajaran dalam bidang Al-Qur’an
                                        </li>
                                        <li>
                                            2. Meningkatkan kesadaran melaksakan sholat jama’ah
                                        </li>
                                        <li>
                                            3. Meningkatkan kesadaran berakhlak mulia
                                        </li>
                                        <li>
                                            4. Meningkatkan pelaksanaan pelatihan dakwah
                                        </li>
                                        <li>
                                            5. Meningkatkan kegiatan sosial
                                        </li>
                                    </ul>
                                </div>
                                <div className="multiple-desc">
                                    <h6 className="desc-label">Bidang Iptek</h6>
                                    <ul className="desc-content">
                                        <li>
                                            1. Meningkatkan pelaksanaan kualitas dan kuantitas kegiatan belajar mengajar
                                        </li>
                                        <li>
                                            2. Meningkatkan kualitas pendalaman materi dan soal
                                        </li>
                                        <li>
                                            3. Meningkatkan kualitas kegiatan ekstrakulikuler
                                        </li>
                                        <li>
                                            4. Meningkatkan kualitas dan intensitas ekstrakurikuler bahasa inggris dan bahasa arab
                                        </li>
                                        <li>
                                            5. Meningkatkan pelaksanaan pembelajaran komputer
                                        </li>
                                        <li>
                                            6. Membudayakan membuat karya tulis ilmiah (KIR)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="right-section" md={4}>
                        <div className="motto">
                            <div className="wrap-school">
                                <img className="logo" src={SchoolLogo} alt="SchoolLogo" />
                                <div className="name">Sekolah Menengah Atas<br />Muhammadiyah 4 Yogyakarta</div>
                                <div className="address">Jl. Mondorakan No 51 Kotagede Yogyakarta. 55172</div>
                            </div>
                            <div className="school-motto">
                                <h4 className="title">“ Motto”</h4>
                                <h6 className="desc">Kebersamaan, Disiplin dan Prestasi</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
