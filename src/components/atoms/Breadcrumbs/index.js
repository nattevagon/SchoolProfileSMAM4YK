import React from "react"
import { ChevronReguler } from "assets"
import { Link } from "react-router-dom"
import "./breadcrumbs.scss"

export default function Breadcrumbs(props) {
    const { to, title } = props

    return (
        <Link className="breadcrumbs" to={to}>
            <img className="chevron" src={ChevronReguler} alt="Chevron" />
            <div className="title">{title}</div>
        </Link>
    )
}
