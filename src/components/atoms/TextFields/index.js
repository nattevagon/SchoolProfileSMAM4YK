import React from "react"
import { Form } from "react-bootstrap"
import "./textFields.scss"

const TextFields = (props) => {
    const { className, id, type, as, name, placeholder, value, onChange, onClick, validate, validateCorrect, validateText, label, disabled, markLogo, markTitle } = props

    return (
        <Form.Group className={"text-fields" + (className ? " " + className : "")}>
            {label ?
                <Form.Label className="text-label">{label}</Form.Label>
                :
                null
            }
            <div className="wrap-form-input" onClick={onClick}>
                <Form.Control className={"form-input " + (validate === true || validate === undefined ? "" : "error") + (validateCorrect === true ? " correct" : "")} type={type} id={id} as={as} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disabled} />
                {markLogo ?
                    <div className="form-mark">
                        <img className="mark-icon" src={markLogo} alt="Mark" />
                        {markTitle ?
                            <div className="mark-title">{markTitle}</div>
                            :
                            null
                        }
                    </div>
                    :
                    null
                }
            </div>
            {validate === true || validate === undefined ?
                null
                :
                <div className="text-alert">{validateText}</div>
            }
            {validateCorrect === true ?
                <div className="text-alert correct">{validateText}</div>
                :
                null
            }
        </Form.Group>
    )
}

export default TextFields