import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AnnouncementItem, Banner, MiniGallery, NewsItem } from "components"
import { Link } from "react-router-dom"
import { TeacherAndStudents } from "assets"
import dataNews from "../../data/dataNews.json"
import dataAnnouncement from "../../data/dataAnnouncement.json"
import "./home.scss"

export default function Home(props) {
    const [bannerList, setBannerList] = useState([
        {
            "title": "Banner1",
            "imgUrl": "https://smam4ykassets.netlify.app/students-in-class.jpg"
        },
        {
            "title": "Banner2",
            "imgUrl": "https://smam4ykassets.netlify.app/students-study-in-lab.jpg"
        },
        {
            "title": "Banner3",
            "imgUrl": "https://smam4ykassets.netlify.app/students-in-class.jpg"
        }
    ])
    useEffect(() => {
        props.onMenu("Home")
    }, [])

    return (
        <div className="home-page">
            <Container>
                <Banner />
                <div className="welcome-section">
                    <Col className="left-section">
                        <img src={TeacherAndStudents} alt="TeacherAndStudents" />
                        <div className="wrap-head-master">
                            <div className="title">Kepala Sekolah</div>
                            <div className="name">Hj. Tri Suryani, M.Pd</div>
                        </div>
                    </Col>
                    <div className="right-section">
                        <h4 className="title">Sambutan Kepala Sekolah</h4>
                        <p className="desc">Assalamu 'alaikum wr. wb. Puji Syukur atas kehadirat Allah yang senantiasa melimpahkan ridho-Nya kepada kita semua sehingga kita selalu diberi manfaat, kesehatan dan iman. Tak lupa salam serta sholawat kita sanjungkan kepada Nabi Besar Muhammad SAW. Alhamdulillah, pada tanggal 17 Januari 2022, PTMT 100% sudah mulai berlaku di SMA Muhammadiyah 4 Yogyakarta. Semua siswa sudah mulai kembali berkatifitas di bangku sekolah secara bersamaan.<br /><br />Adapaun dikarenakan masih keterbatasan jumlah pembelajaran yang jumlahnya dibatasi, maka ada beberapa mata pelajaran yang masih menggunakan sistem penugasan dan diantaranya masih harus mengakses web <Link to="https://mupatbelajar.umy.ac.id/">https://mupatbelajar.umy.ac.id/</Link>. Semoga semuanya dapat berlancar dengan lancar. Aamiin YRA. Wassalamu 'alaikum wr.wb</p>
                    </div>
                </div>
            </Container>
            <div className="latest-news-section">
                <Container>
                    <div className="wrap-section latest-news">
                        <div className="wrap-label">
                            <div className="label">Berita Terbaru</div>
                            <div className="see-all">
                                <Link to={"/news"}>Lihat Semua Berita</Link>
                            </div>
                        </div>
                        <div className="wrap-content">
                            <Row xs={1} md={3}>
                                {dataNews
                                    .filter((_, i) => i < 3)
                                    .map((item, i) => (
                                        <Col key={i}>
                                            <NewsItem item={item} />
                                        </Col>
                                    )
                                    )}
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="announcement-gallery-section">
                <Container>
                    <div className="wrap-section announcement">
                        <div className="wrap-label">
                            <div className="label">Pengumuman</div>
                            <div className="see-all">
                                <Link to={"/announcement"}>Lihat Semua Pengumuman</Link>
                            </div>
                        </div>
                        <div className="wrap-content">
                            {dataAnnouncement
                                .filter((_, i) => i < 6)
                                .map((item, i) => (
                                    <AnnouncementItem
                                        key={i}
                                        title={item.title}
                                        date={item.date}
                                        desc={item.desc}
                                    />
                                )
                                )}
                        </div>
                    </div>
                    <div className="wrap-section gallery">
                        <div className="wrap-label">
                            <div className="label">Galeri Muhammadiyah 4</div>
                            <div className="see-all">
                                <Link to={"/gallery"}>Lihat Galeri Semuanya</Link>
                            </div>
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
