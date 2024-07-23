import React, { useEffect, useState } from "react"
import { Col, Container, Dropdown, Row } from "react-bootstrap"
import "./gallery.scss"
import { Background3, Chevron } from "assets"
import { GalleryItem, Paginations } from "components"
import dataGallery from "../../data/dataGallery.json"

export default function Gallery(props) {
    const maxData = 9
    const [galleryList, setGalleryList] = useState([]);
    const [pageData, setPageData] = useState(1)
    const [indexStartData, setIndexStartData] = useState(0)
    const [indexEndData, setIndexEndData] = useState(maxData)

    useEffect(() => {
        props.onMenu("Gallery")

        setGalleryList(dataGallery)
    }, [])

    const handleFilter = (type) => {
        let newGalleryList = galleryList

        if (type === 1) { // Tanggal Terbaru
            newGalleryList = galleryList.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().slice() 
        }
        else if (type === 2) { // Tanggal Terlama
            newGalleryList = galleryList.sort((a, b) => new Date(a.date) - new Date(b.date)).slice()
        }
        else if (type === 3) { //A to Z
            newGalleryList = galleryList.sort((a, b) => a.title.localeCompare(b.title)).slice()
        }
        else if (type === 4) { // Z to A
            newGalleryList = galleryList.sort((a, b) => a.title.localeCompare(b.title)).reverse().slice()   
        }

        setGalleryList(newGalleryList)
    }

    const handleClickPage = (page) => {
        setIndexStartData((page - 1) * maxData)
        setIndexEndData((page) * maxData)
        setPageData(page)
    }

    return (
        <div className="gallery-page">
            <div className="top-section">
                <div className="background-section">
                    <img src={Background3} alt="Gallery" />
                </div>
                <div className="page-info">
                    <Container>
                        <div className="wrap-school-info">
                            <div className="school-name">SMA Muhammadiyah 4</div>
                            <div className="page-title">Foto & Galleri</div>
                            <div className="page-desc">Foto-foto dan Galleri segala kegiatan dan momen di sekolah</div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="page-label">
                        <h3 className="title">Galeri Seputar Muhammadiyah 4</h3>
                        <div className="wrap-sort">
                            <Dropdown bsPrefix="dropdown-item no-select">
                                <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                                    Urutkan dari
                                    <img className="chevron" src={Chevron} alt="Chevron" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu bsPrefix="dropdown-menu" alignRight align="right">
                                    <div className="sub-menu" onClick={() => handleFilter(1)}>
                                        Tanggal Terbaru
                                    </div>
                                    <div className="sub-menu" onClick={() => handleFilter(2)}>
                                        Tanggal Terlama
                                    </div>
                                    <div className="sub-menu" onClick={() => handleFilter(3)}>
                                        Dari A - Z
                                    </div>
                                    <div className="sub-menu" onClick={() => handleFilter(4)}>
                                        Dari Z - A
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="news-list">
                            <Row xs={1} md={3}>
                                {galleryList
                                    .filter((item, i) => i >= indexStartData && i < indexEndData)
                                    .map((item, i) => (
                                        <Col key={i}>
                                            <GalleryItem item={item} />
                                        </Col>
                                    ))}
                            </Row>
                        </div>
                        <div className="pagination-section">
                            <Paginations
                                maxData={maxData}
                                listCount={dataGallery.length}
                                pageData={pageData}
                                onClickPage={(value) => handleClickPage(value)}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}