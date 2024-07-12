import React from 'react'
import { Accordions } from "components"
import "./announcementItem.scss"

export default function AnnouncementItem(props) {
    const moment = require('moment');
    require('moment/locale/id');
    const { item } = props

    return (
        <div className="announcement-item">
            <Accordions>
                <Accordions.Header>
                    <div className="header">
                        <div className="title">{item.title}</div>
                        <div className="date">{moment(item.date).format('dddd, DD MMMM YYYY')}</div>
                    </div>
                </Accordions.Header>
                <Accordions.Body>
                    <div className="desc">
                        {item.desc}
                    </div>
                </Accordions.Body>
            </Accordions>
        </div>
    )
}
