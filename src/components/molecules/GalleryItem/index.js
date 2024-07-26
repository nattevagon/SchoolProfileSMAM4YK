import React from 'react'
import { Buttons } from "components"
import { Link } from "react-router-dom";
import "./galleryItem.scss"

export default function GalleryItem(props) {
    const moment = require('moment');
    require('moment/locale/id');
    const { item } = props

    return (
        <div className="gallery-item">
            <div className="wrap-item">
                <img className="image" src={item.listPhoto[0]} alt="Gallery" />
                <div className="title">{item.title}</div>
                <div className="date">{moment(item.date).format('dddd, D MMMM YYYY')}</div>
                <div className="count-photo"><p className="label">Jumlah : </p>{item.listPhoto.length} Foto</div>
            </div>
            <div className="wrap-btn">
                <Link
                    to={"/gallery/" + item.permalink}
                    state={item}
                >
                    <Buttons title="Lihat Foto" variant="general" size="xs" block />
                </Link>
            </div>
        </div>
    )
}
