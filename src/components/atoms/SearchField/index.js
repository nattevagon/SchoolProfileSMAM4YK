import React from 'react'
import "./searchField.scss"
import { Search } from "assets"

export default function SearchField(props) {
    const { className, name, placeholder, value, block } = props

    return (
        <div className="search-field">
            <input
                type="text"
                className={(className ? className : "") + (block ? " block" : "")}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={props.onChange}
            />
            <img className="icon" src={Search} alt="Search" />
        </div>
    )
}
