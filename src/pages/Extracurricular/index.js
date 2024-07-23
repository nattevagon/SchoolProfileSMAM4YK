import React, { useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Background1, ShapeMini1, TraditionalDance } from "assets"
import { MiniGallery } from "components"
import dataExtracurricular from "../../data/dataExtracurricular.json"
import "./extracurricular.scss"

export default function Extracurricular(props) {
    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    return (
        <div className="extracurricular-page">
            <div className="top-section">
                <div className="background-section">
                    <img className="left" src={Background1} alt="Background" />
                    <img className="right" src={TraditionalDance} alt="TraditionalDance" />
                </div>
                <div className="page-info">
                    <Container>
                        <div className="wrap-school-info">
                            <div className="school-name">SMA Muhammadiyah 4</div>
                            <div className="page-title">Ekstrakurikuler</div>
                            <div className="page-desc">“Meningkatkan kualitas kegiatan ekstrakulikuler siswa”</div>
                            <div className="register">Pendaftaran : 08123456789 / WAKA Kesiswaan</div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="extracurricular-list">
                        <Row xs={4} md={6}>
                            {dataExtracurricular.map((item, i) => (
                                <Col>
                                    <div className="extracurricular-item" key={i}>
                                        <div className="wrap-title">
                                            <img className="background" src={ShapeMini1} about="Background"/>
                                            <div className="title">{item.name}</div>
                                        </div>
                                        <div className="wrap-content">
                                            <div className="label">Jadwal Kegiatan</div>
                                            <div className="desc schedule">{item.schedule}</div>
                                            <div className="label">Kontak Pengajar</div>
                                            <div className="desc">{item.contactName}</div>
                                            <div className="label">Telepon/Hp</div>
                                            <div className="desc last">{item.phone}</div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="gallery-section">
                        <div className="wrap-label">
                            <div className="label">Galleri Ekstrakulikuler</div>
                        </div>
                        <div className="wrap-content">
                            <MiniGallery />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
