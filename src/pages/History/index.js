import React, { useEffect } from 'react'
import { Container } from "react-bootstrap"
import { QuotesBig, School1, SchoolLogo, SilhouetteMen, SilhouetteWomen } from "assets"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import dataListHeadmaster from "../../data/dataListHeadmaster.json"
import "./history.scss"

export default function History(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("Profile")
    }, [])

    return (
        <div className="history-page">
            <div className="top-section">
                <Container>
                    <h2 className="page-title">Sejarah Muhammadiyah 4 Yogyakarta</h2>
                    <div className="wrap-brief-history">
                        <div className="box-brief-history">
                            <div className="label">Sejarah Singkat</div>
                            <div className="content">
                                SMA Muhammadiyah 4 Yogyakarta terletak di lingkungan kompleks Masjid Perak Kotagede Yogyakarta, tepatnya di
                                <br />Jalan Mondorakan No. 51 Kotagede Yogyakarta. Didirikan pada tanggal 2 Januari 1978 oleh Pimpinan Cabang
                                <br />Muhammadiyah Kotagede Bagian Pendidikan dan Pengajaran yang pada waktu itu diketuai oleh Drs. H. Asy’ari Anwar
                                <br />dan sekretarisnya Suhaib Anwar dengan membentuk sebuah Tim. Tim ini diketuai oleh R. Djoemairi Martokoesoemo
                                <br />dan anggotanya yang sebagian besar adalah guru- guru SMP Muhammadiyah 7 Yogyakarta antara lain
                                <br />H. Suhirman, Drs. Wahzari, H. Arsyad AU, Dahrowi, Sumarwan MS, B.A. dan Hadjoewad, B.A.
                            </div>
                        </div>
                        <div className="school-image">
                            <img className="school" src={School1} alt="School" />
                            <img className="quotes top" src={QuotesBig} alt="Quotes" />
                            <img className="quotes bottom" src={QuotesBig} alt="Quotes" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="list-school-headmaster">
                        <div className="label">
                            <div className="wrap-school">
                                <img className="school-logo" src={SchoolLogo} alt="SchoolLogo" />
                                <div className="school-name">SMA Muhammadiyah 4 Yogyakarta</div>
                            </div>
                            <div className="content-desc">Sembilan Kali Pergantian Kepala sekolah</div>
                            <div className="content-slider-list">
                                <Swiper
                                    slidesPerView={3}
                                    initialSlide={4}
                                    navigation={true}
                                    modules={[Navigation]}
                                >
                                    {dataListHeadmaster.slice().reverse().map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <div className={"slider-item" + (dataListHeadmaster.length === i+1 ? " active" : "")}>
                                                <div className="wrap-media">
                                                    <div className={"background-shape" + (item.imgUrl !== null ? " person" : " silhouette")}/>
                                                    <img className={"image" + (item.imgUrl !== null ? " person" : " silhouette")} src={item.imgUrl !== null ? item.imgUrl : (item.gender === 1 ? SilhouetteMen : SilhouetteWomen)} alt="Headmaster"/>
                                                </div>
                                                <div className="wrap-line-slider">
                                                    <hr className="line-slider"></hr>
                                                    <div className="dot-slider"></div>
                                                </div>
                                                <div className="wrap-content">
                                                    <div className="period"> {item.period} </div>
                                                    <div className="person-name">{item.name}</div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="advanced-history">
                        <div className="wrap-advanced-history">
                            <div className="label">“ Lanjutan Sejarah Muhammadiyah 4</div>
                            <div className="content-desc">
                                Pada awalnya guru SMA Muhammadiyah 4 Yogyakarta banyak berasal dari guru SMP Muhammadiyah 7 Yogyakarta, kemudian bekerja sama
                                <br/>dengan SMA Negeri 5 Yogyakarta. Pertama kali ujian menggabung dengan SMA Negeri 5 Yogyakarta, termasuk kegiatan praktikum IPA.
                                <br/>Pada masa kepemimpinan Hj. Sunarti Sumarno, sekolah mulai menata dan melengkapi sarana prasarana sehingga kegiatan praktikum
                                <br/>IPA sudah dapat dilaksanankan di SMA Muhammadiyah 4 Yogyakarta sendiri. Dari tahun ke tahun sekolah berusaha meningkatkan kualitas
                                <br/>maupun kuantitas peserta didik dan sarana prasarana sekolah. Pada tahun 1998 sekolah menyelenggarakan pendidikan inklusi yang menerima
                                <br/>dan mendidik  peserta didik berkebutuhan khusus (difable) terpadu dengan siswa yang lain. Pada tahun 2009 sekolah telah terakreditasi peringkat A
                                <br/>dengan nilai 92,60 sesuai surat keputusan Badan Akreditasi Provinsi Sekolah/Madrasah (BAP S/M) Provinsi Daerah Istimewa Yogyakarta
                                <br/>Nomor 12.01/BAP/TU/X/2009 tanggal 12 Oktober 2009, dan terakhir terakreditasi pada tahun 2019 sampai sekarang.
                                <br/>Saat ini sekolah memiliki 11 rombongan belajar, 39 pendidik dan 14 tenaga kependidikan
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
