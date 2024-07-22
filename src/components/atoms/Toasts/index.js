import React from "react";
import { Modal } from "react-bootstrap";
import { AlertInfo, AlertSuccess, AlertWarning, AlertCritical, CloseThin } from "../../../assets";
import "./toasts.scss";

export default function Toasts(props) {
    const { color, title, subtitle, isFromApps, variant, show, closeButton, cancelButton } = props
    
    const handleDialogClassName= (value) => {
        if(value === "default") {
            return "xs"
        }
        else if (value === "medium") {
            return "md"
        } 
        else {
            return "lg"
        }
    }

    return (
        <Modal className={"toasts"+(color === " light" ? "light":"")+(isFromApps ? " apps" : " web")} contentClassName={variant} dialogClassName={handleDialogClassName(variant)} centered show={show} onHide={() => props.onShow(false)} backdropClassName="toast-backdrop">
            {variant === "default" ? 
                <div className="default">
                    <p className="text">{subtitle}</p>
                </div>
            :
                null
            }
            {variant === "medium" ? 
                <div className="medium">
                    <p className="text">{subtitle}
                    {cancelButton ?
                        <div className="cursor-pointer" onClick={() => props.onShowToasts(false)}> Batalkan</div>
                    :
                        null}
                    </p>
                    {closeButton === undefined ? 
                        null 
                    :
                        <div className="close-btn">
                            {closeButton === "text" ? 
                                <p className="text">Close</p>
                            :
                                <img className="close-img" src={CloseThin} alt="close" onClick={() => props.onShowToasts(false)}/>
                            }
                        </div>
                    }
                </div>
            :
                null
            }
            {variant === "info" || variant === "success" || variant === "warning" || variant === "critical" ? 
                <div className="types">
                    <div className="left">
                        {variant === "info" ?
                            <img src={AlertInfo} alt="info"/>
                        :
                            null }
                        {variant === "success" ?
                            <img src={AlertSuccess} alt="success"/>
                        :
                            null }
                        {variant === "warning" ?
                            <img src={AlertWarning} alt="warning"/>
                        :
                            null }
                        {variant === "critical" ?
                            <img src={AlertCritical} alt="critical"/>
                        :
                            null }
                    </div>
                    <div className="right">
                        {title === undefined ? 
                            null 
                        : 
                            <p className={"text bold "+(subtitle !== undefined ? " has-subtitle":"")}>{title}</p>
                        }
                        <p className="text">{subtitle}</p>
                    </div>
                    {closeButton === undefined ? 
                        null 
                    :
                        <div className="close-btn">
                            {closeButton === "text" ? 
                                <p className="text">Close</p>
                            :
                                <img className="close-img" src={CloseThin} alt="close"/>
                            }
                        </div>
                    }
                </div>
            :
            null }
        </Modal>
    )
}
