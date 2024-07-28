import React from 'react'
import "./searchField.scss"
import { CloseX, Search } from "assets"

export default function SearchField(props) {
    const { className, name, placeholder, value, block, searchIcon } = props

    return (
        <div className={"search-field" + (className ? " " + className : "") + (block ? " block" : "") + (searchIcon || value ? " have-icon" : "")}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={props.onChange}
            />

            {value ?
                <img
                    className="icon clear"
                    src={CloseX}
                    alt="Clear"
                    onClick={() => props.onClear()}
                />
                :
                searchIcon && (
                    <img
                        className="icon"
                        src={Search}
                        alt="Search"
                    />
                )
            }
        </div>
    )
}
