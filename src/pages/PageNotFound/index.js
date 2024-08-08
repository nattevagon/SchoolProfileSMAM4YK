import React from 'react'
import { Container } from "react-bootstrap"
import { PageNotFound404 } from "assets"
import "./pageNotFound.scss"

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <Container>
                <div className="content">
                    <img className="icon" src={PageNotFound404} alt="PageNotFound" />
                    <h2 className="title">Halaman tidak ditemukan</h2>
                </div>
            </Container>
        </div>
    )
}
