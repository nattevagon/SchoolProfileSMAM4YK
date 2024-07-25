import React, { useEffect, useState } from 'react'
import { Buttons, PopUpSuccess, TextFields } from "components"
import { Container } from "react-bootstrap"
import { Background4, Clock, LocationMaps, LocationMaps2, Mail, PhoneCall, SocialFB, SocialIG, SocialTiktok, SocialWA, SocialX, SocialYT } from "assets"
import { Link } from "react-router-dom"
import "./criticismSuggestions.scss"

export default function CriticismSuggestions(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isPopUpSuccess, setPopUpSuccess] = useState(false)

    useEffect(() => {
        props.onMenu("NewsAndInformation")
    }, [])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === "name") {
            setName(value)
        }
        else if (name === "email") {
            setEmail(value)
        }
        else if (name === "subject") {
            setSubject(value)
        }
        else if (name === "message") {
            setMessage(value)
        }

    }
    
    const handleSubmit = () => {
        setPopUpSuccess(true)
    }
    return (
        <div className="criticism-suggestions-page">
            <div className="top-section">
                <div className="background-section">
                    <img src={Background4} alt="Background4" />
                </div>
                <div className="page-info">
                    <Container>
                        <div className="wrap-school-info">
                            <div className="school-name">SMA Muhammadiyah 4</div>
                            <div className="page-title">Kritik & Saran</div>
                            <div className="page-desc">Layanan Kritik, dan saran untuk kemajuan sekolah kami</div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="page-content">
                        <div className="info-section">
                            <h3 className="section-label">Hubungi Kami</h3>
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
                        </div>
                        <div className="form-section">
                            <div className="section-label">Kritik dan Saran</div>
                            <form className="form-content">
                                <TextFields
                                    name="name"
                                    label="Nama Lengkap"
                                    type="text"
                                    maxLength={50}
                                    placeholder="Masukkan nama sesuai KTP"
                                    value={name}
                                    onChange={handleChange}
                                />
                                <TextFields
                                    name="email"
                                    label="Alamat Email"
                                    type="email"
                                    maxLength={50}
                                    placeholder="Masukkan alamat email anda"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <TextFields
                                    name="subject"
                                    label="Subjek"
                                    type="text"
                                    maxLength={50}
                                    placeholder="Masukkan subjek pesan anda "
                                    value={subject}
                                    onChange={handleChange}
                                />
                                <TextFields
                                    name="message"
                                    label="Pesan Anda"
                                    type="text"
                                    as="textarea"
                                    maxLength={100}
                                    placeholder="Masukkan pesan anda disini"
                                    value={message}
                                    onChange={handleChange}
                                />
                                <div className="btn-submit">
                                    <Buttons
                                        title="Kirim Data Alumni"
                                        variant="general"
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <PopUpSuccess
                        isShow={isPopUpSuccess}
                        message="Kritik & Saran anda berhasil dikirim"
                        onShow={(value) => setPopUpSuccess(value)}
                    />
                </Container>
            </div>
        </div>
    )
}
