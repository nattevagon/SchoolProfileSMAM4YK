import React, { useEffect } from 'react'
import { Container } from "react-bootstrap"
import { Breadcrumbs } from "components"
import "./newsDetail.scss"

export default function News(props) {
    useEffect(() => {
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
                    <img src="http://www.smamuh4-yogya.sch.id/web/images/foto/galeri/album/DSC00803.JPG" alt="Post" />
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
