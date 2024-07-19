import React, { useEffect } from 'react'
import "./addAlumniForm.scss"

export default function AddAlumniForm(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("Profile")
    }, [])

    return (
        <div>index</div>
    )
}
