import React, { useEffect, useState } from 'react'
import { Container, Dropdown, DropdownButton } from "react-bootstrap"
import dataAnnouncement from "../../data/dataAnnouncement.json"
import { AnnouncementItem, Buttons, MiniGallery } from "components"
import "./announcement.scss"
import { Chevron } from "assets"
import { Link } from "react-router-dom"

export default function Announcement(props) {
    const [announcementList, setAnnouncementList] = useState([]);
    const [maxAnnouncementList, setMaxAnnouncementList] = useState(6);

    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("NewsAndInformation")

        setAnnouncementList(dataAnnouncement)
    }, [])

    const handleExpand = () => {
        setMaxAnnouncementList(announcementList.length)
    }

    const handleFilter = (type) => {
        let newAnnouncementList = announcementList

        if (type === 1) { // Tanggal Terbaru
            newAnnouncementList = announcementList.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().slice() 
        }
        else if (type === 2) { // Tanggal Terlama
            newAnnouncementList = announcementList.sort((a, b) => new Date(a.date) - new Date(b.date)).slice()
        }
        else if (type === 3) { //A to Z
            newAnnouncementList = announcementList.sort((a, b) => a.title.localeCompare(b.title)).slice()
        }
        else if (type === 4) { // Z to A
            newAnnouncementList = announcementList.sort((a, b) => a.title.localeCompare(b.title)).reverse().slice()   
        }

        setAnnouncementList(newAnnouncementList)
    }

    return (
        <div className="announcement-page">
            <Container>
                <div className="page-label">
                    <h3 className="title">Pengumuman</h3>
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
                    <div className="announcement-list">
                        {announcementList.map((item, i) => {
                            if (i < maxAnnouncementList) {
                                return (
                                    <AnnouncementItem
                                        key={i}
                                        title={item.title}
                                        date={item.date}
                                        desc={item.desc}
                                    />
                                )
                            }
                        })}
                    </div>
                    {dataAnnouncement.length !== maxAnnouncementList && (
                        <div className="wrap-see-all">
                            <Buttons title="Lihat Selengkapnya" variant="outline-general" size="xs" onClick={() => handleExpand()} />
                        </div>
                    )}
                    <div className="wrap-gallery">
                        <div className="wrap-label">
                            <div className="label">Galeri Muhammadiyah 4</div>
                        </div>
                        <div className="wrap-content">
                            <MiniGallery />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
