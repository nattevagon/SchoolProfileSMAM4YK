import React from "react"
import "./header.scss"
import { Chevron, LocationMaps, SchoolLogo } from "assets/images"
import { Container, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header(props) {
    let { menu } = props

    return (
        <div className="header-component">
            <Container>
                <div className="title-section">
                    <img className="school-logo" src={SchoolLogo} alt="SchoolLogo" />
                    <div className="school-name">SMA Muhammadiyah 4 Yogyakarta</div>
                </div>
                <div className="menu-section">
                    <Link className={"btn-menu-item" + (menu === "Home" ? " active" : "")} to={"/"}>Beranda</Link>
                    <Dropdown bsPrefix="dropdown-item">
                        <Dropdown.Toggle bsPrefix={"btn-menu-item" + (menu === "Profile" ? " active" : "")} as={'div'}>
                            Profil
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu" to={"/vision-mission"}>
                                Visi dan Misi Sekolah
                            </Link>
                            <Link className="sub-menu" to={"/organizational-structure"}>
                                Struktur Organisasi
                            </Link>
                            <Link className="sub-menu" to={"/infrastucture"}>
                                Sarana Prasarana
                            </Link>
                            <Link className="sub-menu">
                                Sejarah Sekolah
                            </Link>
                            <Link className="sub-menu">
                                Ekstrakurikuler
                            </Link>
                            <Link className="sub-menu">
                                Warga Sekolah
                            </Link>
                            <Link className="sub-menu">
                                Prestasi
                            </Link>
                            <Link className="sub-menu">
                                IPM
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link className={"btn-menu-item" + (menu === "Gallery" ? " active" : "")}  to={"/gallery"}>Galeri</Link>
                    <Dropdown bsPrefix="dropdown-item">
                        <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                            Berita & Informasi
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu">
                                Agenda Sekolah
                            </Link>
                            <Link className="sub-menu">
                                Pengumuman
                            </Link>
                            <Link className="sub-menu">
                                Kritik & Saran
                            </Link>
                            <Link className="sub-menu">
                                Berita
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown bsPrefix="dropdown-item">
                        <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                            E-Learning & Al-Quran
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu">
                                Mata Pelajaran
                            </Link>
                            <Link className="sub-menu">
                                Al-Quran
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