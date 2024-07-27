import React from 'react'
import { Buttons } from "components"
import { Link } from "react-router-dom";
import "./newsItem.scss"

export default function NewsItem(props) {
    const moment = require('moment');
    require('moment/locale/id');
    const { item } = props

    return (
        <div className="news-item">
            <div className="wrap-item">
                <img className="image" src={item.imgUrl} alt="News" />
                <div className="title">{item.title}</div>
                <div className="date">{moment(item.date).format('dddd, D MMMM YYYY')}</div>
            </div>
            <div className="wrap-btn">
                <Link
                    to={"/news/" + item.permalink}
                    state={item}
                >
                    <Buttons title="Lihat Berita" variant="general" size="xs" block />
                </Link>
            </div>
        </div>
    )
}
