import React, { useEffect } from 'react'
import "./agenda.scss"
import { Container } from "react-bootstrap";

export default function Agenda(props) {
    useEffect(() => {
        props.onMenu("NewsAndInformation")
    }, [])

    return (
        <div className="agenda-page">
            <Container>
                <div className="page-title">
                    <div className="date-info">
                        <div className="title">Hari ini</div>
                        <div className="date">Selasa, 2 Juni 2024</div>
                    </div>
                    <div className="wrap-agenda">
                        <div className="title">Agenda : 2 kegiatan</div>
                        <div className="desc">Pentas Seni dan Lomba Futsal & Rapat Osis</div>
                    </div>
                </div>
                <div className="page-content">

                </div>
            </Container>
        </div>
    )
}
