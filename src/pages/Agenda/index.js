import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickers } from "components";
import dataAgenda from "../../data/dataAgenda.json"
import "./agenda.scss"
import { EmptyAgenda } from "assets";

export default function Agenda(props) {
    const moment = require('moment');
    require('moment/locale/id');
    const agenda = {};
    dataAgenda.forEach(item => {
        agenda[item.date] = item.events;
    });
    const [selectedDates, setSelectedDates] = useState([]);

    useEffect(() => {
        props.onMenu("NewsAndInformation")

        let selected = []

        dataAgenda.map(item => {
            const dateString = moment(item.date).format('YYYY-MM-DD');
            selected.push(dateString)
        })

        setSelectedDates(selected)
    }, [])

    const handleDateChange = (date) => {
        const dateString = moment(date).format('YYYY-MM-DD');
        if (selectedDates.includes(dateString)) {
            setSelectedDates(selectedDates.filter(d => d !== dateString));
        } else {
            setSelectedDates([...selectedDates, dateString]);
        }
    };

    const filteredAgenda = () => {
        const result = dataAgenda.filter(item => selectedDates.includes(item.date));

        return result
    }

    return (
        <div className="agenda-page">
            <Container>
                <div className="page-title">
                    <div className="date-info">
                        <div className="title">Hari ini</div>
                        <div className="desc">Selasa, 2 Juni 2024</div>
                    </div>
                    <div className="wrap-agenda">
                        <div className="title">Agenda : 2 kegiatan</div>
                        <div className="desc">Pentas Seni dan Lomba Futsal & Rapat Osis</div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="calendar-section">
                        <h3 className="section-label">Pilih Tanggal</h3>
                        <div className="wrap-calendar">
                            <DatePickers
                                selected={null}
                                inline={true}
                                highlightDates={selectedDates.map(date => new Date(date))}
                                onChange={(handleDateChange)}
                            />

                        </div>
                    </div>
                    <div className="agenda-section">
                        <h3 className="section-label">Agenda bulan ini</h3>
                        <div className="wrap-agenda">
                            <div className="left-section" />
                            <div className="right-section" />
                            <div className="agenda-content default-scrollbar">
                                {
                                    filteredAgenda().length > 0 ?
                                        filteredAgenda().map((agenda, i) => (
                                            <div className={"agenda-item" + (i === 0 ? " first" : filteredAgenda().length === i + 1 ? " last" : "")} key={i}>
                                                <div className="left-side">{moment(agenda.date).format('D MMMM YYYY')}</div>
                                                <div className="right-side">
                                                    <ol className="event-items">
                                                        {agenda.events.map((item, j) => (
                                                            <li className="item" key={j}>{item}</li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div className="agenda-empty">
                                            <img className="icon" src={EmptyAgenda} alt="Empty" />
                                            <h3 className="title">Agenda Kosong</h3>
                                            <p className="desc">Belum ada agenda di tanggal yang anda pilih</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
