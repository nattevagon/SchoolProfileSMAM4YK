import React, { useEffect } from 'react'
import "./alQuran.scss"

export default function AlQuran(props) {
    useEffect(() => {
        props.onMenu("ELearningAndAlQuran")
    }, [])

    return (
        <div className="alquran-page">
            
        </div>
    )
}
