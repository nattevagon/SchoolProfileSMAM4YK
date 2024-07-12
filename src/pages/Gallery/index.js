import React, { useEffect } from "react"
import { Container } from "react-bootstrap"

export default function Gallery(props) {
    useEffect(() => {
        props.onMenu("Gallery")
    }, [])

    return (
        <div>
            <Container>
                Gallery
            </Container>
        </div>
    )
}