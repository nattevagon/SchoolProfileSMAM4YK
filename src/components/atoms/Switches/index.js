import React from "react";
import { Form } from "react-bootstrap";
import "./switches.scss";

export default function Switches(props) {
    const { id, label, name, isChecked } = props

    return (
        <Form className="switches">
            <Form.Check
                type="switch"
                name={name}
                id={id}
                checked={isChecked}
                onChange={(event) => props.onChange(event.target.name, event.target.checked)}
            />
            <p className="label">{label}</p>
        </Form>
    )
}
