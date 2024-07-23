import React, { useEffect } from 'react'
import "./criticismSuggestions.scss"

export default function CriticismSuggestions(props) {
    useEffect(() => {
        props.onMenu("NewsAndInformation")
    }, [])

    return (
        <div className="criticism-suggestions-page">

        </div>
    )
}
