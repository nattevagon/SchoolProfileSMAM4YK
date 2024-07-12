import React from "react";
import "./checkboxes.scss";

export default function Checkboxes(props) {
    const { className, name, isChecked, isError, label, errorMessage, disable, validation } = props

    return (
        <div className="checkbox">
            <label className={"checkbox-group "+(disable ? "disable":"")+(isError ? "error":"")}>
                {disable ? 
                    <input className={"checkbox "+className} type="checkbox" name={name} checked={isChecked}/>
                :
                    <input className={"checkbox "+className + (validation ? " validation-error" : "")} type="checkbox" name={name} checked={isChecked} onChange={(event) => props.onChange(event.target.name, event.target.checked)}/>
                }
                <p className={"label-text" + (validation ? " text-error" : "")}>{label}</p>
            </label>
            {isError === true && errorMessage !== undefined ? 
                <p className="error-message">{errorMessage}</p>
            :
                null
            }
        </div>
    )
}
