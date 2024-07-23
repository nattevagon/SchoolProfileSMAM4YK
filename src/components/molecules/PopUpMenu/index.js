import React from 'react';
import { Container, Modal } from "react-bootstrap";
import { Accordions } from "components/atoms";
import "./popUpMenu.scss";
import { Link } from "react-router-dom";

export default function PopUpMenu(props) {
    const { isShow, onShow } = props;

    return (
        <Modal
            className="pop-up-menu"
            show={isShow}
            animation={true}
            onHide={() => onShow(false)}
            backdropClassName="pop-up-menu"
        >
            <Container className="menu-content">
                <Link className="menu-item" to={"/"}>
                    Beranda
                </Link>
                <div className="menu-item">
                    <Accordions>
                        <Accordions.Header>
                            <div className="header">
                                Profil
                            </div>
                        </Accordions.Header>
                        <Accordions.Body>
                            <div className="desc">
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
                            </div>
                        </Accordions.Body>
                    </Accordions>
                </div>
                <div className="menu-item">
                    <Accordions>
                        <Accordions.Header>
                            <div className="header">
                                Berita & Informasi
                            </div>
                        </Accordions.Header>
                        <Accordions.Body>
                            <div className="desc">
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
                            </div>
                        </Accordions.Body>
                    </Accordions>
                </div>
                <Link className="menu-item" to={"/gallery"}>
                    Galeri
                </Link>
                <div className="menu-item">
                    <Accordions>
                        <Accordions.Header>
                            <div className="header">
                                E-Learning & Al-Quran
                            </div>
                        </Accordions.Header>
                        <Accordions.Body>
                            <div className="desc">
                                <Link className="sub-menu" to={"/elearning"}>
                                    Mata Pelajaran
                                </Link>
                                <Link className="sub-menu" to={"/alquran"}>
                                    Al-Quran
                                </Link>
                            </div>
                        </Accordions.Body>
                    </Accordions>
                </div>
                <Link className="menu-item" to={"/location"}>
                    Lokasi Sekolah
                </Link>
            </Container>
        </Modal>
    );
}