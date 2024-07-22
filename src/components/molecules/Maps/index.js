import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Make sure to import Leaflet"s CSS for styling
import "./maps.scss";

export default function Maps(props) {
    if (props.lat && props.lng) {
        return (
            <MapContainer
                className="maps"
                center={[parseFloat(props.lat), parseFloat(props.lng)]}
                zoom={props.zoom}
                style={{ width: props.width, height: props.height }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {/* <Marker position={[parseFloat(props.lat), parseFloat(props.lng)]}>
                </Marker> */}
            </MapContainer>
        )
    }
}
