import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Clock, LocationMaps, LocationMaps2, Mail, PhoneCall, SocialFB, SocialIG, SocialTiktok, SocialWA, SocialX, SocialYT } from "assets"
import { Link } from "react-router-dom"
import "./location.scss"
// import { Maps } from "components"

export default function Location(props) {
    useEffect(() => {
        props.onMenu("Location")
    }, [])

    return (
        <div className="location-page">
            <Container>
                <div className="page-title">
                    <h2 className="title">Lokasi Sekolah</h2>
                    <div className="icon">
                        <img src={LocationMaps2} alt="Location" />
                    </div>
                </div>
                <div className="page-content">
                    <Row>
                        <Col className="info-section">
                            <h5 className="title">SMA Muhammadiyah 4</h5>
                            <div className="contact-item">
                                <img className="icon" src={LocationMaps} alt="Address" />
                                <p className="text">Jl. Mondorakan No. 51 Kotagede Yogyakarta. 55172</p>
                            </div>
                            <div className="contact-item">
                                <img className="icon" src={Clock} alt="Time" />
                                <p className="text">Buka 24 jam pada hari tertentu (Jumat, Sabtu)</p>
                            </div>
                            <div className="contact-item center">
                                <img className="icon" src={PhoneCall} alt="Phone" />
                                <p className="text">0274371185 / 2840268</p>
                            </div>
                            <div className="contact-item center">
                                <img className="icon" src={Mail} alt="Mail" />
                                <p className="text">Muhammadiyah4yk@gmail.com</p>
                            </div>
                            <div className="social-icons">
                                <Link>
                                    <img className="social-item" src={SocialIG} alt="SocialLogo" />
                                </Link>
                                <Link>
                                    <img className="social-item" src={SocialWA} alt="SocialLogo" />
                                </Link>
                                <Link>
                                    <img className="social-item" src={SocialFB} alt="SocialLogo" />
                                </Link>
                                <Link>
                                    <img className="social-item" src={SocialTiktok} alt="SocialLogo" />
                                </Link>
                                <Link>
                                    <img className="social-item x" src={SocialX} alt="SocialLogo" />
                                </Link>
                                <Link>
                                    <img className="social-item" src={SocialYT} alt="SocialLogo" />
                                </Link>
                            </div>
                        </Col>
                        <Col className="maps-section">
                            <iframe className="wrap-maps" title="SchoolMaps" id="schoolMaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.584873937702!2d110.3976242!3d-7.8272173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a571379f6efe5%3A0x4684a4703cd95556!2sSMA%20Muhammadiyah%204%20Yogyakarta!5e0!3m2!1sid!2sid!4v1721389983006!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
