import React from "react";
import "./radioButtons.scss";

export default function RadioButtons(props) {
    const { disable, isChecked, value, label, name, id } = props

    return (
        <label className={"radio-btn "+(disable ? "disable":"")}>
            <div className={"check "+(isChecked ? "checked":"")}>
                <input 
                    type="radio"
                    name={name}
                    checked={isChecked}
                    disabled={disable}
                    id={id}
                    onChange={(event) => props.onChange(event.target.name, event.target.checked)}
                    value={value}
                ></input>
            </div>
            <div className="title">
                <p>{label}</p>
            </div>
        </label>
    )
}
