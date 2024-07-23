import React, { useEffect } from 'react'
import "./eLearning.scss"

export default function ELearning(props) {
    useEffect(() => {
        props.onMenu("ELearningAndAlQuran")
    }, [])

    return (
        <div className="elearning-page">
            
        </div>
    )
}
