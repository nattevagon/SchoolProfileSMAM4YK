import React, { useState } from 'react'
import { Accordion, Card } from "react-bootstrap"
import "./accordions.scss"

export default function Accordions({ children }) {
    const [toggle, setToggle] = useState(false)
    let header = null;
    let body = null;

    // Iterate over children to find Accordion.Header and Accordion.Body
    React.Children.forEach(children, child => {
        if (child.type === Accordions.Header) {
            header = child;
        } else if (child.type === Accordions.Body) {
            body = child;
        }
    });

    return (
        <Accordion className={"accordions" + (toggle ? " active" : "")}>
            <Accordion.Toggle as="div" className="accordions-toggle" eventKey="0">
                <div className="content" onClick={() => setToggle(!toggle)}>{header}</div>
            </Accordion.Toggle>
            <Accordion.Collapse className="accordions-collapse" eventKey="0">
                <div className="content">{body}</div>
            </Accordion.Collapse>
        </Accordion>
    )
}

// Subcomponents for Accordion
Accordions.Header = function Header({ children }) {
    return <div>{children}</div>;
};

Accordions.Body = function Body({ children }) {
    return <div>{children}</div>;
};
