import React, { useEffect } from 'react'
import "./about.scss"
import { Col, Container, Row } from "react-bootstrap"
import { BackgroundIPM, IPM } from "assets"

export default function About(props) {
    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    return (
        <div className="about-page">
            <div className="top-section">
                <div className="background-section">
                    <img src={BackgroundIPM} alt="BackgroundIPM" />
                </div>
                <div className="page-info">
                    <Container>
                        <div className="wrap-school-info">
                            <div className="wrap-media">
                                <img src={IPM} alt="IPMLogo" />
                            </div>
                            <div className="wrap-content">
                                <div className="school-name">SMA Muhammadiyah 4</div>
                                <div className="page-title">Ikatan Pelajar Muhammadiyah</div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <Row xs={1} md={2} className="page-content">
                        <Col className="left-section" md={7}>
                            <div className="label">Tentang Kami</div>
                            <div className="content">
                                IPM sebagai Organisasi Maksud dan tujuan IPM adalah “Terbentuknya pelajar muslim yang berilmu, berakhlak mulia, dan terampil dalam rangka menegakkan dan menjunjung tinggi nilai-nilai ajaran Islam sehingga terwujud masyarakat Islam yang sebenar-benarnya” (Pasal 3 AD/ART).
                                <br/><br/>
                                Kewajiban anggota bahwa setiap anggota berkewajiban untuk menaati dan menjalankan AD dan ART serta menaati segala peraturan dan kebijakan organisasi. Jaringan struktural IPM secara berjenjang dari tingkat Pimpinan Pusat, Pimpinan Wilayah, Pimpinan Daerah, Pimpinan Cabang, dan Pimpinan Ranting.
                                <br/><br/>
                                Dalam hal permusyawaratan, dalam IPM mengenal Muktamar, Konferensi Pimpinan Wilayah (Konpiwil), Musyawarah Wilayah (Musywil), Konferensi Pimpinan Daerah (Konpida), Musyawarah Daerah (Musyda), Konferensi Pimpinan Cabang (Konpicab), Musyawarah Cabang (Musycab), Konferensi Pimpinan Ranting (Konpiran), dan Musyawarah Ranting (Musyran).
                            </div>
                        </Col>
                        <Col className="right-section" md={5}>
                            <img className="background" src={IPM} alt="Background"/>
                            <div className="wrap-mars">
                                <div className="label">Mars IPM</div>
                                <div className="content">
                                    Bersatu berpadu menjalin ukhuwah<br/>
                                    Di dalam ikatan remaja muhammadiyah<br/>
                                    Terampil berilmu berakhlak mulia<br/>
                                    Pelopor dan pelangsung penyempurna amanah<br/>
                                    Berjuang dengan sekuat tenaga<br/>
                                    Tegakkan Islam yang utama<br/>
                                    Menjadi kader yang siap sedia<br/>
                                    Untuk umat dan bangsa<br/>
                                    Berdiri tegaklah tampillah di muka<br/>
                                    Ikrarkan bersama IRM berjaya<br/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
