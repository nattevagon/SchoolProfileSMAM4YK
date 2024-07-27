import { Buttons } from "components/atoms"
import React from 'react'
import { Link } from "react-router-dom"
import "./eLearningItem.scss"

export default function ELearningItem(props) {
    const { item } = props

    return (
        <div className="elearning-item">
            <img className="wrap-image" src={item.imgUrl} alt="News" />
            <div className="wrap-item">
                <div className="title">{item.subject}</div>
                <div className="teacher">
                    <div className="label">Nama Pengajar:</div>
                    <div className="content">{item.teacher}</div>
                </div>
                <div className="material">
                    <div className="label">Materi:</div>
                    <div className="content">{item.materials.length} Modul Materi </div>
                </div>
            </div>
            <div className="wrap-btn">
                <Link
                    to={"/elearning/" + item.permalink}
                    state={item}
                >
                    <Buttons title="Lihat Materi" variant="general" size="xs" block />
                </Link>
            </div>
        </div>
    )
}
