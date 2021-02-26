import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import L from 'leaflet';
import marker_icon from './icon-location.svg'

function RenderMap(props) {
    //Custom icon
    const markerIcon = new L.Icon({
        iconUrl: marker_icon,
        iconRetinaUrl: marker_icon,
        iconAnchor: [23,56],
        popupAnchor: [0,-28],
        iconSize: [46,56],
    });

    const {lat,lng} = props;
    const scrollListener = () => {
        
    }
    return (
        <div className="bottom" onScroll={scrollListener}>
            <MapContainer center={[lat,lng]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat,lng]} icon={markerIcon}>
                    <Popup>
                        Lattitude: {lat} <br />Longitude: {lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default RenderMap
