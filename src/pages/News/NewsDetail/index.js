import React, { useEffect } from 'react'
import { BackgroundNews, Chevron, ChevronReguler } from "assets"
import { Col, Container, Dropdown, Row } from "react-bootstrap"
import { Breadcrumbs, NewsItem, Paginations } from "components"
import { Link } from "react-router-dom"
import "./newsDetail.scss"

export default function News(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("NewsAndInformation")
    }, [])

    return (
        <Container className="news-detail-page">
            <Breadcrumbs
                to={"/news"}
                title="Kembali ke halaman berita"
            />
            <div className="news-header">
                <div className="wrap-media">
                    <img src="https://s3-alpha-sig.figma.com/img/1830/78f6/cf44ef91ef7cef6aa1090c0dfe58c066?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n8tCCCx-w71JvS6Ywki1ijZAOxCdlfRipjF4ttP6iCdGSQYqAToVkHUbsO00yv4jEhXaYndzzsNwPMGSFUtojn3Cn7qHrZ8IKG-ggNOWu1Hw8d9nVmU9zJqy5NJE9C-CLDEyGmLaLvoC6h7lHFGc1QOQSKqe7UZhGXDfGgCXixZSSqcQXds-bybUWJ0WzDh8B4~xgDPuLN4oEhO2Pvt83HROtvgs5pEsa~gsFrJzbU7Eutk0qvGU9Ul20HXcSFjZBSPIuyPTaWlesNa6i9FDfsE99ZohGt6vNBQHF9nn~y~~cqCsLcsgDuNDPA5j3EEkWKp1EnAnD~etLjfCMsvcog__" alt="Post" />
                </div>
                <div className="wrap-content">
                    <div className="title">Jejak Petualang Qabilah Ismail Siswa SMA Muhammadiyah 4 Yogyakarta</div>
                    <div className="date">Senin, 5 Juli 2023</div>
                </div>
            </div>
            <div className="news-content">
                <p>
                    Hizbul Watan Qabilah Ismail kelas X SMA Muhammadiyah 4 Yogyakarta melaksanakan kemah di  Bumi Perkemahan Kwartir Pusat Hizbul Wathan, Komplek Pusbang Muhammadiyah, Jalan Kaliurang KM 23,Ngipiksari, Hargobinangun, Pakem, Sleman pada 16 sampai dengan 18 Mei 2024. Kegiatan ini bertujuan untuk menambah pengalaman dan meningkatkan kemandirian peserta didik kelas X.
                    <br/>
                    <br/>
                    Pada upacara pembukaan, Kepala Sekolah, Hj. Tri Suryani sangat mengapresiasi kegiatan ini dan berpesan kepada peserta kemah agar mengikuti kemah dengan sebaik-baiknya. Dalam upacara pembukaan tersebut, para peserta mengikuti dengan sangat disiplin dan penuh perhatian.
                    <br/>
                    <br/>
                    Para peserta kemah harus mengikuti berbagai rangkaian kegiatan pada kegiatan kemah selama tiga hari tersebut. Kegiatan yang diikuti oleh para peserta diantaranya, pertama, mendirikan tenda. Dalam mendirikan tenda, para harus bekerja sama, bahu membahu sehingga tenda berdiri dengan baik. Kedua, para peserta harus melaksanakan kegiatan keagamaan seperti salat, tadarus, dan kajian keislaman. Kegiatan itu tentunya untuk meningkatkan keimanan dan ketaqwaan para peserta. Ketiga, para peserta harus mengikuti perjalanan malam dengan suasana medan jelajah yang cukup ekstrim karena medan jelajah sangat rimbun, gelap, dan jalannya terjal. Kegiatan ini tentunya mengajarkan para peserta agar berhati-hati, kompak, dan berani menghadapi tantangan. Keempat, para peserta harus mengikuti kegiatan tadabur alam. Para peserta harus melintasi rute yang sudah ditentukan dan menyelesaikan permainan di setiap pos. Kegiatan ini bertujuan meningkatkan kesadaran, kepedulian, dan kesabaran. Kelima, para peserta harus mengikuti lomba memasak dan api unggun yang dibarengi dengan pentas seni dari setiap regu. Kegiatan ini bertujuan meningkatkan keaktifan dan kepercayaan diri. Keenam, para peserta harus mengikuti outbound yang meningkatkan kekompakan dan kecepatan dalam memecahkan masalah. Ketujuh, lomba kebersihan bongkar tenda yang bertujuan meningkatkan tanggung jawab dalam hal kebersihan. Kegiatan terakhir yakni upacara penutupan yang dipimpin oleh Kepala Sekolah. Terlihat para peserta masih disiplin mengikuti walaupun sudah terlihat lelah.
                    <br/>
                    <br/>
                    Semoga kegiatan-kegiatan yang diikuti selama tiga hari tersebut bisa meningkatkan kualitas diri.  Selain itu, semoga para peserta juga lebih bisa menjaga atau merawat alam.(Sumber : Gandi Utama, S.Pd)
                </p>
            </div>
        </Container>
    )
}