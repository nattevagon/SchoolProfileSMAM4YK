import React from "react"
import "./footer.scss"
import { Col, Container, Row } from "react-bootstrap"
import { Mail, PhoneCall, SchoolLogo, SocialFB, SocialIG, SocialTiktok, SocialWA, SocialX, SocialYT } from "assets"
import { Link } from "react-router-dom"

export default function Footer(props) {
    const { isLightMode } = props

    return (
        <div className={"footer-component" + (isLightMode ? " light-mode" : "")}>
            <Container>
                <Row className="top-section">
                    <Col md={4} className="left-section">
                        <div className="wrap-school">
                            <img className="logo" src={SchoolLogo} alt="SchoolLogo" />
                            <div className="name">Sekolah Menengah Atas<br />Muhammadiyah 4 Yogyakarta</div>
                            <div className="address">Jl. Mondorakan No 51 Kotagede Yogyakarta. 55172</div>
                        </div>
                    </Col>
                    <Col md={8} className="right-section">
                        <Row>
                            <Col className="menu-section">
                                <h5 className="title">Profil Sekolah</h5>
                                <div className="menu-list">
                                    <Link>Visi dan Misi Sekolah</Link>
                                    <Link>Struktur Organisasi</Link>
                                    <Link>Sarana Prasarana</Link>
                                    <Link>Sejarah Sekolah</Link>
                                    <Link>Ekstrakurikuler</Link>
                                    <Link>Warga Sekolah</Link>
                                    <Link>Prestasi</Link>
                                    <Link>IPM</Link>
                                </div>
                            </Col>
                            <Col className="menu-section">
                                <h5 className="title">Berita & Informasi</h5>
                                <div className="menu-list">
                                    <Link>Agenda Sekolah</Link>
                                    <Link>Pengumuman</Link>
                                    <Link>Kritik & Saran</Link>
                                    <Link>Berita</Link>
                                </div>
                            </Col>
                            <Col className="menu-section">
                                <h5 className="title">E-Learning</h5>
                                <div className="menu-list">
                                    <Link>Mata Pelajaran</Link>
                                    <Link>Al-quran</Link>
                                </div>
                            </Col>
                            <Col className="menu-section">
                                <h5 className="title">Hubungi Kami</h5>
                                <div className="contact-item">
                                    <img className="icon" src={PhoneCall} alt="Phone"/>
                                    0274371185 / 2840268</div>
                                <div className="contact-item">
                                    <img className="icon" src={Mail} alt="Mail"/>
                                    Muhammadiyah4yk@gmail.com
                                </div>
                                <div className="social-icons">
                                    <Link>
                                        <img className="social-item" src={SocialIG} alt="SocialLogo"/>
                                    </Link>
                                    <Link>
                                        <img className="social-item" src={SocialWA} alt="SocialLogo"/>
                                    </Link>
                                    <Link>
                                        <img className="social-item" src={SocialFB} alt="SocialLogo"/>
                                    </Link>
                                    <Link>
                                        <img className="social-item" src={SocialTiktok} alt="SocialLogo"/>
                                    </Link>
                                    <Link>
                                        <img className="social-item x" src={SocialX} alt="SocialLogo"/>
                                    </Link>
                                    <Link>
                                        <img className="social-item" src={SocialYT} alt="SocialLogo"/>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="bottom-section">© Copyright 2024. SMA Muhammadiyah 4 Yogyakarta.</div>
        </div>
    )
}
