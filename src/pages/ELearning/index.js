import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from "react-bootstrap"
import { BackgroundLearning, Chevron } from "assets"
import { ELearningItem, Paginations, SearchField } from "components"
import dataSubjects from "../../data/dataSubjects.json"
import "./eLearning.scss"

export default function ELearning(props) {
    const maxData = 12
    const [pageData, setPageData] = useState(1)
    const [indexStartData, setIndexStartData] = useState(0)
    const [indexEndData, setIndexEndData] = useState(maxData)
    const [searchText, setSearchText] = useState("")
    const [filterSearchData, setFilterSearchData] = useState([])

    useEffect(() => {
        props.onMenu("ELearningAndAlQuran")

        setFilterSearchData(dataSubjects)
    }, [])

    const handleFilter = (type) => {
        let newDataSubjects = filterSearchData

        if (type === 1) { //Materi Terbanyak
            newDataSubjects = filterSearchData.sort((a, b) => b.materials.length - a.materials.length).slice()
        }
        else if (type === 2) { // Uploadan Terbaru
            newDataSubjects = filterSearchData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice() 
        }
        else if (type === 3) { // Uploadan Terlama
            newDataSubjects = filterSearchData.sort((a, b) => new Date(a.date) - new Date(b.date)).slice()
        }
        else if (type === 4) { //A to Z
            newDataSubjects = filterSearchData.sort((a, b) => a.subject.localeCompare(b.subject)).slice()
        }
        else if (type === 5) { // Z to A
            newDataSubjects = filterSearchData.sort((a, b) => a.subject.localeCompare(b.subject)).reverse().slice()
        }

        setFilterSearchData(newDataSubjects)
    }

    const handleChangeSearch = () => {
        setFilterSearchData(dataSubjects)
    };

    const filterListSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchText(query)
        
        const updatedList = dataSubjects.filter(item => 
            item.subject.toLowerCase().includes(query) || 
            item.teacher.toLowerCase().includes(query)
        );

        setPageData(1)
        setIndexStartData(0)
        setIndexEndData(maxData)
        setFilterSearchData(updatedList)
    };

    const handleClickPage = (page) => {
        setIndexStartData((page - 1) * maxData)
        setIndexEndData((page) * maxData)
        setPageData(page)
    }

    return (
        <div className="elearning-page">
            <div className="top-section">
                <div className="background-section">
                    <img src={BackgroundLearning} alt="BackgroundLearning" />
                </div>
                <div className="page-info">
                    <Container>
                        <div className="wrap-school-info">
                            <div className="school-name">SMA Muhammadiyah 4</div>
                            <div className="page-title">E-Learning</div>
                            <div className="page-desc">Kebersamaan, Disiplin & Prestasi</div>
                        </div>
                    </Container>
                </div>
                <div className="search-sort-section">
                    <div className="wrap-search">
                        <SearchField
                            className="search-field"
                            name="search"
                            placeholder="Cari Mata Pelajaran / Nama Guru Pengajar"
                            value={searchText}
                            onClick={handleChangeSearch}
                            onChange={filterListSearch}
                            block={true}
                        />
                    </div>
                    <div className="wrap-sort">
                        <Dropdown bsPrefix="dropdown-item no-select">
                            <Dropdown.Toggle bsPrefix="btn-menu-item" as={'div'}>
                                Urutkan dari
                                <img className="chevron" src={Chevron} alt="Chevron" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu bsPrefix="dropdown-menu" alignRight align="right">
                                <div className="sub-menu" onClick={() => handleFilter(1)}>
                                    Materi Terbanyak
                                </div>
                                <div className="sub-menu" onClick={() => handleFilter(2)}>
                                    Uploadan Terbaru
                                </div>
                                <div className="sub-menu" onClick={() => handleFilter(3)}>
                                    Uploadan Terlama
                                </div>
                                <div className="sub-menu" onClick={() => handleFilter(4)}>
                                    Dari A - Z
                                </div>
                                <div className="sub-menu" onClick={() => handleFilter(5)}>
                                    Dari Z - A
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <Container>
                    <div className="page-label">
                        <h3 className="title">E-Learning SMA Muhammadiyah 4</h3>
                        <p className="desc">Daftar mata pelajaran dan modul materi serta guru pengampu di SMA Muhammadiyah 4 Yogyakarta </p>
                    </div>
                    <div className="page-content">
                        <div className="elearning-list">
                            <Row xs={1} md={4} lg={4}>
                                {filterSearchData
                                    .filter((_, i) => i >= indexStartData && i < indexEndData)
                                    .map((item, i) => (
                                        <Col key={i}>
                                            <ELearningItem item={item} />
                                        </Col>
                                    ))}
                            </Row>
                        </div>
                        <div className="pagination-section">
                            <Paginations
                                maxData={maxData}
                                listCount={filterSearchData.length}
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
