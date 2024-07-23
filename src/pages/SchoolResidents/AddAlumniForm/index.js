import React, { useEffect } from 'react'
import "./addAlumniForm.scss"

export default function AddAlumniForm(props) {
    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    return (
        <div>index</div>
    )
}
