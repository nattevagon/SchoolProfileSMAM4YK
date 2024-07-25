import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap"
import { Accordions, Buttons, Checkboxes, Paginations, SearchField } from "components"
import dataTeacher from "../../data/dataTeacher.json"
import dataStaff from "../../data/dataStaff.json"
import dataStudent from "../../data/dataStudent.json"
import dataAlumni from "../../data/dataAlumni.json"
import dataFilterList from "../../data/dataFilterList.json"
import { Chevron } from "assets"
import "./schoolResidents.scss"
import { Link } from "react-router-dom"

export default function SchoolResidents(props) {
    const maxData = 21
    const [dataResidents, setDataResidents] = useState([])
    const [dataType, setDataType] = useState(1)
    const [indexStartData, setIndexStartData] = useState(0)
    const [indexEndData, setIndexEndData] = useState(maxData)
    const [searchText, setSearchText] = useState("")
    const [filterSearchData, setFilterSearchData] = useState([])
    const [pageData, setPageData] = useState(1)
    const [selectedFilter, setSelectedFilter] = useState([])

    useEffect(() => {
        props.onMenu("Profile")

        switchDataType(dataType)
    }, [])

    const switchDataType = (type) => {
        if (type === 1) {
            setDataResidents(dataTeacher)
            setFilterSearchData(dataTeacher)
        }
        else if (type === 2) {
            setDataResidents(dataStaff)
            setFilterSearchData(dataStaff)
        }
        else if (type === 3) {
            setDataResidents(dataStudent)
            setFilterSearchData(dataStudent)
        }
        else if (type === 4) {
            setDataResidents(dataAlumni)
            setFilterSearchData(dataAlumni)
        }

        setSelectedFilter([])
    }

    const handleFilter = (type) => {
        let newDataResidents = filterSearchData

        if (type === 3) { //A to Z
            newDataResidents = filterSearchData.sort((a, b) => a.name.localeCompare(b.name)).slice()
        }
        else if (type === 4) { // Z to A
            newDataResidents = filterSearchData.sort((a, b) => a.name.localeCompare(b.name)).reverse().slice()
        }

        setFilterSearchData(newDataResidents)
    }

    const handleChangeSearch = () => {
        setFilterSearchData(dataResidents)
    };

    const filterListSearch = (e) => {
        let updatedList = dataResidents.filter(item => {
            return (
                item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
            );
        });

        setPageData(1)
        setIndexStartData(0)
        setIndexEndData(maxData)
        setSelectedFilter([])
        setFilterSearchData(updatedList)
        setSearchText(e.target.value)
    };

    const handleClickPage = (page) => {
        setIndexStartData((page - 1) * maxData)
        setIndexEndData((page) * maxData)
        setPageData(page)
    }

    const handleSwitchDataType = (type) => {
        setDataType(type)
        switchDataType(type)
    }

    const filterType = (type) => {
        if (type === 1) {
            return "subject"
        }
        else if (type === 2) {
            return "position"
        }
        else if (type === 3) {
            return "grade"
        }
        else if (type === 4) {
            return "graduationYear"
        }
    }

    const checkSelectedFilter = (type, name) => {
        const exists = selectedFilter.some(item =>
            item.type === type && item.name === name
        );

        return exists
    }

    const checkSelectedFilterType = (type) => {
        const exists = selectedFilter.some(item =>
            item.type === type
        );

        return exists
    }

    const handleSelectedFilter = (type, name, checked) => {
        let newSelectedFilter;

        if (checked && !checkSelectedFilter(type, name)) {
            newSelectedFilter = [...selectedFilter, {
                type, name
            }];
        }
        else {
            newSelectedFilter = selectedFilter.filter(item => item.name !== name || item.type !== type);
        }

        setSelectedFilter(newSelectedFilter);
    }

    const handleResetFilter = () => {
        setSelectedFilter([])
    }

    const handleSubmitFilter = () => {
        let filteredData = dataResidents

        if (checkSelectedFilterType("gender")) {
            filteredData = dataResidents.filter(item =>
                selectedFilter.some(criterion =>
                    item.gender === criterion.name
                )
            );
        }

        if (dataType === 1) {
            if (checkSelectedFilterType("subject")) {
                filteredData = filteredData.filter(item =>
                    selectedFilter.some(criterion =>
                        item.subject === criterion.name
                    )
                );
            }
        }
        else if (dataType === 2) {
            if (checkSelectedFilterType("position")) {
                filteredData = filteredData.filter(item =>
                    selectedFilter.some(criterion =>
                        item.position === criterion.name
                    )
                );
            }
        }
        else if (dataType === 3) {
            if (checkSelectedFilterType("grade")) {
                filteredData = filteredData.filter(item =>
                    selectedFilter.some(criterion =>
                        item.grade === criterion.name
                    )
                );
            }
        }
        else if (dataType === 4) {
            if (checkSelectedFilterType("graduationYear")) {
                filteredData = filteredData.filter(item =>
                    selectedFilter.some(criterion =>
                        item.graduationYear === criterion.name
                    )
                );
            }
        }

        setPageData(1)
        setIndexStartData(0)
        setIndexEndData(maxData)
        setFilterSearchData(filteredData)
    }

    console.log("Selected", selectedFilter)

    return (
        <div className="school-residents-page">
            <Container>
                <div className="page-title">
                    <h3 className="title">Data Warga Sekolah</h3>
                    <p className="desc">Daftar Prestasi data Guru, data Siswa, Staff, dan Alumni SMA Muhammadiyah 4 Yogyakarta</p>
                </div>
                <div className="page-content">
                    <div className="tab-section">
                        <div
                            className={"tab-item no-select" + (dataType === 1 ? " active" : "")}
                            onClick={() => handleSwitchDataType(1)}
                        >
                            Data Guru
                        </div>
                        <div
                            className={"tab-item no-select" + (dataType === 2 ? " active" : "")}
                            onClick={() => handleSwitchDataType(2)}
                        >
                            Data Staff
                        </div>
                        <div
                            className={"tab-item no-select" + (dataType === 3 ? " active" : "")}
                            onClick={() => handleSwitchDataType(3)}
                        >
                            Data Siswa
                        </div>
                        <div
                            className={"tab-item no-select" + (dataType === 4 ? " active" : "")}
                            onClick={() => handleSwitchDataType(4)}
                        >
                            Data Alumni
                        </div>
                    </div>
                    <Row className="content-section">
                        <Col className="filter-section">
                            <div className="box-filter">
                                <div className="top-filter">
                                    <div className="title">Filter</div>
                                    <hr className="divider-line" />
                                    {dataFilterList
                                        .filter((item, i) => item.filterType === "gender" || item.filterType === filterType(dataType))
                                        .map((item, i) => (
                                            <div className="wrap-filters">
                                                <Accordions className="filter-item" key={i}>
                                                    <Accordions.Header>
                                                        <div className="header-title">{item.filterName}</div>
                                                        <img className="chevron" src={Chevron} alt="Chevron" />
                                                    </Accordions.Header>
                                                    <Accordions.Body>
                                                        {item.filterData.map((filter, j) => (
                                                            <div className="body-item gap-bottom" key={j}>
                                                                <div className="body-title">{filter}</div>
                                                                <Checkboxes
                                                                    key={j}
                                                                    className='checkbox-filter all'
                                                                    isChecked={checkSelectedFilter(item.filterType, filter)}
                                                                    name={filter}
                                                                    onChange={(name, checked) => handleSelectedFilter(item.filterType, name, checked)}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Accordions.Body>
                                                </Accordions>
                                                <hr className="divider-line" />
                                            </div>
                                        ))}
                                </div>
                                <div className="bottom-filter">
                                    <div className="btn-show-data">
                                        <Buttons
                                            title="Tampilkan Data"
                                            variant="outline-general"
                                            size="xs"
                                            block
                                            onClick={() => handleSubmitFilter()}
                                        />
                                    </div>
                                    <div className="btn-reset-filter">
                                        <Buttons
                                            title="Reset Filter"
                                            variant=""
                                            size="xs"
                                            block
                                            onClick={() => handleResetFilter()}
                                        />
                                    </div>
                                </div>
                            </div>
                            {dataType === 4 && (
                                <div className="box-add-form">
                                    <div className="title">Form Data Alumni</div>
                                    <div className="desc">Silahkan Isi dan daftarkan data alumni anda </div>
                                    <Link className="btn-add-form" to="add-alumni">
                                        <Buttons
                                            title="Isi Form Alumni"
                                            variant="outline-general"
                                            size="xs"
                                            block
                                        />
                                    </Link>
                                </div>
                            )}
                        </Col>
                        <Col className="table-section">
                            <div className="wrap-search-sort">
                                <div className="wrap-search">
                                    <SearchField
                                        className="search-field"
                                        name="search"
                                        placeholder="Cari warga sekolah di sini"
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
                                            <th>Nama Pengajar</th>
                                            <th>Jenis Kelamin</th>
                                            {dataType === 1 && (
                                                <th className="corner top-right">Mata Pelajaran</th>
                                            )}
                                            {dataType === 2 && (
                                                <th className="corner top-right">Jabatan Staff</th>
                                            )}

                                            {dataType === 3 && (
                                                <th className="corner top-right">Kelas</th>
                                            )}
                                            {dataType === 4 && (
                                                <th className="corner top-right">Tahun Lulus</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filterSearchData
                                            .filter((item, i) => i >= indexStartData && i < indexEndData)
                                            .map((item, i) => (
                                                <tr key={indexStartData + i}>
                                                    <td>{indexStartData + i + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.gender}</td>
                                                    {dataType === 1 && (
                                                        <td>{item.subject}</td>
                                                    )}
                                                    {dataType === 2 && (
                                                        <td>{item.position}</td>
                                                    )}

                                                    {dataType === 3 && (
                                                        <td>{item.grade}</td>
                                                    )}
                                                    {dataType === 4 && (
                                                        <td>{item.graduationYear}</td>
                                                    )}
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
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
