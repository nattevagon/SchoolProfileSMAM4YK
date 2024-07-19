import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import { TransformWrapper, TransformComponent, useControls, } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut } from "assets";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./popUpPhotoViewer.scss";

export default function PopUpPhotoViewer(props) {
    const { isShow, selectedPhoto, listPhoto, onSelectPhoto } = props;

    return (
        <Modal
            className="pop-up-photo-viewer"
            show={isShow}
            animation={true}
            onHide={() => props.onShow(false)}
            centered={true}
        >
            <div className="photo-viewer">
                <div className="viewer-section">
                    <TransformWrapper>
                        {({ zoomIn, zoomOut }) => (
                            <React.Fragment>
                                <div className="tools">
                                    <div className="control-btn gap no-select" id="zoomIn" onClick={() => zoomIn()}>
                                        <img src={ZoomIn} alt="ZoomIn" />
                                    </div>
                                    <div className="control-btn no-select" id="zoomOut" onClick={() => zoomOut()}>
                                        <img src={ZoomOut} alt="ZoomOut" />
                                    </div>
                                </div>
                                <TransformComponent>
                                    <div className="image-content">
                                        <img className="item" src={selectedPhoto} alt="image content" />
                                    </div>

                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>
                <div className="gallery-section">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={'auto'}
                    >
                        {listPhoto.map((item, i) => (
                            <SwiperSlide>
                                <img
                                    className="image-item"
                                    src={item}
                                    alt="Gallery"
                                    onClick={() => onSelectPhoto(item)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Modal>
    );
}