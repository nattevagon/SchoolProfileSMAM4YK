import React, { useEffect, useState } from 'react'
import { Chevron } from "assets"
import { Col, Container, Dropdown, Row } from "react-bootstrap"
import dataNews from "../../data/dataNews.json"
import { NewsItem, Paginations } from "components"
import "./news.scss"

export default function News(props) {
    const maxData = 9
    const [newsList, setNewsList] = useState([]);
    const [pageData, setPageData] = useState(1)
    const [indexStartData, setIndexStartData] = useState(0)
    const [indexEndData, setIndexEndData] = useState(maxData)

    useEffect(() => {
        props.onMenu("NewsAndInformation")

        setNewsList(dataNews)
    }, [])

    const handleFilter = (type) => {
        let newAnnouncementList = newsList

        if (type === 1) { // Tanggal Terbaru
            newAnnouncementList = newsList.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().slice() 
        }
        else if (type === 2) { // Tanggal Terlama
            newAnnouncementList = newsList.sort((a, b) => new Date(a.date) - new Date(b.date)).slice()
        }
        else if (type === 3) { //A to Z
            newAnnouncementList = newsList.sort((a, b) => a.title.localeCompare(b.title)).slice()
        }
        else if (type === 4) { // Z to A
            newAnnouncementList = newsList.sort((a, b) => a.title.localeCompare(b.title)).reverse().slice()   
        }

        setNewsList(newAnnouncementList)
    }

    const handleClickPage = (page) => {
        setIndexStartData((page - 1) * maxData)
        setIndexEndData((page) * maxData)
        setPageData(page)
    }

    return (
        <Container className="news-index-page">
            <div className="page-label">
                <h3 className="title">Berita Seputar Muhammadiyah 4</h3>
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
                        {newsList
                            .filter((item, i) => i >= indexStartData && i < indexEndData)
                            .map((item, i) => (
                                <Col key={i}>
                                    <NewsItem item={item} />
                                </Col>
                            ))}
                    </Row>
                </div>
                <div className="pagination-section">
                    <Paginations
                        maxData={maxData}
                        listCount={dataNews.length}
                        pageData={pageData}
                        onClickPage={(value) => handleClickPage(value)}
                    />
                </div>
            </div>
        </Container>
    )
}
