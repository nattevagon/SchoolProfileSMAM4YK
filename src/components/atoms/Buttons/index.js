import React from "react"
import { Button } from "react-bootstrap"
import "./buttons.scss"

const Buttons = (props) => {
    const {title, id, active, type, disabled, size, variant, block, isLoad, ...rest} = props

    return (
        <Button 
            className={"buttons"+(isLoad ? " loader":"")} 
            variant={variant} 
            id={id}
            active={active} 
            type={type}
            disabled={disabled} 
            size={size} 
            block={block}
            {...rest}
        >
            {!isLoad ? title : null}
        </Button>
    )
}

export default Buttons