import React from "react"
import "./header.scss"
import { Chevron, LocationMaps, SchoolLogo } from "assets/images"
import { Container, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header-component">
            <Container>
                <div className="title-section">
                    <img className="school-logo" src={SchoolLogo} alt="SchoolLogo" />
                    <div className="school-name">SMA Muhammadiyah 4 Yogyakarta</div>
                </div>
                <div className="menu-section">
                    <Link className="btn-menu-item" to={"/"}>Beranda</Link>
                    <Dropdown bsPrefix="dropdown-item">
                        <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                            Profil
                            <img className="chevron" src={Chevron} alt="Chevron"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu">
                                Visi dan Misi Sekolah
                            </Link>
                            <Link className="sub-menu">
                                Struktur Organisasi
                            </Link>
                            <Link className="sub-menu line-top">
                                Sarana Prasarana
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link className="btn-menu-item" to={"/Gallery"}>Galeri</Link>
                    <Dropdown bsPrefix="dropdown-item">
                        <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                            Berita & Informasi
                            <img className="chevron" src={Chevron} alt="Chevron"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu">
                                Profil
                            </Link>
                            <Link className="sub-menu">
                                Ubah Kata Sandi
                            </Link>
                            <Link className="sub-menu line-top">
                                Logout
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown bsPrefix="dropdown-item">
                        <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                            E-Learning & Al-Quran
                            <img className="chevron" src={Chevron} alt="Chevron"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu">
                                Profil
                            </Link>
                            <Link className="sub-menu">
                                Ubah Kata Sandi
                            </Link>
                            <Link className="sub-menu line-top">
                                Logout
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="button-section">
                    <div className="btn-location">
                        <img src={LocationMaps} alt="Location" />
                        Lokasi Sekolah
                    </div>
                </div>
            </Container>
        </div>
    )
}