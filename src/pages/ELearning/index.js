import React, { useEffect } from 'react'
import "./eLearning.scss"

export default function ELearning(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("ELearningAndAlQuran")
    }, [])

    return (
        <div className="elearning-page">
            
        </div>
    )
}
