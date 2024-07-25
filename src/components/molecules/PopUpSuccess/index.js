import React from 'react';
import { Modal } from "react-bootstrap";

// Import Swiper styles
import 'swiper/css';
import "./popUpSuccess.scss";
import { CloseX, SuccessAddForm } from "assets";

export default function PopUpSuccess(props) {
    const { isShow, onShow, message } = props

    return (
        <Modal
            className="pop-up-success"
            show={isShow}
            animation={true}
            onHide={() => onShow(false)}
            centered={true}
        >
            <div className="header-section">
                <img className="logo" src={SuccessAddForm} alt="Success"/>
                <div className="title">Berhasil</div>
                <div className="btn-close" onClick={() => onShow(false)}>
                    <img src={CloseX} alt="Close"/>
                </div>
            </div>
            <div className="body-section">
                {message}
            </div>
        </Modal>
    );
}