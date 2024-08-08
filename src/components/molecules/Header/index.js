import React from "react"
import "./header.scss"
import { BurgerMenu, Chevron, Header1, LocationMaps, SchoolLogo } from "assets"
import { Container, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header(props) {
    let { menu, onShowPopUpMenu } = props

    return (
        <div className="header-component">
            <img src={Header1} className="background" alt="Background" />
            <Container>
                <Link className="title-section" to={"/"}>
                    <img className="school-logo" src={SchoolLogo} alt="SchoolLogo" />
                    <div className="school-name">SMA Muhammadiyah 4 Yogyakarta</div>
                </Link>
                <div className="menu-section">
                    <Link className={"btn-menu-item" + (menu === "Home" ? " active" : "")} to={"/"}>Beranda</Link>
                    <Dropdown bsPrefix="dropdown-item no-select">
                        <Dropdown.Toggle bsPrefix={"btn-menu-item" + (menu === "Profile" ? " active" : "")} as={'div'}>
                            Profil
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/vision-mission"}>
                                    Visi dan Misi Sekolah
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/organizational-structure"}>
                                    Struktur Organisasi
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/infrastucture"}>
                                    Sarana Prasarana
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/history"}>
                                    Sejarah Sekolah
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/extracurricular"}>
                                    Ekstrakurikuler
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/school-residents"}>
                                    Warga Sekolah
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/achievement"}>
                                    Prestasi
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/about"}>
                                    IPM
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown bsPrefix="dropdown-item no-select">
                        <Dropdown.Toggle bsPrefix={"btn-menu-item" + (menu === "NewsAndInformation" ? " active" : "")} as={'div'}>
                            Berita & Informasi
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/agenda"}>
                                    Agenda Sekolah
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/announcement"}>
                                    Pengumuman
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/criticism-suggestions"}>
                                    Kritik & Saran
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/news"}>
                                    Berita
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link className={"btn-menu-item" + (menu === "Gallery" ? " active" : "")} to={"/gallery"}>Galeri</Link>
                    <Dropdown bsPrefix="dropdown-item no-select">
                        <Dropdown.Toggle bsPrefix={"btn-menu-item" + (menu === "ELearningAndAlQuran" ? " active" : "")} as={'div'}>
                            E-Learning & Al-Quran
                            <img className="chevron" src={Chevron} alt="Chevron" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu">
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/elearning"}>
                                    Mata Pelajaran
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="sub-menu" as={"div"}>
                                <Link to={"/alquran"}>
                                    Al-Quran
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="button-section">
                    <Link className="btn-location" to={"/location"}>
                        <img src={LocationMaps} alt="Location" />
                        Lokasi Sekolah
                    </Link>
                </div>
                <div className="burger-menu" onClick={() => onShowPopUpMenu()}>
                    <img src={BurgerMenu} alt="Burger" />
                </div>
            </Container>
        </div>
    )
}