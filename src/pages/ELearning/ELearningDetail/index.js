import React, { useEffect, useState } from "react"
import { Breadcrumbs, Buttons, Paginations, SearchField } from "components"
import { Container, Dropdown, Table } from "react-bootstrap"
import { useLocation } from "react-router-dom";
import { saveAs } from "file-saver";
import { Chevron } from "assets";
import { convertToSlug } from "libs/convertToSlug";
import "./eLearningDetail.scss"

export default function ELearningDetail(props) {
    const moment = require("moment");
    require("moment/locale/id");
    const location = useLocation();
    const dataState = location.state
    const maxData = 15
    const [indexStartData, setIndexStartData] = useState(0)
    const [indexEndData, setIndexEndData] = useState(maxData)
    const [searchText, setSearchText] = useState("")
    const [filterSearchData, setFilterSearchData] = useState([])
    const [pageData, setPageData] = useState(1)
    const [isloading, setLoading] = useState(false)
    const [key, setKey] = useState("")

    useEffect(() => {
        props.onMenu("ELearningAndAlQuran")

        setFilterSearchData(dataState.materials)
    }, [])

    const handleFilter = (type) => {
        let newDataMaterials = filterSearchData

        if (type === 3) { //A to Z
            newDataMaterials = filterSearchData.sort((a, b) => a.name.localeCompare(b.name)).slice()
        }
        else if (type === 4) { // Z to A
            newDataMaterials = filterSearchData.sort((a, b) => a.name.localeCompare(b.name)).reverse().slice()
        }

        setFilterSearchData(newDataMaterials)
    }

    const handleChangeSearch = () => {
        setFilterSearchData(dataState.materials)
    };

    const filterListSearch = (e) => {
        let updatedList = dataState.materials.filter(item => {
            return (
                item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
            );
        });

        setPageData(1)
        setIndexStartData(0)
        setIndexEndData(maxData)
        setFilterSearchData(updatedList)
        setSearchText(e.target.value)
    };

    const handleClickPage = (page) => {
        setIndexStartData((page - 1) * maxData)
        setIndexEndData((page) * maxData)
        setPageData(page)
    }

    const saveFile = (key, title, url) => {
        setLoading(true)
        setKey(key)
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                setLoading(false)
                saveAs(blob, convertToSlug(title) + ".pdf");
            })
            .catch(error => {
                setLoading(false)
                alert("karena file terkena CORS, disarankan aktifkan library 'Allow CORS' di Chrome")

            });
    }

    const handleClear = () => {
        setSearchText("")
        setFilterSearchData(dataState.materials)
    }

    return (
        <Container className="elearning-detail-page">
            <Breadcrumbs
                to={"/elearning"}
                title="Kembali ke halaman E-Learning"
            />
            <div className="page-header">
                <div className="title">{dataState.subject}</div>
                <div className="desc">Cari Materi dan download materi mata pelajaran yang kamu butuhkan</div>
                <div className="teacher">
                    <p className="label">Pengajar : </p>
                    <p className="value">{dataState.teacher}</p>
                </div>
            </div>
            <div className="page-content">
                <div className="search-sort-section">
                    <div className="wrap-search">
                        <SearchField
                            className="search-material"
                            name="search"
                            placeholder="Cari judul materi yang dibutuhkan"
                            value={searchText}
                            onClick={handleChangeSearch}
                            onChange={filterListSearch}
                            onClear={handleClear}
                            block
                            searchIcon
                        />
                    </div>
                    <div className="wrap-sort">
                        <Dropdown bsPrefix="dropdown-item no-select">
                            <Dropdown.Toggle bsPrefix="btn-menu-item" as={"div"}>
                                Urutkan dari
                                <img className="chevron" src={Chevron} alt="Chevron" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu bsPrefix="dropdown-menu" alignRight align="right">
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
                <div className="wrap-table">
                    <Table striped size="md">
                        <thead>
                            <tr>
                                <th className="corner top-left">No</th>
                                <th>Nama Materi</th>
                                <th>Tanggal Upload</th>
                                <th className="corner top-right">Download Materi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterSearchData
                                .filter((item, i) => i >= indexStartData && i < indexEndData)
                                .map((item, i) => (
                                    <tr key={indexStartData + i} className={i%2 === 0 ? "white" : "grey"}>
                                        <td>{indexStartData + i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{moment(item.date).format("DD/MM/YYYY")}</td>
                                        <td>
                                            <div className="btn-download">
                                                <Buttons
                                                    title="Download"
                                                    variant="general"
                                                    size="xs"
                                                    disabled={isloading && i === key}
                                                    onClick={() => saveFile(i, item.name, item.downloadUrl)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                        </tbody>
                    </Table>
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
    )
}
