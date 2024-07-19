import React, { useEffect } from 'react'
import "./alQuran.scss"

export default function AlQuran(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("ELearningAndAlQuran")
    }, [])

    return (
        <div className="alquran-page">
            
        </div>
    )
}
