import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Paginations, SearchField, TextFields } from "components"
import dataAlQuran from "../../data/dataAlQuran.json"
import "./alQuran.scss"

export default function AlQuran(props) {
    const maxData = 5
    const [pageData, setPageData] = useState(1)
    const [indexStartData, setIndexStartData] = useState(0)
    const [indexEndData, setIndexEndData] = useState(maxData)
    const [searchSurah, setSearchSurah] = useState("")
    const [filterSearchSurah, setFilterSearchSurah] = useState([])
    const [selectedAyah, setSelectedAyah] = useState("")
    const [selectedSurah, setSelectedSurah] = useState("")

    useEffect(() => {
        props.onMenu("ELearningAndAlQuran")

        setFilterSearchSurah(dataAlQuran)
    }, [])

    const handleChangeSearchSurah = () => {
        setFilterSearchSurah(dataAlQuran)
    }

    const filterListSearchSurah = (e) => {
        let updatedList = dataAlQuran.filter(item => {
            return (
                item.transliteration.toLowerCase().search(e.target.value.toLowerCase()) !== -1
            );
        });

        setFilterSearchSurah(updatedList)
        setSearchSurah(e.target.value)
    }

    const handleClearSurah = () => {
        setSearchSurah("")
        setFilterSearchSurah(dataAlQuran)
    }

    const handleChangeAyah = (e) => {
        setSelectedAyah(parseInt(e.target.value))
    }

    const handleSelectSurah = (item) => {
        setSelectedSurah(item)
    }

    const handleClickPage = (page) => {
        setIndexStartData((page - 1) * maxData)
        setIndexEndData((page) * maxData)
        setPageData(page)
    }

    return (
        <div className="alquran-page">
            <Container>
                <Row className="page-content">
                    <Col className="left-side">
                        <h2 className="page-label">Al-Quran</h2>
                        <div className="search-section">
                            <SearchField
                                className="form-surah"
                                name="surah"
                                placeholder="Surah"
                                value={searchSurah}
                                onClick={handleChangeSearchSurah}
                                onChange={filterListSearchSurah}
                                onClear={handleClearSurah}
                                block
                            />
                            <TextFields
                                className="form-ayah"
                                type="number"
                                name="ayah"
                                placeholder="Ayah"
                                value={selectedAyah}
                                onChange={handleChangeAyah}
                                block
                            />
                        </div>
                        <div className="surah-ayah-section">
                            <div className="surah-list default-scrollbar">
                                {filterSearchSurah.map((item, i) => (
                                    <div className={"item" + (selectedSurah.id === item.id ? " active" : "")} onClick={() => handleSelectSurah(item)} key={i}>
                                        <p className="number">{item.id}.</p>
                                        <p className="title">{item.latin}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="ayah-list default-scrollbar">
                                {(selectedSurah && selectedSurah.ayahs.length > 0) && (
                                    selectedSurah.ayahs.map((item, i) => (
                                        <div
                                            className={"item" + (selectedAyah === item.number ? " active" : "")}
                                            key={i}
                                            onClick={() => setSelectedAyah(item.number)}
                                        >
                                            {item.number}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col className="right-side">
                        {selectedSurah && (
                            <div className="surah-content-list">
                                <h1 className="wrap-title">Surah {selectedSurah.id}. {selectedSurah.latin}</h1>
                                {selectedSurah.ayahs.length > 0 && (
                                    <div className="wrap-content">
                                        <Row className="content-item label">
                                            <Col className="quran-side">
                                                <div className="label">Qur’an</div>
                                            </Col>
                                            <Col className="translate-side">
                                                <div className="label">Terjemahan</div>
                                            </Col>
                                        </Row>
                                        {selectedSurah.ayahs
                                            .filter((_, i) => i >= indexStartData && i < indexEndData)
                                            .map((item, i) => (
                                                <Row className={"content-item content" + (selectedAyah === item.number ? " active" : "")}>
                                                    <Col className="quran-side">
                                                        <div className="content">
                                                            <div className="arabic-text">{item.arabic}</div>
                                                            <div className="latin-text">{item.latin}</div>
                                                        </div>
                                                    </Col>
                                                    <Col className="translate-side">
                                                        <div className="content">{item.translation}</div>
                                                    </Col>
                                                </Row>
                                            ))}
                                        <div className="pagination-section">
                                            <Paginations
                                                maxData={maxData}
                                                listCount={selectedSurah.ayahs.length}
                                                pageData={pageData}
                                                onClickPage={(value) => handleClickPage(value)}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
