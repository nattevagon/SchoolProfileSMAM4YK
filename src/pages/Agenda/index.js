import React, { useEffect } from 'react'
import "./agenda.scss"

export default function Agenda(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("NewsAndInformation")
    }, [])

    return (
        <div className="agenda-page">

        </div>
    )
}
