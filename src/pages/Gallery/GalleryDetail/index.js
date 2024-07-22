import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom";
import { Breadcrumbs, PopUpPhotoViewer } from "components";
import "./galleryDetail.scss"

export default function GalleryDetail(props) {
    const [isPopUpPhotoViewer, setPopUpPhotoViewer] = useState(false)
    const [selectedShowPhoto, setSelectedShowPhoto] = useState(null)
    const moment = require('moment');
    require('moment/locale/id');
    const location = useLocation();
    const dataState = location.state

    console.log(dataState)

    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("Gallery")
    }, [])

    const handleShowPhoto = (photo) => {
        setSelectedShowPhoto(photo)
        setPopUpPhotoViewer(true)
    }

    return (
        <Container className="gallery-detail-page">
            <Breadcrumbs
                to={"/gallery"}
                title="Kembali ke halaman Galleri"
            />
            <div className="gallery-header">
                <div className="title">{dataState.title}</div>
                <div className="date">{moment(dataState.date).format('dddd, DD MMMM YYYY')}</div>
                <div className="count-photo">
                    <p className="label">Jumlah : </p>
                    <p className="value">{dataState.listPhoto.length} Foto</p>
                </div>
            </div>
            <div className="gallery-content">
                <Row xs={1} md={3}>
                    {dataState.listPhoto
                        .map((item, i) => (
                            <Col key={i}>
                                <img
                                    className="gallery-item"
                                    src={item} alt="Item"
                                    onClick={() => handleShowPhoto(item)}
                                />
                            </Col>
                        ))}
                </Row>
            </div>
            <PopUpPhotoViewer
                isShow={isPopUpPhotoViewer}
                selectedPhoto={selectedShowPhoto}
                listPhoto={dataState.listPhoto}
                onShow={(value) => setPopUpPhotoViewer(value)}
                onSelectPhoto={(value) => setSelectedShowPhoto(value)}
            />
        </Container>
    )
}