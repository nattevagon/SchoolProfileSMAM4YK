import React from "react"
import "./header.scss"
import { Chevron, Header1, LocationMaps, SchoolLogo } from "assets"
import { Container, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header(props) {
    let { menu } = props

    return (
        <div className="header-component">
            <img src={Header1} className="background" alt="Background"/>
            <Container>
                <div className="title-section">
                    <img className="school-logo" src={SchoolLogo} alt="SchoolLogo" />
                    <div className="school-name">SMA Muhammadiyah 4 Yogyakarta</div>
                </div>
                <div className="menu-section">
                    <Link className={"btn-menu-item" + (menu === "Home" ? " active" : "")} to={"/"}>Beranda</Link>
                    <Dropdown bsPrefix="dropdown-item no-select">
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
                            <Link className="sub-menu" to={"/history"}>
                                Sejarah Sekolah
                            </Link>
                            <Link className="sub-menu" to={"/extracurricular"}>
                                Ekstrakurikuler
                            </Link>
                            <Link className="sub-menu" to={"/school-residents"}>
                                Warga Sekolah
                            </Link>
                            <Link className="sub-menu" to={"/achievement"}>
                                Prestasi
                            </Link>
                            <Link className="sub-menu" to={"/about"}>
                                IPM
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link className={"btn-menu-item" + (menu === "Gallery" ? " active" : "")}  to={"/gallery"}>Galeri</Link>
                    <Dropdown bsPrefix="dropdown-item no-select">
                        <Dropdown.Toggle bsPrefix={"btn-menu-item" + (menu === "NewsAndInformation" ? " active" : "")} as={'div'}>
                            Berita & Informasi
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu" to={"/agenda"}>
                                Agenda Sekolah
                            </Link>
                            <Link className="sub-menu" to={"/announcement"}>
                                Pengumuman
                            </Link>
                            <Link className="sub-menu" to={"/criticism-suggestions"}>
                                Kritik & Saran
                            </Link>
                            <Link className="sub-menu" to={"/news"}>
                                Berita
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown bsPrefix="dropdown-item no-select">
                        <Dropdown.Toggle bsPrefix={"btn-menu-item" + (menu === "ELearningAndAlQuran" ? " active" : "")} as={'div'}>
                            E-Learning & Al-Quran
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Link className="sub-menu" to={"/elearning"}>
                                Mata Pelajaran
                            </Link>
                            <Link className="sub-menu" to={"/alquran"}>
                                Al-Quran
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="button-section">
                    <Link className="btn-location" to={"/location"}>
                        <img src={LocationMaps} alt="Location" />
                        Lokasi Sekolah
                    </Link>
                </div>
            </Container>
        </div>
    )
}