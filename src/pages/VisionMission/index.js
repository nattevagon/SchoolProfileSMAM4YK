import React, { useEffect } from 'react'
import { Container } from "react-bootstrap"

export default function VisionMission(props) {
    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    return (
        <div className="vision-mission-page">
            <Container>
                Visi Misi
            </Container>
        </div>
    )
}
