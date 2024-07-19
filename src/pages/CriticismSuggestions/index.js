import React, { useEffect } from 'react'
import "./criticismSuggestions.scss"

export default function CriticismSuggestions(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("NewsAndInformation")
    }, [])

    return (
        <div className="criticism-suggestions-page">

        </div>
    )
}
