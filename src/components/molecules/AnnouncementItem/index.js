import React from 'react'
import { Accordions } from "components"
import "./announcementItem.scss"

export default function AnnouncementItem(props) {
    const moment = require('moment');
    require('moment/locale/id');
    const { title, date, desc } = props

    return (
        <div className="announcement-item">
            <Accordions>
                <Accordions.Header>
                    <div className="header">
                        <div className="title">{title}</div>
                        <div className="date">{moment(date).format('dddd, D MMMM YYYY')}</div>
                    </div>
                </Accordions.Header>
                <Accordions.Body>
                    <div className="desc">
                        {desc}
                    </div>
                </Accordions.Body>
            </Accordions>
        </div>
    )
}
